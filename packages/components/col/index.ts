import Col from '../row/src/col.vue';
import type { App } from 'vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';

Col.install = (app: App): void => {
  app.component(Col.name, Col);
};
const _Col: SFCWithInstall<typeof Col> = Col;

export default _Col;
