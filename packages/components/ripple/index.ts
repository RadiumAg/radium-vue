import { App } from 'vue';
import Ripple from './src/ripple';

Ripple.install = (app: App): void => {
  app.directive(Ripple.name, Ripple);
};

export default Ripple;
