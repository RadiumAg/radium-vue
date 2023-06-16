import Slider from './src/index.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

Slider.install = (app: App): void => {
  app.component(Slider.name, Slider);
};
const _Slider: SFCWithInstall<typeof Slider> = Slider;

export default _Slider;
