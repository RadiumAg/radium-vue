import { SFCWithInstall } from '@radium-vue/utils/types';
import Carousel from './src/carousel.vue';
import { App } from 'vue';

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel);
};

const _Carousel: SFCWithInstall<typeof Carousel> = Carousel;

export default _Carousel;
