# 研一刚进组工具栈

这个页面适合刚进组、刚换方向、或想重新整理科研工具链的人。目标不是把所有工具一次装满，而是用最少工具跑通“找论文、读论文、记笔记、汇报、记录实验”这条线。

## 先装这 6 个

| 场景 | 推荐工具 | 为什么先用它 |
| --- | --- | --- |
| 文献管理 | Zotero | 免费、跨平台、引用管理成熟，适合从研一用到毕业 |
| 论文发现 | Google Scholar + Semantic Scholar | 一个覆盖广，一个方便看相关论文和引用网络 |
| 笔记 | Obsidian 或 Notion 二选一 | Obsidian 适合本地 Markdown，Notion 适合看板和周报 |
| 写作 | Overleaf 或 Word | 按课题组习惯选，不要一开始为了工具争论 |
| 代码与实验 | Git + GitHub | 先管住代码版本，再考虑更复杂的数据版本 |
| 汇报 | PowerPoint / Keynote / Marp | 先能稳定汇报，再追求自动化和美观 |

## 30 分钟启动流程

1. 安装 Zotero 和浏览器插件。
2. 建一个 Zotero collection，名字用你的研究方向，例如 `RAG Evaluation`。
3. 用 Google Scholar 找 3 篇种子论文，导入 Zotero。
4. 选 Obsidian 或 Notion 建一个 `Research` 空间。
5. 复制 [论文阅读模板](../templates/paper-note-template.md)，读第一篇时只填 6 个字段。
6. 建一个 `weekly-report.md`，复制 [组会周报模板](../templates/weekly-report-template.md)。
7. 如果你写代码，创建一个 GitHub 私有仓库或本地 Git 仓库，至少把实验脚本纳入版本管理。

## 第一周不要做什么

- 不要同时试 5 个笔记软件。
- 不要花两天调 Obsidian 插件和主题。
- 不要还没读论文就开始做复杂知识图谱。
- 不要把 AI 总结复制成自己的文献综述。
- 不要把数据、论文、代码、笔记全堆在桌面。

## 最小目录结构

```text
research/
├── papers/
├── notes/
├── experiments/
├── slides/
└── writing/
```

## 工具选择规则

| 如果你更在意 | 选这个 | 原因 |
| --- | --- | --- |
| 本地文件、长期可迁移 | Obsidian | Markdown 文件可直接备份和版本管理 |
| 看板、数据库、协作 | Notion | 表格、筛选、页面组织更顺手 |
| 会议或期刊要求 LaTeX | Overleaf | 模板和引用管理更成熟 |
| 导师只接受 Word | Word | 不要为了工具增加沟通成本 |
| 实验很多、参数复杂 | Git + 日志模板 | 先统一记录，再考虑 W&B、MLflow、DVC |

## 一周后再升级

等你已经读完 5 篇论文、做过 1 次组会、跑过 1 个实验，再考虑：

- Zotero 的 Better BibTeX
- Obsidian 的 Dataview、Templater、Citation 插件
- Notion 的项目看板和文献数据库
- W&B / MLflow 的实验追踪
- Overleaf 的 Git 或 GitHub 同步
