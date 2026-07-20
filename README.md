# GradToolKit

GradToolKit 是一个面向计算机、人工智能与数据驱动研究方向研究生的科研入门与方法工具箱。

它以严格科研方法为核心，帮助没有科研经验的人完成从“刚进组、不知道做什么”，到“能定义问题、提出假设、设计实验、分析失败并完成论文”的过渡。工具和 AI 只用于降低执行成本，不能替代研究判断、证据和学术责任。

## 我现在遇到什么问题？

- [我刚进组，不知道科研每天做什么](docs/start-here.md)
- [我想在 30 天内建立最小科研闭环](docs/first-30-days.md)
- [我读了很多论文，但仍然没有研究问题](docs/problem-formulation.md)
- [我有一个 idea，不知道是不是伪创新](docs/idea-audit.md)
- [我不知道怎样设计能说明问题的实验](docs/experiment-design.md)
- [实验一直失败，不知道该继续还是止损](docs/research-debugging.md)
- [我想合理使用 AI 辅助科研](docs/ai-research-workflow.md)
- [我想使用 Prism 或 Overleaf 辅助论文写作](docs/prism-overleaf.md)
- [我需要选择科研绘图工具](docs/research-plotting.md)

## 核心方法：科研不是跑分，而是减少不确定性

推荐先阅读：

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

## AI 辅助科研专题

AI 可以用于检索辅助、结构化阅读、代码检查、实验审计、写作润色和模拟审稿，但不能替你承担研究结论与学术责任。

- [AI 辅助科研完整工作流](docs/ai-research-workflow.md)
- [AI 辅助科研边界](docs/ai-research-tools.md)
- [论文阅读笔记工作流](docs/paper-reading.md)
- [第一次做文献综述](docs/literature-review.md)

## 科研工具箱

工具按任务组织，而不是按软件名称堆积。

| 科研任务 | 入门工具 | 升级或替代方案 |
| --- | --- | --- |
| 文献检索与管理 | Google Scholar、Semantic Scholar、Zotero | ResearchRabbit、Connected Papers、Scite |
| 实验记录与复现 | Git、Markdown、CSV | W&B、MLflow、Hydra、DVC、Docker |
| 数据分析与科研绘图 | Python、R、Excel | Origin、GraphPad Prism、PGFPlots |
| LaTeX 写作与协作 | Overleaf | Prism、本地 LaTeX、Typst |
| 模型结构与流程图 | PowerPoint、draw.io | Figma、Inkscape、TikZ |
| 组会与项目管理 | Markdown、PowerPoint | Notion、Marp、飞书文档 |

相关阅读：

- [实验记录与版本管理](docs/experiment-management.md)
- [科研绘图：从数据到可复现图表](docs/research-plotting.md)
- [Prism 与 Overleaf：AI LaTeX 写作工作流](docs/prism-overleaf.md)
- [论文写作工具选择](docs/thesis-writing.md)
- [Zotero + Obsidian 工作流](docs/zotero-obsidian.md)

## 阶段导航

### 研一或刚换方向

- 建立方向地图，而不是无限收藏论文。
- 复现一个可信 baseline。
- 能用“问题—证据—判断—下一步”完成组会。
- 建立最小实验记录和版本管理。
- 学会区分研究主题、研究问题和方法想法。

推荐：[新人 30 天路线](docs/first-30-days.md)

### 第一个研究项目

```text
方向地图
→ closest prior work
→ 问题定义
→ 核心假设
→ 最小验证
→ baseline
→ 主实验与消融
→ failure analysis
→ 写作与自审
```

### 投稿、毕业与求职

- [组会汇报准备](docs/weekly-meeting.md)
- [论文写作工具选择](docs/thesis-writing.md)
- [研究生实习求职工具链](docs/internship-tools.md)

## 项目原则

- **问题优先**：先回答研究什么、为什么值得研究，再选择方法和工具。
- **证据优先**：性能提升不自动等于假设成立。
- **可证伪**：必须说明什么结果会反对自己的判断。
- **最小闭环**：先完成一个可验证的小研究，再扩展复杂系统。
- **记录失败**：失败实验用于更新假设，而不是从记录中删除。
- **工具可替换**：给出选择边界，避免被单一软件绑定。
- **AI 不代责**：AI 输出必须核验，最终结论由研究者负责。

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