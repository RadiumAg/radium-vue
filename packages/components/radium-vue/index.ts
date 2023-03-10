import { InstallConfig } from '@radium-vue/utils/config';
import { setConfig } from '@radium-vue/utils/config';
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
import RaTabPanel from '@radium-vue/tab-panel';
import RaTabBar from '@radium-vue/tab-bar';
import RaCalendar from '@radium-vue/calendar';
import RaToolTip from '@radium-vue/tooltip';
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
  RaTabBar,
  RaSlider,
  RaButton,
  RaToolTip,
  RaCalendar,
  RaTabPanel,
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
  RaRow,
  RaCol,
  RaModal,
  RaButton,
  RaToolTip,
  RaSlider,
  raRipple,
  RaMessage,
  RaCarousel,
  RaCalendar,
  RaTabPanel,
  RaScrollBar,
  RaCarouselItem,
};

export default {
  install,
};
