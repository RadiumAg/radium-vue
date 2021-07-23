import { App } from 'vue';
import Spin from './src/directives';

Spin.install = (app: App): void => {
  app.directive(Spin.name, Spin);
};

export default Spin;
