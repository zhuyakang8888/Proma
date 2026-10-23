'use strict';
/**
 * 查看某个 operation 的参数 schema。用法：
 *   node describe_api.js <operation_id>
 *   （API_SCRIPT_RUNTIME=python 时降级运行 describe_api.py；无 node 环境直接 python scripts/describe_api.py）
 * 输出参数、示例、风险、权限、是否写操作。信息全部来自 api_catalog.json（即原始 Markdown），不编造。
 */
const fs = require('node:fs');
const path = require('node:path');
const runtime = require('./runtime.js');

const HERE = __dirname;
const CATALOG_PATH = path.join(HERE, '..', 'references', 'api_catalog.json');

if (!runtime.dispatch('describe_api.py', process.argv.slice(2))) {
  main();
}

function load() {
  return JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
}

function main() {
  if (process.argv.length < 3) {
    console.error('用法: node describe_api.js <operation_id>');
    process.exit(1);
  }
  const opId = process.argv[2];
  const catalog = load();
  const op = (catalog.operations || []).find(o => o.operation_id === opId);
  if (!op) {
    console.error(`catalog 中不存在 operation_id: ${opId}`);
    process.exit(1);
  }

  const lines = [`### ${op.operation_id}`, ''];
  lines.push(`- 摘要：${op.summary}`);
  if (op.description) lines.push(`- 描述：${op.description}`);
  lines.push(`- 请求：\`${op.method} ${op.path}\``);
  const riskNote = op.risk === 'read' ? '只读'
    : (op.risk === 'write' ? '写操作，执行需 --confirm' : '破坏性，执行需 --confirm --confirm-high-risk');
  lines.push(`- 风险：${op.risk}（${riskNote}）`);
  lines.push(`- 鉴权：${op.auth}`);
  lines.push(`- 来源：${op.source_file}:${op.source_line}`);
  if (op.operation_id_generated) {
    const idx = op.operation_id.lastIndexOf('_');
    const rule = idx === -1 ? op.operation_id : op.operation_id.slice(0, idx);
    lines.push(`- ⚠️ operation_id 为自动生成（${rule} 规则），尚无人工确认的命名。`);
  }

  for (const [kind, label] of [['path', '路径参数'], ['query', 'Query 参数'], ['header', 'Header 参数'], ['body', 'Body (JSON)']]) {
    const ps = (op.params && op.params[kind]) || [];
    if (!ps.length) continue;
    lines.push('', `**${label}**：`, '| 参数 | 类型 | 必填 | 说明 |', '| --- | --- | --- | --- |');
    for (const p of ps) {
      lines.push(`| \`${p.name}\` | ${p.type || '?'} | ${p.required ? '是' : '否'} | ${p.desc || ''} |`);
    }
  }

  if (op.response_fields && op.response_fields.length) {
    lines.push('', `**响应顶层字段**：\`${op.response_fields.join('\`, \`')}\``);
  }
  if (op.pagination) {
    lines.push('', '**分页**：支持自动翻页 (`--all`)');
    if (op.pagination.note) lines.push(`⚠️ ${op.pagination.note}`);
  }

  process.stdout.write(lines.join('\n') + '\n');
}