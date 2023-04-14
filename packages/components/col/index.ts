import { App } from 'vue';
import { SFCWithInstall } from '@radium-vue/utils/types';
import Col from '../row/src/col.vue';

Col.install = (app: App): void => {
  app.component(Col.name, Col);
};
const _Col: SFCWithInstall<typeof Col> = Col;

export default _Col;
