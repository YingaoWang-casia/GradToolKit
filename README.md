# GradToolKit

GradToolKit 是一个面向 **AI 与实证型计算机研究** 的科研入门与方法工具箱，主要帮助没有科研经验的研究生完成从“刚进组、不知道做什么”，到“能定义问题、提出假设、设计实验、分析失败并完成论文”的过渡。

本项目以问题、证据和可证伪判断为核心。工具和 AI 只用于降低执行成本，不能替代原文阅读、实验验证、研究判断和学术责任。

> 当前内容主要适用于机器学习、NLP、计算机视觉、数据挖掘及其他依赖数据、实验和评价指标的研究。理论计算机、HCI、系统和安全研究可参考通用原则，但仍需要各自领域的方法补充。

## 从哪里开始

| 你的状态 | 建议入口 | 目标 |
| --- | --- | --- |
| 完全没有科研经验 | [刚进组从哪里开始](docs/start-here.md) → [新人 30 天路线](docs/first-30-days.md) → [两周建立方向地图](docs/direction-mapping.md) | 建立方向认知、复现 baseline、完成第一次证据式组会 |
| 已经有项目，但问题不清或实验卡住 | [科研最小闭环](docs/research-loop.md) → [问题定义](docs/problem-formulation.md) → [实验设计](docs/experiment-design.md) → [失败诊断](docs/research-debugging.md) | 把“继续调参”转成可检查的研究决策 |
| 正在写论文、选择 venue 或准备投稿 | [研究生阶段导航](docs/graduate-roadmap.md) → [顶会、顶刊与 CCFDDL](docs/venues-deadlines.md) → [Prism 与 Overleaf](docs/prism-overleaf.md) → [投稿与 Rebuttal](docs/submission-rebuttal.md) | 让投稿目标、主张、证据、版本和回应保持一致 |

## 第一个研究项目的最小路线

```text
方向地图
→ closest prior work
→ 问题定义
→ 可证伪假设
→ 最小区分实验
→ baseline 复现
→ 主实验、消融与失败分析
→ 组会决策
→ 写作与内部审查
→ 投稿与 rebuttal
```

这不是固定流水线。任何阶段发现证据不足，都应回到问题、假设或实验设计，而不是继续堆叠方法模块。

## 核心方法

一项最小研究应能回答：

```text
观察到什么稳定现象？
现有工作如何解释？
你的假设是什么？
假设会产生什么可观察预测？
什么实验能区分竞争解释？
结果支持、削弱还是否定假设？
下一步应扩展、修正还是停止？
```

核心阅读顺序：

1. [科研最小闭环](docs/research-loop.md)
2. [如何定义研究问题](docs/problem-formulation.md)
3. [Idea 与 Novelty 审计](docs/idea-audit.md)
4. [实验设计：让结果能够区分不同解释](docs/experiment-design.md)
5. [实验失败后的诊断与止损](docs/research-debugging.md)

## 内容地图

| 模块 | 解决的问题 | 主要内容 |
| --- | --- | --- |
| 科研新人入口 | 不知道科研每天做什么 | [30 天路线](docs/first-30-days.md)、[方向调研](docs/direction-mapping.md)、[Baseline 复现](docs/baseline-reproduction.md)、[第一次组会](docs/weekly-meeting-case.md)、[论文阅读](docs/paper-reading.md) |
| 严格科研方法 | 有 idea 和实验，但无法形成可信结论 | [问题定义](docs/problem-formulation.md)、[Novelty 审计](docs/idea-audit.md)、[实验设计](docs/experiment-design.md)、[失败诊断](docs/research-debugging.md) |
| AI 辅助科研 | 想提高效率，但不想外包研究判断 | [总则与核验闭环](docs/ai-research-tools.md)、[文献工作流](docs/ai-literature-workflow.md)、[Idea 与实验审查](docs/ai-idea-experiment-review.md)、[AI 编程与 API](docs/ai-programming-api.md)、[代码与数据分析](docs/ai-coding-data-analysis.md)、[写作与引用核验](docs/ai-writing-citation.md)、[隐私与规范](docs/ai-privacy-ethics.md) |
| 阶段与投稿导航 | 不知道不同阶段应沉淀什么、投向哪里 | [研究生阶段导航](docs/graduate-roadmap.md)、[顶会、顶刊与 CCFDDL](docs/venues-deadlines.md)、[论文写作](docs/thesis-writing.md)、[投稿与 Rebuttal](docs/submission-rebuttal.md)、[实习求职](docs/internship-tools.md) |

## 工具指南

工具按科研任务组织，不按品牌堆积：

- [AI 辅助编程与 DeepSeek API 接入](docs/ai-programming-api.md)
- [Prism 与 Overleaf：AI LaTeX 写作工作流](docs/prism-overleaf.md)
- [科研绘图：从原始数据到可复现图表](docs/research-plotting.md)
- [实验工具选择：Git、W&B、MLflow、Hydra、DVC 与 Docker](docs/experiment-tools.md)
- [实验记录与版本管理](docs/experiment-management.md)
- [Zotero + Obsidian 工作流](docs/zotero-obsidian.md)

本文所说的 Prism 是 **OpenAI Prism AI LaTeX 编辑器**，不是 GraphPad Prism。GraphPad Prism 仅在统计分析与科研绘图语境中出现。

## AI 使用原则

AI 应放进以下闭环：

```text
可信材料
→ 明确任务与禁止事项
→ 候选输出
→ 回到论文、代码、数据和日志核验
→ 研究者作出决定
```

不要让 AI 判断“从未有人做过”、生成未核验引用、编造实验结果，或在没有运行证据时声称代码已经修复。可直接使用的工作流见 [AI 辅助科研专题](docs/ai-research-tools.md)、[AI 编程与 API](docs/ai-programming-api.md) 和 [提示词与核验模板](docs/ai-prompt-templates.md)。

## 模板库

- [论文阅读模板](templates/paper-note-template.md)
- [文献综述矩阵](templates/literature-review-matrix.md)
- [组会周报模板](templates/weekly-report-template.md)
- [实验记录模板](templates/experiment-log-template.md)
- [导师沟通记录模板](templates/advisor-meeting-template.md)
- [论文大纲模板](templates/thesis-outline-template.md)

后续内容计划见 [ROADMAP.md](ROADMAP.md)。

## 本地预览

```bash
python3 -m http.server 8080 -d site
```

VitePress：

```bash
npm install
npm run docs:dev
```

## 贡献

优先贡献真实、可复用且包含判断标准的科研场景。一个合格页面不应只列工具名称，至少需要说明：目标、适用边界、最小流程、产出、验证方式、常见失败和替代方案。

提交前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。