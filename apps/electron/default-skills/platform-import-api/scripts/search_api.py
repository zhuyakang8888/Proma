#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
按关键词检索 operation_id。用法：
    python search_api.py "账号" "分页" "代理"
    python search_api.py "小红书 发帖"        # 整句会自动拆词

匹配规则：
    1. 每个参数按空白/逗号/顿号等拆成词；
    2. 词表未命中时按业务别名扩展（如 小红书 -> 帖子/发帖，楼中楼 -> 评论）；
    3. 摘要与 path 命中加权，所有原始词都命中的操作额外提权。

返回匹配的 operation_id、method、path、summary、risk，按匹配度排序。
"""
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
CATALOG_PATH = HERE.parent / "references" / "api_catalog.json"

# 业务别名：口语/平台词 -> catalog 里实际使用的用词。
# 只收录经验证的高频说法，避免扩展过宽导致排序被噪声淹没。
ALIASES = {
    "小红书": ["帖子", "发帖"],
    "抖音": ["帖子", "发帖"],
    "快手": ["帖子", "发帖"],
    "视频号": ["帖子", "发帖"],
    "微博": ["帖子", "发帖"],
    "笔记": ["帖子"],
    "楼中楼": ["评论"],
    "二级评论": ["评论"],
    "子评论": ["评论"],
    "回复评论": ["评论"],
    "养号": ["计划", "日程"],
    "搜索词": ["关键词", "搜索"],
    "失败原因": ["日志", "log"],
    "发布失败": ["日志", "log"],
    "报错": ["日志", "log"],
    "任务失败": ["日志", "log"],
    "日志": ["log"],
    "任务日志": ["日志", "log"],
    "失败日志": ["日志", "log"],
    "执行日志": ["日志", "log"],
    "录入": ["导入"],
    "文档导入": ["导入"],
    "批量导入": ["导入"],
    "配置代理": ["网络配置", "代理"],
}

SPLIT_RE = re.compile(r"[\s,，、;；/|]+")


def load():
    return json.loads(CATALOG_PATH.read_text(encoding="utf-8"))


def op_text(op):
    """宽文本：用于计分。"""
    parts = [
        op["operation_id"],
        op["summary"],
        op.get("description") or "",
        op["path"],
        op["method"],
    ]
    for group in op["params"].values():
        for p in group:
            parts.extend([p["name"], p.get("desc") or ""])
    return " ".join(parts).lower()


def op_narrow(op):
    """窄文本：只含标识/摘要/路径，用于核心命中加权。"""
    return " ".join([op["operation_id"], op["summary"], op["path"]]).lower()


def tokenize(queries):
    raw = []
    for q in queries:
        raw.extend(t for t in SPLIT_RE.split(q.strip().lower()) if t)
    tokens = []
    for t in raw:
        if t not in tokens:
            tokens.append(t)
        for alias in ALIASES.get(t, []):
            a = alias.lower()
            if a not in tokens:
                tokens.append(a)
    return raw, tokens


def search(queries, limit=20):
    ops = load()["operations"]
    raw, tokens = tokenize(queries)
    scored = []
    for op in ops:
        text = op_text(op)
        narrow = op_narrow(op)
        score = 0
        for t in tokens:
            c = text.count(t)
            if c:
                score += c + narrow.count(t) * 2
        if score == 0:
            continue
        # 所有原始词都命中：显著提权，避免别名扩展把结果冲散
        if raw and all(t in text for t in raw):
            score += 10
        scored.append((score, op))
    scored.sort(key=lambda t: (-t[0], t[1]["operation_id"]))
    return [op for _, op in scored[:limit]], tokens


def main():
    if len(sys.argv) < 2:
        sys.exit('用法: python search_api.py "关键词" [更多关键词...]')
    hits, tokens = search(sys.argv[1:])
    if not hits:
        print(f"未找到匹配的 operation_id（检索词: {', '.join(tokens)}）")
        print("建议：换更短的中文词，或直接浏览 references/api_catalog.md 的业务分组。")
        return
    print(f"匹配 {len(hits)} 个操作（检索词: {', '.join(tokens)}）:\n")
    print(f"{'operation_id':<42} {'method':<7} {'risk':<10} {'path'}")
    print("-" * 110)
    for op in hits:
        path = op["path"]
        print(f"{op['operation_id']:<42} {op['method']:<7} {op['risk']:<10} {path}  # {op['summary']}")
    print("\n查看某个接口的参数: python describe_api.py <operation_id>")


if __name__ == "__main__":
    main()
