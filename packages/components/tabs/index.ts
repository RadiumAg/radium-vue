import { App } from 'vue';
import { SFCWithInstall } from '@radium-vue/utils/types';
import Tabs from './src/index.vue';

Tabs.install = (app: App): void => {
  app.component(Tabs.name, Tabs);
};
const _Tabs: SFCWithInstall<typeof Tabs> = Tabs;

export default _Tabs;
