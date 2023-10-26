import TabBar from '@radium-vue/components/tabs/src/tab-bar.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

TabBar.install = (app: App): void => {
  app.component(TabBar.name, TabBar);
};
const _TabBar = TabBar as SFCWithInstall<typeof TabBar>;

export default _TabBar;
