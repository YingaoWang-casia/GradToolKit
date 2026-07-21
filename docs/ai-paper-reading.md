# AI 辅助论文阅读

## 原则

AI 的作用是降低阅读成本，不替代研究判断。

AI 可以帮助：

- 建立论文结构；
- 解释复杂概念；
- 提取实验信息；
- 生成批判问题。

AI 不能直接决定：

- 论文是否有创新；
- 结论是否可信；
- 研究方向是否值得投入。

## AI 阅读流程

## Step 1：建立论文地图

不要直接要求：

> 总结这篇论文。

建议要求：

```text
请提取：
1. Research Question
2. Existing Limitation
3. Main Hypothesis
4. Method Mechanism
5. Experimental Evidence
6. Potential Weakness
```

目标：快速获得结构，而不是替代阅读。

## Step 2：解释关键机制

针对方法部分询问：

```text
解释这个模块为什么存在。
如果删除它，理论上会发生什么？
作者隐含了什么假设？
```

比简单要求解释公式更有价值。

## Step 3：实验审查

让 AI 检查：

```text
分析实验设计：
1. baseline 是否充分？
2. 是否存在数据泄漏？
3. 哪些实验不能证明作者的 claim？
4. 缺少哪些 ablation？
```

## Step 4：模拟 reviewer

Prompt：

```text
Act as a strict reviewer.
Evaluate:
1. Novelty
2. Technical correctness
3. Experimental sufficiency
4. Missing comparisons
5. Possible rejection reasons
```

## AI 阅读记录

建议保存：

```markdown
Paper:
Model used:
Prompt used:
AI output:
Human verification:
Final conclusion:
```

## 风险控制

不要：

- 只阅读 AI summary；
- 相信 AI 生成的引用；
- 上传未公开审稿材料；
- 让 AI 替代 novelty 判断。

最终判断必须回到原论文、实验和代码证据。