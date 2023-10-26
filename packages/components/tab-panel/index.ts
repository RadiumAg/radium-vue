import TabPanel from '../tabs/src/tab-panel.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

TabPanel.install = (app: App) => {
  app.component(TabPanel.name, TabPanel);
};
const _TabPanel = TabPanel as SFCWithInstall<typeof TabPanel>;

export default _TabPanel;
