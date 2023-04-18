import { App } from 'vue';
import { SFCWithInstall } from '@radium-vue/utils/types';
import { Modal } from './src/modal';

Modal.install = (app: App): void => {
  app.config.globalProperties = Modal;
};
const _Modal: SFCWithInstall<typeof Modal> = Modal;

export default _Modal;
