import { App } from 'vue';

// components
import RaCarousel from '@radium-vue/carousel';
import RaCarouselItem from '@radium-vue/carousel-item';
import RaRow from '@radium-vue/row';
import RaCol from '@radium-vue/col';
import RaScrollBar from '@radium-vue/scrollbar';
import RaButton from '@radium-vue/button';
import RaButtonGroup from '@radium-vue/button-group';

// plugins
import RaMessage from '@radium-vue/message';
import RaModal from '@radium-vue/modal';

// directives
import raRipple from '@radium-vue/ripple';

const components = [
  RaCarousel,
  RaCarouselItem,
  RaRow,
  RaCol,
  RaScrollBar,
  RaButton,
  RaButtonGroup,
];

const directives = [raRipple];

const plugins = [RaMessage, RaModal];

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component);
  });

  plugins.forEach(plugin => {
    app.use(plugin);
  });

  directives.forEach(directive => {
    app.directive(directive.name, directive);
  });
};

export {
  RaCarousel,
  RaCarouselItem,
  RaRow,
  RaCol,
  RaScrollBar,
  RaMessage,
  raRipple,
  RaModal,
};

export default {
  install,
};
