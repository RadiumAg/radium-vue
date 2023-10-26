import Carousel from './src/carousel.vue';
import type { App } from 'vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';

Carousel.install = (app: App) => {
  app.component(Carousel.name, Carousel);
};

const _Carousel = Carousel as SFCWithInstall<typeof Carousel>;

export default _Carousel;
