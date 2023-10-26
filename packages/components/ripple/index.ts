import Ripple from './src/ripple';
import type { App, Directive } from 'vue';

Ripple.install = (app: App): void => {
  app.directive(Ripple.name, Ripple as Directive);
};

export default Ripple;
