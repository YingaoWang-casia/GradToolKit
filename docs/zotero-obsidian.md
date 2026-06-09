# Zotero + Obsidian 论文阅读工作流

这套组合适合想要本地保存论文笔记、长期积累知识库、并且未来可能使用 LaTeX 或 Markdown 写作的人。

## 分工

| 工具 | 负责什么 | 不负责什么 |
| --- | --- | --- |
| Zotero | 文献条目、PDF、引用、标签 | 长期观点写作 |
| Obsidian | 论文卡片、主题笔记、idea、综述草稿 | PDF 元数据管理 |
| Better BibTeX | 稳定 citation key、导出 bib | 判断论文质量 |

## 推荐目录

```text
ResearchVault/
├── 00-inbox/
├── 01-paper-notes/
├── 02-topic-notes/
├── 03-projects/
├── 04-writing/
└── templates/
```

## Zotero 设置

1. 每个研究方向建一个 collection。
2. 标签只保留能帮助决策的标签，例如 `must-read`、`baseline`、`dataset`、`survey`。
3. 安装 Better BibTeX 后设定 citation key。
4. 不要频繁修改 citation key 规则，后期会影响笔记链接。
5. 每周清一次重复条目和无效 PDF。

## Obsidian 设置

先不要装太多插件。第一版只需要：

- Templates：复用论文卡片。
- Dataview：可选，用于汇总论文字段。
- Git：可选，用于备份笔记。
- Citations：可选，用于从 Zotero 引用论文。

## 单篇论文流程

1. 在 Zotero 中保存论文和 PDF。
2. 打标签：方向、状态、用途。
3. 在 Obsidian 建一篇论文卡片。
4. 复制 [论文阅读模板](../templates/paper-note-template.md)。
5. 只把你自己的判断写进 Obsidian，不要复制大段原文。
6. 如果论文会进 related work，再补充引用 key 和对比段落。

## 主题笔记怎么写

主题笔记不是论文摘要集合，而是你对一类问题的理解。例如：

```text
# RAG 引用忠实性评估

## 问题定义
## 常见数据集
## 主流指标
## 代表论文
## 目前未解决的问题
## 我的实验想法
```
