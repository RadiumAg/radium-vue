import Checkbox from './src/index.vue';
import type { App } from 'vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';

Checkbox.install = (app: App) => {
  app.component(Checkbox.name, Checkbox);
};
const _Checkbox = Checkbox as SFCWithInstall<typeof Checkbox>;

export default _Checkbox;
