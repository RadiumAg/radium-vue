import { InstallConfig, setConfig } from '@radium-vue/utils/config';
import { App } from 'vue';

// components
import RaCarousel from '../carousel';
import RaCarouselItem from '../carousel-item';
import RaRow from '../row';
import RaCol from '../col';
import RaScrollBar from '../scrollbar';
import RaButton from '../button';
import RaButtonGroup from '../button-group';
import RaSlider from '../slider';
import RaTabs from '../tabs';
import RaTabPanel from '../tab-panel';
import RaCalendar from '../calendar';
import RaToolTip from '../tooltip';

// plugins
import RaMessage from '../message';
import RaModal from '../modal';

// directives
import raRipple from '../ripple';
import raSpin from '../spin';

const components = [
  RaRow,
  RaCol,
  RaTabs,
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

const install = (app: App, config?: InstallConfig) => {
  const opt = config ? { config, ...defaultConfig } : { ...defaultConfig };
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
  RaButtonGroup,
  RaCarouselItem,
};

export default {
  install,
};
