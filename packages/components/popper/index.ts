import { App } from 'vue';
import { SFCWithInstall } from '@radium-vue/utils/types';
import Popper from './src/index.vue';

Popper.install = (app: App): void => {
  app.component(Popper.name, Popper);
};
const _Popper: SFCWithInstall<typeof Popper> = Popper;

export default _Popper;
