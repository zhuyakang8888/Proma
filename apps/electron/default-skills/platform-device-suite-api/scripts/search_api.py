#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
按关键词检索 operation_id。用法：
    python search_api.py "账号" "分页" "代理"
返回匹配的 operation_id、method、path、summary、risk，按匹配度排序。
"""
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
CATALOG_PATH = HERE.parent / "references" / "api_catalog.json"


def load():
    return json.loads(CATALOG_PATH.read_text(encoding="utf-8"))


def op_text(op):
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


def search(queries, limit=20):
    catalog = load()
    ops = catalog["operations"]
    qs = [q.strip().lower() for q in queries if q.strip()]
    scored = []
    for op in ops:
        text = op_text(op)
        score = 0
        for q in qs:
            score += text.count(q)
        if score > 0:
            scored.append((score, op))
    scored.sort(key=lambda t: (-t[0], t[1]["operation_id"]))
    return [op for _, op in scored[:limit]]


def main():
    if len(sys.argv) < 2:
        sys.exit("用法: python search_api.py \"关键词\" [更多关键词...]")
    hits = search(sys.argv[1:])
    if not hits:
        print("未找到匹配的 operation_id。尝试换更宽泛的关键词。")
        return
    print(f"匹配 {len(hits)} 个操作:\n")
    print(f"{'operation_id':<42} {'method':<7} {'risk':<10} {'path'}")
    print("-" * 110)
    for op in hits:
        path = op["path"]
        print(f"{op['operation_id']:<42} {op['method']:<7} {op['risk']:<10} {path}  # {op['summary']}")
    print("\n查看某个接口的参数: python describe_api.py <operation_id>")


if __name__ == "__main__":
    main()
