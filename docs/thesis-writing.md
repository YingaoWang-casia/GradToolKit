# 论文写作工具选择

论文写作工具没有绝对最优，关键看你的投稿要求、导师习惯、协作方式和公式图表复杂度。

## 怎么选

| 场景 | 推荐 |
| --- | --- |
| 会议/期刊给 LaTeX 模板 | Overleaf 或本地 LaTeX |
| 导师习惯 Word 批注 | Word |
| 你想用现代轻量排版 | Typst |
| 你写技术报告或课程论文 | Markdown + Pandoc / Quarto |
| 多人协作且版本频繁 | Overleaf + Git 或 Word + OneDrive |

## Overleaf 工作流

适合需要 LaTeX 模板、公式、引用和多人协作的论文。

最小规范：

```text
main.tex
sections/
  intro.tex
  related_work.tex
  method.tex
  experiments.tex
  conclusion.tex
figures/
tables/
references.bib
```

注意：

- 图片和表格不要乱放根目录。
- 引用统一放 `references.bib`。
- 每个 section 单独文件，方便协作。
- 重要版本导出 PDF 留档。

## Word 工作流

适合毕业论文、导师批注、学校模板和非计算机方向协作。

最小规范：

- 使用样式，不要手工调标题字号。
- 图表编号用 Word 自动题注。
- 参考文献用 Zotero 插件或学校要求的工具。
- 文件名加日期和版本，例如 `thesis_20260609_v03.docx`。
- 每次导师反馈后单独保存一版。

## 写作顺序

不要从 Introduction 第一段开始硬写。建议顺序：

1. 写 Problem Statement。
2. 写 Method 总图和核心假设。
3. 写 Experiments 表格和主要发现。
4. 写 Related Work 分类。
5. 写 Introduction 的贡献总结。
6. 最后写 Abstract。

## AI 辅助写作边界

AI 适合改写句子清晰度、检查段落结构、生成英文表达备选和发现逻辑跳跃。

AI 不适合编造引用、替你写实验结论、替你判断 novelty 或未核验地生成 related work。
