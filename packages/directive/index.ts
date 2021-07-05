import { ripple } from './ripple';
import { App } from 'vue';

const directives = [ripple];

const install = (app: App) => {
  directives.forEach(directive => {
    app.directive(ripple.name, directive);
  });
};

export default install;
