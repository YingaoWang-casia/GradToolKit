import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GradToolKit',
  description: '面向研究生的场景化科研工具箱',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    logo: '/workflow-board.svg',
    nav: [
      { text: '开始', link: '/start-here' },
      { text: '场景', link: '/literature-review' },
      { text: '模板', link: '/templates' },
      { text: '工具库', link: '/tool-database' }
    ],
    sidebar: [
      {
        text: '开始使用',
        items: [
          { text: '项目首页', link: '/' },
          { text: '研一刚进组', link: '/start-here' },
          { text: '路线图', link: '/roadmap' }
        ]
      },
      {
        text: '科研工作流',
        items: [
          { text: '第一次做文献综述', link: '/literature-review' },
          { text: '论文阅读笔记', link: '/paper-reading' },
          { text: 'Zotero + Obsidian', link: '/zotero-obsidian' },
          { text: '实验记录与版本管理', link: '/experiment-management' },
          { text: '组会汇报', link: '/weekly-meeting' },
          { text: '论文写作', link: '/thesis-writing' },
          { text: 'AI 辅助科研', link: '/ai-research-tools' },
          { text: '实习求职', link: '/internship-tools' }
        ]
      }
    ],
    search: { provider: 'local' }
  }
})
