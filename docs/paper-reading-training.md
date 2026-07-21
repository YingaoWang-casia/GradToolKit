# 论文阅读能力训练

## 目标

论文阅读不是记忆论文内容，而是训练三个能力：

1. 快速判断论文是否值得深入；
2. 理解论文的问题、假设和证据链；
3. 发现论文中的不足，并形成自己的研究判断。

## 常见低效阅读方式

### 从第一页开始逐字阅读

新人常见流程：

```text
Abstract → Introduction → Method → Formula → Experiment
```

问题：阅读大量细节前，没有建立论文想回答的问题。

正确顺序应该是：

```text
Problem → Claim → Evidence → Method → Details
```

## 五分钟筛选法

阅读摘要和主要图表后回答：

### 1. 研究问题是什么？

不要记录：

> 使用 Transformer 提升性能。

应该记录：

> 在什么条件下，现有方法失败？论文试图解释或解决什么现象？

### 2. 核心 claim 是什么？

记录：

- 作者声称解决什么问题；
- 贡献是否明确；
- 是否有可验证预测。

### 3. 证据是否支持 claim？

检查：

- benchmark 是否合理；
- baseline 是否充分；
- 提升是否稳定；
- 实验是否真的验证核心假设。

## 三十分钟结构阅读

推荐顺序：

```text
Abstract
 ↓
Introduction
 ↓
Main Figure/Table
 ↓
Conclusion
 ↓
Experiment
 ↓
Method
```

重点不是理解所有公式，而是建立：

```text
问题
 ↓
已有方法限制
 ↓
作者假设
 ↓
方法机制
 ↓
实验验证
```

## 深度阅读输出模板

```markdown
# Paper Reading Note

## Research Question

论文试图回答什么问题？

## Main Claim

作者的核心声明是什么？

## Assumption

依赖哪些假设？

## Method

为什么这个方法可能有效？

## Evidence

哪些实验支持 claim？

## Weakness

哪些地方没有被证明？

## Alternative Explanation

是否存在其他解释？

## Future Direction

还能提出什么问题？
```

## 判断贡献的方法

不要只看作者贡献列表。

检查：

### 问题创新

是否提出了新的研究问题？

### 方法创新

是否产生新的机制，而不是简单组合已有模块？

### 实验创新

是否提供新的分析、评估或发现？

### 知识贡献

社区是否因为这篇论文学到了新的规律？

## 阅读完成标准

读完一篇论文后，应该可以回答：

- 它解决什么问题？
- 为什么以前方法不够？
- 它提出什么假设？
- 哪个实验最关键？
- 如果我是 reviewer，我会攻击哪里？
- 我是否相信作者的结论？
