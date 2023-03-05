import { InstallConfig } from '@radium-vue/utils/config';
import { setConfig } from '@radium-vue/utils/config';
import { App } from 'vue';

// components
import RaCarousel from '@radium-vue/components/carousel';
import RaCarouselItem from '@radium-vue/components/carousel-item';
import RaRow from '@radium-vue/components/row';
import RaCol from '@radium-vue/components/col';
import RaScrollBar from '@radium-vue/components/scrollbar';
import RaButton from '@radium-vue/components/button';
import RaButtonGroup from '@radium-vue/components/button-group';
import RaSlider from '@radium-vue/components/slider';
import RaTabs from '@radium-vue/components/tabs';
import RaTabPanel from '@radium-vue/components/tab-panel';
import RaTabBar from '@radium-vue/components/tab-bar';
import RaCalendar from '@radium-vue/components/calendar';
import RaToolTip from '@radium-vue/components/tooltip';
// plugins
import RaMessage from '@radium-vue/components/message';
import RaModal from '@radium-vue/components/modal';

// directives
import raRipple from '@radium-vue/components/ripple';
import raSpin from '@radium-vue/components/spin';

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
