import { App } from 'vue';
import Slider from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Slider.install = (app: App): void => {
  app.component(Slider.name, Slider);
};
const _Slider: SFCWithInstall<typeof Slider> = Slider;

export default _Slider;
