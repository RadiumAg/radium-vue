import Tooltip from './src/index.vue';
import type { App } from 'vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';

Tooltip.install = (app: App) => {
  app.component(Tooltip.name, Tooltip);
};
const _Tooltip = Tooltip as SFCWithInstall<typeof Tooltip>;

export default _Tooltip;
