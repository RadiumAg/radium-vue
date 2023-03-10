import { App } from 'vue';
import Scrollbar from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Scrollbar.install = (app: App): void => {
  app.component(Scrollbar.name, Scrollbar);
};
const _Scrollbar: SFCWithInstall<typeof Scrollbar> = Scrollbar;

export default _Scrollbar;
