import { ripple } from '@radium-vue/ripple';
import { App } from 'vue';

const directives = [ripple];

const install = (app: App) => {
  directives.forEach(directive => {
    app.directive(ripple.name, directive);
  });
};

export default install;
