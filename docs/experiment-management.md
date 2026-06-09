# 实验记录与版本管理

实验管理的目标不是让记录变复杂，而是让三个月后的你还能回答：当时跑了什么、为什么这么跑、结果能不能复现。

## 最小工具组合

| 任务 | 入门方案 | 升级方案 |
| --- | --- | --- |
| 代码版本 | Git | GitHub/GitLab PR 流程 |
| 参数记录 | Markdown/CSV | Hydra、argparse 配置 |
| 指标追踪 | CSV + 图表 | W&B、MLflow、TensorBoard |
| 数据版本 | 文件夹命名 | DVC、对象存储 |
| 环境复现 | requirements.txt | Conda env、Docker |

## 最小实验命名

```text
YYYYMMDD_task_model_dataset_change_seed
```

示例：

```text
20260609_rag_eval_bge_mteb_add_rerank_s42
```

命名里至少包含：日期、任务、模型或方法、数据集、关键变化、随机种子。

## 每次实验必须记录

复制 [实验记录模板](../templates/experiment-log-template.md)，至少填：

```text
目标：这次实验想验证什么
变化：相比上次改了什么
数据：用了哪个版本
参数：关键参数是什么
结果：主要指标和现象
结论：支持、削弱还是否定假设
下一步：继续、回滚还是换路线
```

## Git 最小规范

- 代码改动分小步提交。
- 每个实验前确保当前代码状态可追踪。
- 不提交大文件、数据集、模型权重和密钥。
- 重要实验记录 commit hash。

```bash
git rev-parse --short HEAD
```

## 结果文件结构

```text
experiments/
├── runs/
│   └── 20260609_rag_eval_bge_mteb_add_rerank_s42/
│       ├── config.yaml
│       ├── metrics.json
│       ├── notes.md
│       └── figures/
├── reports/
└── README.md
```

## 常见坑

- 只保存最终结果，不保存失败实验。
- 改了数据预处理但没有更新版本名。
- 用截图保存指标，无法后续统计。
- 随机种子、环境版本、模型 checkpoint 没记录。
- 论文里写不清实验设置。
