import Button from './src/button.vue';
import type { App } from 'vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';

Button.install = (app: App) => {
  app.component(Button.name, Button);
};

const _Button = Button as SFCWithInstall<typeof Button>;

export default _Button;
