import { SFCWithInstall } from '@radium-vue/utils/types';
import { App } from 'vue';
import Carousel from './src/carousel.vue';

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel);
};

const _Carousel: SFCWithInstall<typeof Carousel> = Carousel;

export default _Carousel;
