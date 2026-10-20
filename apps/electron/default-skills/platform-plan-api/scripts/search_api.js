'use strict';
/**
 * 按关键词检索 operation_id。用法：
 *   node search_api.js "账号" "分页" "代理"
 *   （API_SCRIPT_RUNTIME=python 时降级运行 search_api.py；无 node 环境直接 python scripts/search_api.py）
 * 返回匹配的 operation_id、method、path、summary、risk，按匹配度排序。
 */
const fs = require('node:fs');
const path = require('node:path');
const runtime = require('./runtime.js');

const HERE = __dirname;
const CATALOG_PATH = path.join(HERE, '..', 'references', 'api_catalog.json');

if (!runtime.dispatch('search_api.py', process.argv.slice(2))) {
  main();
}

function load() {
  return JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
}

function opText(op) {
  const parts = [
    op.operation_id,
    op.summary,
    op.description || '',
    op.path,
    op.method,
  ];
  for (const group of Object.values(op.params || {})) {
    for (const p of group) parts.push(p.name, p.desc || '');
  }
  return parts.join(' ').toLowerCase();
}

function count(text, q) {
  let n = 0;
  let i = 0;
  while ((i = text.indexOf(q, i)) !== -1) {
    n += 1;
    i += q.length;
  }
  return n;
}

function search(queries, limit = 20) {
  const ops = load().operations;
  const qs = queries.map(q => q.trim().toLowerCase()).filter(Boolean);
  const scored = [];
  for (const op of ops) {
    const text = opText(op);
    let score = 0;
    for (const q of qs) score += count(text, q);
    if (score > 0) scored.push({ score, op });
  }
  scored.sort((a, b) => (b.score - a.score) || (a.op.operation_id < b.op.operation_id ? -1 : 1));
  return scored.slice(0, limit).map(x => x.op);
}

function pad(str, len) {
  return String(str).padEnd(len);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('用法: node search_api.js "关键词" [更多关键词...]');
    process.exit(1);
  }
  const hits = search(args);
  if (!hits.length) {
    console.log('未找到匹配的 operation_id。尝试换更宽泛的关键词。');
    return;
  }
  const out = [];
  out.push(`匹配 ${hits.length} 个操作:`, '');
  out.push(`${pad('operation_id', 42)} ${pad('method', 7)} ${pad('risk', 10)} path`);
  out.push('-'.repeat(110));
  for (const op of hits) {
    out.push(`${pad(op.operation_id, 42)} ${pad(op.method, 7)} ${pad(op.risk, 10)} ${op.path}  # ${op.summary}`);
  }
  out.push('', '查看某个接口的参数: node describe_api.js <operation_id>');
  console.log(out.join('\n'));
}