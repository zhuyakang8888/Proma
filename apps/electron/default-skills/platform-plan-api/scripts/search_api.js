'use strict';
/**
 * 按关键词检索 operation_id。用法：
 *   node search_api.js "账号" "分页" "代理"
 *   node search_api.js "小红书 发帖"        # 整句会自动拆词
 *   （API_SCRIPT_RUNTIME=python 时降级运行 search_api.py）
 *
 * 匹配规则：
 *   1. 每个参数按空白/逗号/顿号等拆成词；
 *   2. 词表未命中时按业务别名扩展（如 小红书 -> 帖子/发帖，楼中楼 -> 评论）；
 *   3. 摘要与 path 命中加权，所有原始词都命中的操作额外提权。
 *
 * 返回匹配的 operation_id、method、path、summary、risk，按匹配度排序。
 */
const fs = require('node:fs');
const path = require('node:path');
const runtime = require('./runtime.js');

const HERE = __dirname;
const CATALOG_PATH = path.join(HERE, '..', 'references', 'api_catalog.json');

// 业务别名：口语/平台词 -> catalog 里实际使用的用词。
// 只收录经验证的高频说法，避免扩展过宽导致排序被噪声淹没。
const ALIASES = {
  小红书: ['帖子', '发帖'],
  抖音: ['帖子', '发帖'],
  快手: ['帖子', '发帖'],
  视频号: ['帖子', '发帖'],
  微博: ['帖子', '发帖'],
  笔记: ['帖子'],
  楼中楼: ['评论'],
  二级评论: ['评论'],
  子评论: ['评论'],
  回复评论: ['评论'],
  养号: ['计划', '日程'],
  搜索词: ['关键词', '搜索'],
  失败原因: ['日志', 'log'],
  发布失败: ['日志', 'log'],
  报错: ['日志', 'log'],
  任务失败: ['日志', 'log'],
  日志: ['log'],
  任务日志: ['日志', 'log'],
  失败日志: ['日志', 'log'],
  执行日志: ['日志', 'log'],
  录入: ['导入'],
  文档导入: ['导入'],
  批量导入: ['导入'],
  配置代理: ['网络配置', '代理'],
};

const SPLIT_RE = /[\s,，、;；/|]+/;

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

function opNarrow(op) {
  return [op.operation_id, op.summary, op.path].join(' ').toLowerCase();
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

function tokenize(queries) {
  const raw = [];
  for (const q of queries) {
    for (const t of q.trim().toLowerCase().split(SPLIT_RE)) {
      if (t) raw.push(t);
    }
  }
  const tokens = [];
  for (const t of raw) {
    if (!tokens.includes(t)) tokens.push(t);
    for (const alias of ALIASES[t] || []) {
      const a = String(alias).toLowerCase();
      if (!tokens.includes(a)) tokens.push(a);
    }
  }
  return { raw, tokens };
}

function search(queries, limit = 20) {
  const ops = load().operations;
  const { raw, tokens } = tokenize(queries);
  const scored = [];
  for (const op of ops) {
    const text = opText(op);
    const narrow = opNarrow(op);
    let score = 0;
    for (const t of tokens) {
      const c = count(text, t);
      if (c) score += c + count(narrow, t) * 2;
    }
    if (score === 0) continue;
    // 所有原始词都命中：显著提权，避免别名扩展把结果冲散
    if (raw.length && raw.every(t => text.includes(t))) score += 10;
    scored.push({ score, op });
  }
  scored.sort((a, b) => (b.score - a.score) || (a.op.operation_id < b.op.operation_id ? -1 : 1));
  return { hits: scored.slice(0, limit).map(x => x.op), tokens };
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
  const { hits, tokens } = search(args);
  if (!hits.length) {
    console.log(`未找到匹配的 operation_id（检索词: ${tokens.join(', ')}）`);
    console.log('建议：换更短的中文词，或直接浏览 references/api_catalog.md 的业务分组。');
    return;
  }
  const out = [];
  out.push(`匹配 ${hits.length} 个操作（检索词: ${tokens.join(', ')}）:`, '');
  out.push(`${pad('operation_id', 42)} ${pad('method', 7)} ${pad('risk', 10)} path`);
  out.push('-'.repeat(110));
  for (const op of hits) {
    out.push(`${pad(op.operation_id, 42)} ${pad(op.method, 7)} ${pad(op.risk, 10)} ${op.path}  # ${op.summary}`);
  }
  out.push('', '查看某个接口的参数: node describe_api.js <operation_id>');
  console.log(out.join('\n'));
}
