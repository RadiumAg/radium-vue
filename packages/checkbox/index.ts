import { App } from 'vue';
import Checkbox from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox);
}
const _Checkbox:SFCWithInstall<typeof Checkbox> = Checkbox;

export default _Checkbox;
