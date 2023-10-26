import Scrollbar from './src/index.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

Scrollbar.install = (app: App) => {
  app.component(Scrollbar.name, Scrollbar);
};
const _Scrollbar = Scrollbar as SFCWithInstall<typeof Scrollbar>;

export default _Scrollbar;
