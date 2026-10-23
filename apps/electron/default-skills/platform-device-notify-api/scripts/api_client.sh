#!/usr/bin/env bash
# api_client.sh — platform-<domain>-api 统一入口 / 降级执行器
#
# 自动选择运行时（按可用性）：
#   1) node   -> 执行 api_client.js（完整执行器：登录/401 重登/限速/重试/分页/审计）
#   2) python -> 执行 api_client.py（同上，Python 版）
#   3) 都没有 -> 内置 bash 兜底实现（需 curl + jq）：确认门禁 + catalog 路由 + 登录 + 调用 + 审计
#
# 用法（与 .js/.py 一致）：
#   bash scripts/api_client.sh --operation <op> --params '<JSON>' [--dry-run] [--confirm] [--confirm-high-risk] [--base-url URL]
#
# 环境变量：API_BASE_URL(必需) / API_USERNAME / API_PASSWORD / API_SSL_VERIFY /
#           API_TOKEN_HEADER / API_TOKEN_PREFIX / API_TIMEOUT / API_SUCCESS_CODES /
#           API_SCRIPT_RUNTIME（透传给 .js/.py；设 python 会强制走 .py 版）
#
# 内置 bash 兜底路径的边界（诚实说明）：
#   - 每次调用独立登录（单进程不缓存 token；.js/.py 每个进程同样只登录一次）
#   - 不做限速/自动重试/--all 自动分页/401 自动重登；写方法剩余参数全部进 body，读方法全部进 query
#   - 结果与审计为紧凑 JSON（jq 序列化），与 .js/.py 的空格格式略有差异，字段一致
#   - 需要 curl 与 jq；内网自签名证书设 API_SSL_VERIFY=0（等价 curl -k）

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CATALOG="$HERE/../references/api_catalog.json"
AUDIT="$HERE/audit.log"

# 优先 .js/.py；API_CLIENT_FORCE_BASH=1 强制进内置 bash（调试/验证用，无副作用）
if [ "${API_CLIENT_FORCE_BASH:-0}" != "1" ]; then
  if command -v node >/dev/null 2>&1; then exec node "$HERE/api_client.js" "$@"; fi
  if command -v python3 >/dev/null 2>&1; then exec python3 "$HERE/api_client.py" "$@"; fi
  if command -v python >/dev/null 2>&1; then exec python "$HERE/api_client.py" "$@"; fi
fi

# ---------------- 内置 bash 兜底 ----------------
set -u
die() { echo "$1" >&2; exit "${2:-1}"; }
say() { local v; eval "v=\"\${$1:-$2}\""; printf '%s' "$v"; }

[ -f "$CATALOG" ] || die "catalog not found: $CATALOG (run tools/build_catalog_from_md.py first)" 1
command -v jq  >/dev/null 2>&1 || die "api_client.sh 内置 bash 路径需要 jq（brew install jq）；或用 node/python 运行" 4
command -v curl >/dev/null 2>&1 || die "api_client.sh 内置 bash 路径需要 curl" 4

OPERATION='' PARAMS='{}' DRY=0 CF=0 CHR=0 BASEURL=''
while [ $# -gt 0 ]; do
  case "$1" in
    --operation)          OPERATION="${2:-}"; shift 2 ;;
    --operation=*)        OPERATION="${1#*=}"; shift ;;
    --params)             PARAMS="${2:-}"; shift 2 ;;
    --params=*)           PARAMS="${1#*=}"; shift ;;
    --dry-run)            DRY=1; shift ;;
    --confirm)            CF=1; shift ;;
    --confirm-high-risk)  CHR=1; shift ;;
    --base-url)           BASEURL="${2:-}"; shift 2 ;;
    --base-url=*)         BASEURL="${1#*=}"; shift ;;
    -h|--help)
      echo "用法：bash scripts/api_client.sh --operation <op> --params '<JSON>' [--dry-run] [--confirm] [--confirm-high-risk] [--base-url URL]"
      exit 0 ;;
    *) die "unrecognized arguments: $1" 2 ;;
  esac
done
[ -n "$OPERATION" ] || die "the following arguments are required: --operation" 2
printf '%s' "$PARAMS" | jq -e . >/dev/null 2>&1 || die "--params 必须是合法 JSON" 1

OPJSON="$(jq -c --arg o "$OPERATION" '.operations[] | select(.operation_id == $o)' "$CATALOG" 2>/dev/null || true)"
[ -n "$OPJSON" ] || die "unknown operation_id: $OPERATION. 用 search_api 检索。" 1

METHOD="$(jq -r '.method | ascii_upcase' <<<"$OPJSON")"
RAWPATH="$(jq -r '.path' <<<"$OPJSON")"
RISK="$(jq -r '.risk' <<<"$OPJSON")"
PREFIX="$(jq -r --arg d "$(say API_PATH_PREFIX '')" '.route_prefix // $d' <<<"$OPJSON")"

# {pathParam} 替换并从剩余 params 中剔除
for t in $(printf '%s' "$RAWPATH" | grep -oE '\{[^}]+\}' || true); do
  name="${t#\{}"		# strip '{'
  name="${name%\}}"			# strip '}'
  if printf '%s' "$PARAMS" | jq -e --arg k "$name" 'has($k)' >/dev/null 2>&1; then
    val="$(printf '%s' "$PARAMS" | jq -r --arg k "$name" '.[$k]')"
    RAWPATH="${RAWPATH//$t/$val}"
    PARAMS="$(printf '%s' "$PARAMS" | jq -c --arg k "$name" 'del(.[$k])')"
  else
    die "缺少路径参数: $name" 1
  fi
done

BASE="$(say API_BASE_URL '')"
[ -z "$BASE" ] && BASE="$(say API_BASE '')"
[ -n "$BASEURL" ] && BASE="$BASEURL"
[ -z "$BASE" ] && BASE='http://<API_BASE_URL>'   # 占位符：--dry-run 可用
case "$RAWPATH" in
  "$PREFIX"*) URL="${BASE%/}${RAWPATH}" ;;   # 防双前缀
  *) URL="${BASE%/}${PREFIX}${RAWPATH}" ;;
esac

BODY=''
if [ "$METHOD" = "GET" ] || [ "$METHOD" = "HEAD" ] || [ "$METHOD" = "DELETE" ]; then
  QS="$(printf '%s' "$PARAMS" | jq -r 'to_entries | map(.key + "=" + ((.value | tostring) | @uri)) | join("&")')"
  [ -n "$QS" ] && URL="$URL?$QS"
else
  BODY="$PARAMS"
fi

if [ "$DRY" = "1" ]; then
  echo "[dry-run] $METHOD $URL"
  [ -n "$BODY" ] && echo "[dry-run] body: $(printf '%s' "$BODY" | jq -c .)"
  case "$RISK" in
    read)        echo "[dry-run] risk: read (只读，无需确认)" ;;
    write)       echo "[dry-run] risk: write (写操作，实际执行需 --confirm)" ;;
    destructive) echo "[dry-run] risk: destructive (破坏性操作，实际执行需 --confirm --confirm-high-risk)" ;;
  esac
  exit 0
fi

# 真实调用必须提供 base URL（dry-run 除外）
[ "$BASE" = 'http://<API_BASE_URL>' ] && die "缺少 API_BASE_URL。请设置环境变量 API_BASE_URL（或 --base-url）。" 1

# 确认门禁（与 .js/.py 一致：write 需 --confirm；destructive 需双重确认）
GATE_MSG=""
if [ "$RISK" = "write" ] && [ "$CF" != "1" ]; then
  GATE_MSG="写操作 $OPERATION 需要 --confirm 确认后才可执行"
fi
if [ "$RISK" = "destructive" ] && { [ "$CF" != "1" ] || [ "$CHR" != "1" ]; }; then
  GATE_MSG="破坏性操作 $OPERATION 需要 --confirm --confirm-high-risk 双重确认后才可执行"
fi
if [ -n "$GATE_MSG" ]; then
  printf '{"ok": false, "error": {"status": 403, "message": "%s"}}\n' "$GATE_MSG"
  exit 2
fi

SSLK=''
[ "$(say API_SSL_VERIFY 1)" = "0" ] && SSLK='-k'
TIMEOUT="$(say API_TIMEOUT 30)"
UNAME="$(say API_USERNAME admin)"; PASS="$(say API_PASSWORD admin123)"
HDNAME="$(say API_TOKEN_HEADER Authorization)"; HDPRE="$(say API_TOKEN_PREFIX 'Bearer ')"

T0="$(date +%s)"
LOGINPATH="$(jq -r '._meta.login.path' "$CATALOG")"
LRESP="$(curl $SSLK -sS --max-time "$TIMEOUT" -X POST -H 'Content-Type: application/json' \
  --data "{\"username\":\"$UNAME\",\"password\":\"$PASS\",\"code\":\"\",\"uuid\":\"\"}" \
  "${BASE%/}${LOGINPATH}" || die "login 请求失败" 3)"
TOKEN="$(printf '%s' "$LRESP" | jq -r '
  if (.data | type) == "string" then .data
  elif (.data | type) == "object" and .data.token != null then .data.token
  elif .token != null then .token
  else "" end')"
[ -n "$TOKEN" ] || die "login response has no token field: ${LRESP:0:300}" 3

TMP="$(mktemp)"
HTTP="$(curl $SSLK -sS --max-time "$TIMEOUT" -X "$METHOD" -H 'Content-Type: application/json' \
  -H "$HDNAME: $HDPRE$TOKEN" ${BODY:+--data "$BODY"} -o "$TMP" -w '%{http_code}' "$URL" \
  || { rm -f "$TMP"; die "请求失败" 3; })"
PAYLOAD="$(cat "$TMP")"; rm -f "$TMP"
MS=$(( ($(date +%s) - T0) * 1000 ))

# 业务码检查（对齐 .js/.py：API_SUCCESS_CODES 默认 0,200,100000；布尔 code 视为成功）
CODES="$(say API_SUCCESS_CODES 0,200,100000 | tr ',' ' ')"
PAYLOAD_OK="$(printf '%s' "$PAYLOAD" | jq -e --arg c "$CODES" '
  .code as $code |
  ( (has("code") | not)
    or ($code | type) == "boolean"
    or (($code | type) == "number" and (($c | split(" ") | map(tonumber)) | index($code) != null)) )
  and (.success != false) and (.error != true)' 2>/dev/null)" || PAYLOAD_OK="false"

ok=""
if [ "$HTTP" -lt 400 ] && [ "$PAYLOAD_OK" = "true" ]; then ok="1"; fi

if [ "$ok" = "1" ]; then
  RESULT="$(printf '%s' "$PAYLOAD" | jq -c --argjson http "$HTTP" --arg op "$OPERATION" --argjson ms "$MS" '
    { ok: true,
      data: (if has("data") then .data else . end),
      meta: { status: $http, code: (if has("code") then .code else null end),
              operation: $op, duration_ms: $ms } }' 2>/dev/null \
    || echo '{"ok": true, "data": null}')"
else
  MSG="$(printf '%s' "$PAYLOAD" | jq -r '(.msg // .message // "请求失败")' 2>/dev/null || echo '请求失败')"
  RESULT="$(printf '%s' "$PAYLOAD" | jq -c --argjson http "$HTTP" --arg op "$OPERATION" --arg m "$MSG" --argjson ms "$MS" '
    { ok: false,
      error: { status: $http, code: (if has("code") then .code else null end),
               message: $m, data: (if has("data") then .data else null end) } }' 2>/dev/null \
    || printf '{"ok": false, "error": {"status": %s, "code": null, "message": "%s", "data": null}}' "$HTTP" "$MSG")"
fi

ST="ok"; [ "$ok" = "1" ] || ST="error"
echo "{\"ts\": \"$(date '+%Y-%m-%d %H:%M:%S')\", \"op\": \"$OPERATION\", \"user\": \"$UNAME\", \"status\": \"$ST\", \"http\": $HTTP, \"ms\": $MS}" >> "$AUDIT" 2>/dev/null || true
echo "$RESULT"
exit 0