import type { App } from 'vue';

import Carousel from '@radium-vue/carousel';
import CarouselItem from '@radium-vue/carousel-item';
import Row from '@radium-vue/row';
import Col from '@radium-vue/col';
import ScrollBar from '@radium-vue/scrollbar';


const components = [Carousel,CarouselItem,Row,Col,ScrollBar];

const  install = (app:App)=>{
  components.forEach(compoennt=>{
    app.component(compoennt.name,compoennt);
  });
};
export  default {
  install,
};
