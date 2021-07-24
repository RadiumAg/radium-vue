import { App } from 'vue';
import Tabs from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Tabs.install = (app: App): void => {
  app.component(Tabs.name, Tabs);
};
const _Tabs:SFCWithInstall<typeof Tabs> = Tabs;

export default _Tabs;
