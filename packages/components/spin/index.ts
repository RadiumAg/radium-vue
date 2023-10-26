import Spin from './src/directives';
import type { App, Directive } from 'vue';

Spin.install = (app: App) => {
  app.directive(Spin.name, Spin as Directive);
};

export default Spin;
