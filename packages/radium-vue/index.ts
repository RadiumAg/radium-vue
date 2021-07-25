import { InstallConfig } from './../utils/config';
import { setConfig } from './../utils/config';
import { App } from 'vue';

// components
import RaCarousel from '@radium-vue/carousel';
import RaCarouselItem from '@radium-vue/carousel-item';
import RaRow from '@radium-vue/row';
import RaCol from '@radium-vue/col';
import RaScrollBar from '@radium-vue/scrollbar';
import RaButton from '@radium-vue/button';
import RaButtonGroup from '@radium-vue/button-group';
import RaSlider from '@radium-vue/slider';
import RaTabs from '@radium-vue/tabs';
// plugins
import RaMessage from '@radium-vue/message';
import RaModal from '@radium-vue/modal';

// directives
import raRipple from '@radium-vue/ripple';
import raSpin from '@radium-vue/spin';

const components = [
  RaRow,
  RaCol,
  RaTabs,
  RaSlider,
  RaButton,
  RaCarousel,
  RaScrollBar,
  RaButtonGroup,
  RaCarouselItem,
];

const directives = [raRipple, raSpin];

const plugins = [RaMessage, RaModal];

const defaultConfig: InstallConfig = {
  zIndex: 2000,
};
const install = (app: App, config: InstallConfig) => {
  const opt = { config, ...defaultConfig };
  setConfig(opt);
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
