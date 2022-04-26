import { App } from 'vue';
import ButtonGroup from '../button/src/button-group.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup);
};
const _ButtonGroup: SFCWithInstall<typeof ButtonGroup> = ButtonGroup;

export default _ButtonGroup;
