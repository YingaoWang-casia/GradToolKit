# 研究生科研阶段导航

这份导航不以“第几年必须发几篇论文”为标准，而以是否形成独立研究能力为标准。

## 阶段一：刚进组或刚换方向

目标：建立最小科研闭环。

应完成：

- 画出方向地图；
- 找到代表性论文和 closest prior work；
- 复现一个可信 baseline；
- 建立文献、代码和实验记录；
- 完成一次问题—证据—判断式组会。

不要急于：

- 同时学习大量工具；
- 在没有 baseline 时设计复杂方法；
- 把论文数量当成理解程度；
- 根据一两篇论文宣布找到 gap。

推荐阅读：

- [新人 30 天路线](first-30-days.md)
- [两周建立研究方向地图](direction-mapping.md)
- [第一次复现 Baseline](baseline-reproduction.md)

## 阶段二：第一个研究项目

目标：从执行任务转向提出和检验假设。

最低产出：

```text
明确现象
→ 研究问题
→ closest work
→ 可证伪假设
→ 最小实验
→ 强 baseline
→ 消融和失败分析
→ 更新判断
```

进入大规模实验前，应能回答：

- 什么结果会否定 idea？
- 性能变化如何与机制解释关联？
- 是否存在更简单的替代方法？
- baseline 是否公平？
- 失败后能得到什么知识？

## 阶段三：第一篇论文

目标：把研究证据组织成可审查的主张。

建议顺序：

1. 固定核心问题和贡献边界。
2. 完成主实验表格。
3. 完成消融、鲁棒性和 failure analysis。
4. 冻结指标口径和数据版本。
5. 先写 Method 和 Experiments。
6. 再写 Related Work 和 Introduction。
7. 最后写 Abstract、Conclusion 和 Limitations。
8. 做内部审稿和引用核验。
9. 根据主题匹配和证据成熟度选择投稿 venue，而不是只追最近 deadline。

论文不是实验日志。只保留支持研究问题的证据，但不能隐藏反对核心结论的结果。

选择投稿目标前，阅读：[顶会、顶刊与 CCFDDL](venues-deadlines.md)。

## 阶段四：投稿与 rebuttal

投稿前：

- 检查 venue scope 和最近两年的相关论文；
- 区分 full paper、short、findings、workshop 和 demo；
- 从官方 CFP 核验 abstract、正文和 supplementary deadline；
- 检查匿名要求；
- 验证模板和页数；
- 清理 PDF 元数据；
- 固定代码、数据和配置版本；
- 检查引用和数字；
- 准备 supplementary material；
- 让不熟悉项目的人复述论文贡献。

CCFDDL 可以用于发现和提醒 deadline，但不能替代会议官网。时区、投稿轮次和论文类型必须单独核验。

Rebuttal 的目标不是证明审稿人错了，而是减少误解并补充可验证证据。

参见：

- [顶会、顶刊与 CCFDDL](venues-deadlines.md)
- [投稿与 Rebuttal](submission-rebuttal.md)

## 阶段五：毕业与资产沉淀

毕业前不应只剩一份论文 PDF。建议整理：

```text
research-assets/
├── papers/
├── code/
├── configs/
├── experiment-reports/
├── figures/
├── datasets-or-links/
├── talks/
└── project-summary.md
```

同时完成：

- 论文与毕业论文内容映射；
- 代码和数据的权限检查；
- 关键实验复现说明；
- 合作者和署名确认；
- 未完成项目交接；
- 可公开材料与保密材料分离。

## 阶段六：求职或继续读博

不要只展示最终指标。研究能力更具体地体现在：

- 如何定义问题；
- 如何发现 baseline 或数据问题；
- 如何设计区分性实验；
- 如何分析失败；
- 如何在证据不足时止损；
- 个人贡献与团队贡献如何区分。

可将论文和项目转成证据包：README、结构图、实验报告、bad cases、指标口径和面试追问。

参见：[研究生实习求职工具链](internship-tools.md)

## 阶段自检

无论处于哪个阶段，每月检查：

- 我正在减少哪个不确定性？
- 最近新增了什么证据？
- 哪个核心假设被削弱？
- 当前最大风险是问题、数据、实现还是评价？
- 哪项工作即使完成也不会改变研究判断？
- 哪个方向应停止？