import { App } from 'vue';
import TabPanel from '@radium-vue/tabs/src/tab-panel.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

TabPanel.install = (app: App): void => {
  app.component(TabPanel.name, TabPanel);
};
const _TabPanel: SFCWithInstall<typeof TabPanel> = TabPanel;

export default _TabPanel;
