import DefaultTheme from 'vitepress/theme';
import ElementPlus from '@radium-vue/components/radium-vue';
import { VpExample } from '@vp-components';

export default {
  extends: DefaultTheme,
  enhanceApp: ctx => {
    ctx.app.component('vp-example', VpExample);
    ElementPlus.install(ctx.app);
  },
};
