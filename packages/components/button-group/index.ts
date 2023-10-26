import ButtonGroup from '../button/src/button-group.vue';
import type { App } from 'vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';

ButtonGroup.install = (app: App) => {
  app.component(ButtonGroup.name, ButtonGroup);
};
const _ButtonGroup = ButtonGroup as SFCWithInstall<typeof ButtonGroup>;

export default _ButtonGroup;
