# 审稿人视角训练

## 为什么学习 reviewer 思维

研究者不仅需要提出方法，还需要判断证据是否足够支持结论。

审稿训练可以提前发现论文漏洞。

## Reviewer 第一遍阅读

通常关注：

```text
Title
 ↓
Abstract
 ↓
Introduction
 ↓
Figures/Tables
 ↓
Conclusion
```

核心问题：

1. 问题重要吗？
2. 贡献清楚吗？
3. 证据足够吗？

## 常见攻击点

## 1. Novelty

Reviewer 会问：

> 为什么不是已有工作的简单组合？

检查：

- closest prior work；
- 核心差异；
- 是否必要。

## 2. Experiment

Reviewer 会问：

> 实验是否真的验证了方法？

检查：

- baseline 是否公平；
- 数据是否合理；
- 超参数是否公平；
- 是否缺少关键 ablation。

## 3. Analysis

Reviewer 会问：

> 为什么有效？

只报告性能提升通常不足。

需要：

- case study；
- error analysis；
- mechanism analysis。

## 4. Generalization

Reviewer 会问：

> 是否只在一个设置有效？

检查：

- 数据迁移；
- 模型迁移；
- 场景迁移。

## Reviewer 模板

```markdown
## Summary

论文解决什么问题？

## Strength

真正贡献是什么？

## Weakness

最大漏洞是什么？

## Missing Experiment

需要补充什么证据？

## Decision

Accept / Borderline / Reject
```

## AI 模拟审稿流程

可以让多个角色分别检查：

```text
Draft
 ↓
Reviewer 1: 理论和方法
 ↓
Reviewer 2: 实验和统计
 ↓
Reviewer 3: 应用价值
 ↓
作者修改
```

注意：

AI review 只能帮助发现问题，不能替代真实审稿。

## 最终自查

提交前问自己：

- 如果我是 reviewer，最容易拒绝这篇论文的理由是什么？
- 我的 claim 是否超过 evidence？
- 哪个实验如果失败，会推翻核心结论？
- 是否主动报告限制？
