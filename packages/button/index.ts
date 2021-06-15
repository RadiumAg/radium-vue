import { App } from 'vue';
import Button from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Button.install = (app: App): void => {
  app.component(Button.name, Button);
};
const _Button: SFCWithInstall<typeof Button> = Button;

export default _Button;
