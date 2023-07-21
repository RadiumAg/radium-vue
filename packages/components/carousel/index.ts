import Carousel from './src/carousel.vue';
import type { App } from 'vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';

Carousel.install = (app: App): void => {
  app.component(Carousel.name, Carousel);
};

const _Carousel: SFCWithInstall<typeof Carousel> = Carousel;

export default _Carousel;
