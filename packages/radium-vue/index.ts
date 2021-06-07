import type { App } from 'vue';

import Carousel from '@radium-vue/carousel';
import CarouselItem from '@radium-vue/carousel-item';


const components = [Carousel,CarouselItem];

const  install = (app:App)=>{
  components.forEach(compoennt=>{
    app.component(compoennt.name,compoennt);
  });
};
export  default {
  install,
};
