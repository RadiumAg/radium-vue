import type { App } from 'vue';

import RaCarousel from '@radium-vue/carousel';
import RaCarouselItem from '@radium-vue/carousel-item';
import RaRow from '@radium-vue/row';
import RaCol from '@radium-vue/col';
import RaScrollBar from '@radium-vue/scrollbar';
import directiveInstall from  '@radium-vue/directive';

const components = [RaCarousel,RaCarouselItem,RaRow,RaCol,RaScrollBar];

const  install = (app:App)=>{
  components.forEach(compoennt=>{
    app.component(compoennt.name,compoennt);
  });
  directiveInstall(app);
};


export {
  RaCarousel,
  RaCarouselItem ,
  RaRow ,
  RaCol,
  RaScrollBar,
};

export default {
  install,
};

