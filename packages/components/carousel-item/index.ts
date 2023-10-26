import CarouselItem from '../carousel/src/carousel-item.vue';
import type { App } from 'vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';

CarouselItem.install = (app: App) => {
  app.component(CarouselItem.name, CarouselItem);
};
const _CarouselItem = CarouselItem as SFCWithInstall<typeof CarouselItem>;

export default _CarouselItem;
