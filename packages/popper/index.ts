import { App } from 'vue';
import Popper from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Popper.install = (app: App): void => {
  app.component(Popper.name, Popper);
};
const _Popper: SFCWithInstall<typeof Popper> = Popper;

export default _Popper;
