import { App } from 'vue';
import { SFCWithInstall } from '@radium-vue/utils/types';
import TabPanel from '../tabs/src/tab-panel.vue';

TabPanel.install = (app: App): void => {
  app.component(TabPanel.name, TabPanel);
};
const _TabPanel: SFCWithInstall<typeof TabPanel> = TabPanel;

export default _TabPanel;
