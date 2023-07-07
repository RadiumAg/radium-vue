import CarouselItem from '../carousel/src/carousel-item.vue';
import type { App } from 'vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';

CarouselItem.install = (app: App): void => {
  app.component(CarouselItem.name, CarouselItem);
};
const _CarouselItem: SFCWithInstall<typeof CarouselItem> = CarouselItem;

export default _CarouselItem;
