#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
查看某个 operation 的参数 schema。用法：
    python describe_api.py <operation_id>
输出参数、示例、风险、权限、是否写操作。信息全部来自 api_catalog.json（即原始 Markdown），不编造。
"""
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
CATALOG_PATH = HERE.parent / "references" / "api_catalog.json"


def load():
    return json.loads(CATALOG_PATH.read_text(encoding="utf-8"))


def main():
    if len(sys.argv) < 2:
        sys.exit("用法: python describe_api.py <operation_id>")
    op_id = sys.argv[1]
    catalog = load()
    op = next((o for o in catalog["operations"] if o["operation_id"] == op_id), None)
    if op is None:
        sys.exit(f"catalog 中不存在 operation_id: {op_id}")

    lines = [f"### {op['operation_id']}", ""]
    lines.append(f"- 摘要：{op['summary']}")
    if op["description"]:
        lines.append(f"- 描述：{op['description']}")
    lines.append(f"- 请求：`{op['method']} {op['path']}`")
    lines.append(f"- 风险：{op['risk']}（{'只读' if op['risk']=='read' else ('写操作，执行需 --confirm' if op['risk']=='write' else '破坏性，执行需 --confirm --confirm-high-risk')}）")
    lines.append(f"- 鉴权：{op['auth']}")
    lines.append(f"- 来源：{op['source_file']}:{op['source_line']}")
    if op["operation_id_generated"]:
        lines.append(f"- ⚠️ operation_id 为自动生成（{op['operation_id'].rsplit('_',1)[0]} 规则），尚无人工确认的命名。")

    for kind, label in (("path", "路径参数"), ("query", "Query 参数"), ("header", "Header 参数"), ("body", "Body (JSON)")):
        ps = op["params"].get(kind) or []
        if not ps:
            continue
        lines.append("")
        lines.append(f"**{label}**：")
        lines.append("| 参数 | 类型 | 必填 | 说明 |")
        lines.append("| --- | --- | --- | --- |")
        for p in ps:
            lines.append(f"| `{p['name']}` | {p['type'] or '?'} | {'是' if p['required'] else '否'} | {p['desc'] or ''} |")

    if op["response_fields"]:
        lines.append("")
        lines.append("**响应顶层字段**：`" + "`, `".join(op["response_fields"]) + "`")
    if op["pagination"]:
        lines.append("")
        lines.append("**分页**：支持自动翻页 (`--all`)")
        if op["pagination"].get("note"):
            lines.append(f"⚠️ {op['pagination']['note']}")

    print("\n".join(lines))


if __name__ == "__main__":
    main()
