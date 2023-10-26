import Slider from './src/index.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

Slider.install = (app: App): void => {
  app.component(Slider.name, Slider);
};
const _Slider = Slider as SFCWithInstall<typeof Slider>;

export default _Slider;
