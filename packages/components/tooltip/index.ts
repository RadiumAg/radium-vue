import { App } from 'vue';
import { SFCWithInstall } from '@radium-vue/utils/types';
import Tooltip from './src/index.vue';

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip);
};
const _Tooltip: SFCWithInstall<typeof Tooltip> = Tooltip;

export default _Tooltip;
