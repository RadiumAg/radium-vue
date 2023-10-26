import { Modal } from './src/modal';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

Modal.install = (app: App) => {
  app.config.globalProperties = Modal;
};
const _Modal = Modal as SFCWithInstall<typeof Modal>;

export default _Modal;
