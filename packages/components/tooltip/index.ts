import { App } from 'vue';
import Tooltip from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip);
};
const _Tooltip: SFCWithInstall<typeof Tooltip> = Tooltip;

export default _Tooltip;
