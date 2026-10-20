'use strict';
/**
 * 运行时探测与分发（三个 .js 入口共用，与 api_client.py / describe_api.py / search_api.py 配套）。
 *
 * 策略（与 SKILL.md 一致）：
 *   API_SCRIPT_RUNTIME=auto   -> Node 优先，直接执行本 .js 实现
 *   API_SCRIPT_RUNTIME=node   -> 同 auto，强制用 .js 实现
 *   API_SCRIPT_RUNTIME=python -> 降级运行同目录 .py 版（探测 python3 -> python）
 *
 * 无 node 环境（本文件无法运行）时，请直接 `python scripts/<同名>.py`。
 */
const { spawnSync } = require('node:child_process');
const path = require('node:path');

function mode() {
  const v = (process.env.API_SCRIPT_RUNTIME || 'auto').toLowerCase();
  return v === 'python' ? 'python' : 'node';
}

function resolvePython() {
  for (const c of ['python3', 'python']) {
    try {
      const r = spawnSync(c, ['--version'], { encoding: 'utf8' });
      if (r.status === 0) return c;
    } catch (_) { /* try next */ }
  }
  return null;
}

/**
 * 派发到 python 版时返回 true（内部已完成 process.exit，不会正常返回）；
 * 需要继续走本 .js 实现时返回 false。
 */
function dispatch(twinPy, args) {
  if (mode() !== 'python') return false;
  const interp = resolvePython();
  if (!interp) {
    console.error(
      'API_SCRIPT_RUNTIME=python 但未找到 python3/python 可执行文件。' +
      '本机有 node 请直接把 API_SCRIPT_RUNTIME 设为 auto/node（或取消该变量）；' +
      '无 node 且无 python 的环境请先安装其一。'
    );
    process.exit(4);
  }
  const r = spawnSync(interp, [twinPy, ...args], { stdio: 'inherit' });
  process.exit(r.status === null ? 1 : r.status);
}

module.exports = { dispatch, mode, resolvePython };