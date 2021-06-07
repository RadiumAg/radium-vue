import type { App } from 'vue';

import Carousel from '@radium-vue/carousel';


const components = [Carousel];

const  install = (app:App)=>{
  components.forEach(compoennt=>{
    app.component(compoennt.name,compoennt);
  });
};
export  default {
  install,
};
