import { App } from 'vue';
import { Modal } from './src/modal';
import { SFCWithInstall } from '@radium-vue/utils/types';

Modal.install = (app: App): void => {
  app.config.globalProperties = Modal;
};
const _Modal: SFCWithInstall<typeof Modal> = Modal;

export default _Modal;
