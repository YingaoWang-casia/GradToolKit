# 贡献指南

感谢你愿意贡献 GradToolKit。这个项目更看重真实场景和可执行流程，而不是工具数量。

## 可以贡献什么

- 一个研究生场景的完整工作流
- 一个可复制的模板
- 一个工具卡片
- 一个避坑案例
- 一个页面中的错误修正
- 一个适合新手的最小流程

## 不建议贡献什么

- 只有工具名，没有使用场景
- 未实际用过的工具安利
- 夸大 AI 工具能力的描述
- 需要复杂付费环境才能复现的流程
- 无来源的排名或绝对化判断

## 工具卡片格式

新增工具时，请尽量补全 `tools.yaml` 中的字段：

```yaml
- name: Zotero
  category: literature-management
  official_url: https://www.zotero.org/
  pricing: free
  platforms: [Windows, macOS, Linux, Web]
  learning_curve: low
  best_for:
    - 文献管理
    - PDF 标注
    - 引用导出
  works_well_with:
    - Better BibTeX
    - Obsidian
    - Overleaf
  not_good_for:
    - 单独承担知识库写作
  cautions:
    - 不要只存 PDF，不维护标签、笔记和引用状态
```

## 场景页面格式

推荐每个场景页包含：适合谁、最小工具组合、30 分钟启动流程、标准工作流、可复制模板、常见坑、什么时候该升级工具链。

## 内容边界

GradToolKit 可以推荐 AI 工具，但不把 AI 输出当作科研证据。涉及论文结论、实验结果、引用和数据时，请提醒用户回到原文、代码、实验记录和可验证来源。
