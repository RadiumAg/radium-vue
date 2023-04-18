import path from 'path';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vitepress';
import Inspect from 'vite-plugin-inspect';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import VueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import { codePreview } from './plugins/code-preview';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'doc',
  description: 'radium vue doc',
  srcDir: 'src',
  vite: {
    plugins: [
      VueJsx(),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        dts: path.resolve(__dirname, '../auto-imports.d.ts'),
      }),
      Components({ resolvers: [IconsResolver()] }),
      Icons({
        autoInstall: true,
      }),
      Inspect(),
    ],
    resolve: {
      alias: {
        '@vp-components': path.resolve(__dirname, '../components/index.ts'),
        'radium-vue': path.resolve(
          __dirname,
          '../../packages/components/radium-vue/index.ts',
        ),
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,
    nav: [
      { text: '简介', link: 'index' },
      { text: '组件', link: 'zh/button' },
    ],

    sidebar: [
      {
        text: 'Basic基础组件',
        items: [
          { text: '按钮', link: '/zh/button' },
          { text: 'grid', link: '/zh/grid' },
          { text: 'calendar', link: '/zh/calendar' },
          { text: 'carousel', link: '/zh/carousel' },
          { text: 'message', link: '/zh/message' },
          { text: 'modal', link: '/zh/modal' },
          { text: 'scrollbar', link: '/zh/scrollbar' },
          { text: 'slider', link: '/zh/slider' },
          { text: 'spin', link: '/zh/spin' },
          { text: 'tab', link: '/zh/tabs' },
          { text: 'tooltip', link: '/zh/tooltip' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  markdown: {
    config: md => codePreview(md),
  },
});
