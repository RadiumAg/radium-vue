import { App } from 'vue';

import directiveInstall from '@radium-vue/directive';
import RaCarousel from '@radium-vue/carousel';
import RaCarouselItem from '@radium-vue/carousel-item';
import RaRow from '@radium-vue/row';
import RaCol from '@radium-vue/col';
import RaScrollBar from '@radium-vue/scrollbar';
import RaButton from '@radium-vue/button';
import RaButtonGroup from '@radium-vue/button-group';

const components = [
  RaCarousel,
  RaCarouselItem,
  RaRow,
  RaCol,
  RaScrollBar,
  RaButton,
  RaButtonGroup,
];

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component);
  });
  directiveInstall(app);
};

export { RaCarousel, RaCarouselItem, RaRow, RaCol, RaScrollBar };

export default {
  install,
};
