import 'prismjs/themes/prism.css';
import DefaultTheme from 'vitepress/theme';
import ElementPlus from '@radium-vue/components';
import '@radium-vue/theme-chalk/src/index.scss';
import '@radium-vue/theme-chalk/src/icon.scss';

import '../../doc-style/index.scss';
import { VpExample } from '@vp-components';

export default {
  extends: DefaultTheme,
  enhanceApp: ctx => {
    ctx.app.component('vp-example', VpExample);
    ElementPlus.install(ctx.app);
  },
};
