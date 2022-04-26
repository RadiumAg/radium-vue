import { App } from 'vue';
import TabBar from '@radium-vue/tabs/src/tab-bar.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

TabBar.install = (app: App): void => {
  app.component(TabBar.name, TabBar);
};
const _TabBar: SFCWithInstall<typeof TabBar> = TabBar;

export default _TabBar;
