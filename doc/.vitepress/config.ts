import { defineConfig } from 'vitepress'
import Inspect from 'vite-plugin-inspect'
import rollupPluginCodePreview from './plugins/code-preview'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "doc",
  description: "radium vue doc",
  srcDir: "src",
  vite:{
    plugins:[Inspect(),rollupPluginCodePreview()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting:true,

    nav: [
      { text: '简介', link: 'index' },
      { text: '组件', link: 'zh/button' },
    ],

    sidebar: [
      {
        text: 'Basic基础组件',
        items: [
          { text: '按钮', link: '/zh/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config:(md)=>
  }
})
