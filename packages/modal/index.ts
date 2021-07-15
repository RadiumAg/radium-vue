import { App } from 'vue';
import Modal from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Modal.install = (app: App): void => {
  app.component(Modal.name, Modal);
};
const _Modal: SFCWithInstall<typeof Modal> = Modal;

export default _Modal;
