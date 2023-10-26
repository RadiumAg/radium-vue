import Tabs from './src/index.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

Tabs.install = (app: App): void => {
  app.component(Tabs.name, Tabs);
};
const _Tabs = Tabs as SFCWithInstall<typeof Tabs>;

export default _Tabs;
