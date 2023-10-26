import Popper from './src/index.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

Popper.install = (app: App) => {
  app.component(Popper.name, Popper);
};
const _Popper = Popper as SFCWithInstall<typeof Popper>;

export default _Popper;
