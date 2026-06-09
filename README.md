# GradToolKit

GradToolKit 是一个面向研究生的场景化科研工具箱。

它不想做又一个工具名录，而是按研究生真实任务组织工具、模板和工作流：文献阅读、文献综述、实验记录、组会汇报、论文写作、AI 辅助科研和求职准备。

## 适合谁

- 研一刚进组，还不知道科研工具链怎么搭的人
- 正在做文献综述、开题、组会或论文写作的人
- 做实验经常忘记版本、参数和结论的人
- 想合理使用 AI 工具，但不想把科研判断外包给模型的人
- 准备实习、秋招，需要整理项目和投递流程的人

## 项目原则

- 场景优先：先回答“我现在要做什么”，再推荐工具。
- 最小可用：先给能跑通的流程，不鼓励一开始搭复杂系统。
- 模板可复制：每个关键场景都尽量配可直接改的模板。
- 工具可替换：给推荐组合，也给替代方案和选择边界。
- 不神化 AI：AI 可以辅助检索、改写、总结和检查，但不能替代理解、实验和证据。

## 快速入口

- [研一刚进组工具栈](docs/start-here.md)
- [第一次做文献综述](docs/literature-review.md)
- [论文阅读笔记工作流](docs/paper-reading.md)
- [Zotero + Obsidian 工作流](docs/zotero-obsidian.md)
- [实验记录与版本管理](docs/experiment-management.md)
- [组会汇报准备](docs/weekly-meeting.md)
- [论文写作工具选择](docs/thesis-writing.md)
- [AI 辅助科研边界](docs/ai-research-tools.md)
- [研究生实习求职工具链](docs/internship-tools.md)

## 模板库

- [论文阅读模板](templates/paper-note-template.md)
- [文献综述矩阵](templates/literature-review-matrix.md)
- [组会周报模板](templates/weekly-report-template.md)
- [实验记录模板](templates/experiment-log-template.md)
- [导师沟通记录模板](templates/advisor-meeting-template.md)
- [论文大纲模板](templates/thesis-outline-template.md)

## 本地预览

第一版提供零构建静态站点，可以直接打开：

```text
site/index.html
```

也可以用任意静态服务器预览：

```bash
python3 -m http.server 8080 -d site
```

然后访问：

```text
http://localhost:8080
```

## 可选：VitePress 文档站

`docs/` 目录已经按 VitePress 结构组织，后续如果你想做更完整的文档站，可以安装依赖后运行：

```bash
npm install
npm run docs:dev
```

构建 VitePress 静态站点：

```bash
npm run docs:build
```

## 贡献

欢迎贡献真实、可复用、低门槛的研究生工具流程。请优先补充“场景工作流”和“模板”，不要只新增工具名。

提交前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。
