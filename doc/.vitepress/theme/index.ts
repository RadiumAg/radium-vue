import DefaultTheme from 'vitepress/theme';
import { VpExample } from '../../components/demo';
import ElementPlus from '@radium-vue/components/radium-vue';

export default {
  extends: DefaultTheme,
  enhanceApp: (ctx) => {
    ctx.app.component('vp-example', VpExample);
    ElementPlus.install(ctx.app)
  },
};
