# GradToolKit

GradToolKit 是一个面向计算机、人工智能与数据驱动研究方向研究生的科研入门与方法工具箱。

它以严格科研方法为核心，帮助没有科研经验的人完成从“刚进组、不知道做什么”，到“能定义问题、提出假设、设计实验、分析失败并完成论文”的过渡。工具和 AI 只用于降低执行成本，不能替代研究判断、证据和学术责任。

## 我现在遇到什么问题？

- [我刚进组，不知道科研每天做什么](docs/start-here.md)
- [我想在 30 天内建立最小科研闭环](docs/first-30-days.md)
- [导师只给了一个宽泛方向，我不知道如何调研](docs/direction-mapping.md)
- [我需要第一次复现 baseline](docs/baseline-reproduction.md)
- [我要准备第一次组会](docs/weekly-meeting-case.md)
- [我读了很多论文，但仍然没有研究问题](docs/problem-formulation.md)
- [我有一个 idea，不知道是不是伪创新](docs/idea-audit.md)
- [我不知道怎样设计能说明问题的实验](docs/experiment-design.md)
- [实验一直失败，不知道该继续还是止损](docs/research-debugging.md)
- [我想合理使用 AI 辅助科研](docs/ai-research-tools.md)
- [我想用 AI 辅助文献检索和阅读](docs/ai-literature-workflow.md)
- [我想让 AI 严格审查 idea 和实验](docs/ai-idea-experiment-review.md)
- [我想用 AI 辅助代码和数据分析](docs/ai-coding-data-analysis.md)
- [我想用 AI 检查论文写作和引用](docs/ai-writing-citation.md)
- [我需要选择论文写作工具](docs/thesis-writing.md)
- [我需要整理实验与版本](docs/experiment-management.md)

## 核心方法：科研不是跑分，而是减少不确定性

建议依次阅读：

1. [科研最小闭环](docs/research-loop.md)
2. [如何定义研究问题](docs/problem-formulation.md)
3. [Idea 与 novelty 审计](docs/idea-audit.md)
4. [实验设计：让结果能够区分不同解释](docs/experiment-design.md)
5. [失败诊断与研究止损](docs/research-debugging.md)

一项最小研究应能回答：

```text
观察到什么现象？
现有解释是什么？
你的假设是什么？
该假设会产生什么可观察预测？
什么实验能区分不同解释？
结果支持、削弱还是否定假设？
下一步应扩展、修正还是停止？
```

## 四层内容结构

### A. 科研新人入口

帮助没有科研经验的人理解科研日常、建立方向地图、复现 baseline、准备第一次组会，并在 30 天内跑通一个最小闭环。

- [研一刚进组工具栈](docs/start-here.md)
- [新人 30 天路线](docs/first-30-days.md)
- [两周建立研究方向地图](docs/direction-mapping.md)
- [第一次复现 Baseline](docs/baseline-reproduction.md)
- [第一次组会：从流水账到研究判断](docs/weekly-meeting-case.md)
- [论文阅读笔记工作流](docs/paper-reading.md)
- [第一次做文献综述](docs/literature-review.md)
- [组会汇报准备](docs/weekly-meeting.md)

### B. 严格科研方法

这是项目的核心。重点不是教人包装结果，而是形成可以被反驳、被验证和被复现的研究判断。

- [科研最小闭环](docs/research-loop.md)
- [如何定义研究问题](docs/problem-formulation.md)
- [Idea 与 novelty 审计](docs/idea-audit.md)
- [实验设计](docs/experiment-design.md)
- [失败诊断与研究止损](docs/research-debugging.md)

### C. AI 辅助科研专题

AI 可以辅助检索、结构化阅读、代码检查、实验审计、写作润色和模拟审稿，但不能替研究者决定 novelty、解释实验结果或承担学术责任。

- [AI 辅助科研：原则、边界与核验闭环](docs/ai-research-tools.md)
- [AI 辅助文献检索与论文阅读](docs/ai-literature-workflow.md)
- [AI 批判 Idea 与实验设计](docs/ai-idea-experiment-review.md)
- [AI 辅助代码、实验与数据分析](docs/ai-coding-data-analysis.md)
- [AI 辅助论文写作与引用核验](docs/ai-writing-citation.md)
- [隐私、保密与学术规范](docs/ai-privacy-ethics.md)
- [可复用提示词与核验模板](docs/ai-prompt-templates.md)

本专题不推荐把模型当成答案生成器，而是把它放进“材料约束—候选输出—证据核验—研究者决策”的闭环中。

### D. 研究生阶段导航

按研一入门、第一项研究、第一篇论文、投稿与 rebuttal、毕业和求职组织已有内容，避免把仓库变成互不关联的文章列表。

当前入口：

- [新人 30 天路线](docs/first-30-days.md)
- [两周建立研究方向地图](docs/direction-mapping.md)
- [第一次复现 Baseline](docs/baseline-reproduction.md)
- [第一次组会案例](docs/weekly-meeting-case.md)
- [论文写作工具选择](docs/thesis-writing.md)
- [研究生实习求职工具链](docs/internship-tools.md)

## 科研工具箱

工具按科研任务组织，而不是按软件名称堆积。

| 科研任务 | 入门工具 | 升级或替代方案 |
| --- | --- | --- |
| 文献检索与管理 | Google Scholar、Semantic Scholar、Zotero | ResearchRabbit、Connected Papers、Scite |
| 实验记录与复现 | Git、Markdown、CSV | W&B、MLflow、Hydra、DVC、Docker |
| 数据分析与科研绘图 | Python、R、Excel | Origin、GraphPad Prism、PGFPlots |
| LaTeX 写作与协作 | Overleaf | AI LaTeX 编辑器 Prism、本地 LaTeX、Typst |
| 模型结构与流程图 | PowerPoint、draw.io | Figma、Inkscape、TikZ |
| 组会与项目管理 | Markdown、PowerPoint | Notion、Marp、飞书文档 |

本项目不会默认把某个工具称为“最佳工具”。每篇工具内容都应说明：适用任务、不适用情况、最小流程、验证方法、替代方案以及迁移成本。

已有内容：

- [实验记录与版本管理](docs/experiment-management.md)
- [论文写作工具选择](docs/thesis-writing.md)
- [Zotero + Obsidian 工作流](docs/zotero-obsidian.md)

AI LaTeX 编辑器 Prism、Overleaf 协作和科研绘图将在后续工具阶段单独补充。目前不要把 GraphPad Prism 与 AI LaTeX 编辑器 Prism 混为同一个工具。

## 第一个研究项目的最小路线

```text
两周方向地图
→ closest prior work
→ 问题定义
→ 核心假设
→ 最小验证
→ baseline 复现
→ 主实验与消融
→ failure analysis
→ 组会决策
→ 写作与自审
```

这条路线不是固定流水线。任何阶段发现证据不足，都应回到问题、假设或实验设计，而不是继续堆叠方法模块。

## 项目原则

- **问题优先**：先回答研究什么、为什么值得研究，再选择方法和工具。
- **证据优先**：性能提升不自动等于假设成立。
- **可证伪**：必须说明什么结果会反对自己的判断。
- **最小闭环**：先完成一个可验证的小研究，再扩展复杂系统。
- **记录失败**：失败实验用于更新假设，而不是从记录中删除。
- **工具可替换**：给出选择边界，避免被单一软件绑定。
- **AI 不代责**：AI 输出必须核验，最终结论由研究者负责。

## 四阶段改造计划

1. **定位与核心骨架（已完成）**：重写首页，建立新人入口、科研方法和任务式导航；补充最小科研闭环、问题定义、idea 审计、实验设计和失败诊断。
2. **科研入门与案例（已完成）**：补充两周方向调研、baseline 复现和第一次组会案例，将科研原则转成可执行流程。
3. **AI 辅助科研（已完成）**：补充检索、阅读、idea 批判、实验审计、代码、写作、引用核验、提示词与隐私规范。
4. **工具与阶段导航**：补充 AI LaTeX 编辑器 Prism、Overleaf、科研绘图、实验工具，以及投稿、rebuttal、毕业和求职导航。

## 模板库

- [论文阅读模板](templates/paper-note-template.md)
- [文献综述矩阵](templates/literature-review-matrix.md)
- [组会周报模板](templates/weekly-report-template.md)
- [实验记录模板](templates/experiment-log-template.md)
- [导师沟通记录模板](templates/advisor-meeting-template.md)
- [论文大纲模板](templates/thesis-outline-template.md)

## 本地预览

零构建静态站点：

```bash
python3 -m http.server 8080 -d site
```

VitePress 文档站：

```bash
npm install
npm run docs:dev
```

## 贡献

优先贡献真实、可复用且包含判断标准的科研场景。一个合格页面不应只列工具名称，至少需要说明：目标、适用边界、最小流程、产出、验证方式、常见失败和替代方案。

提交前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。
