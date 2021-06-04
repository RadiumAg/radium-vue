import { App } from 'vue';
import AppA from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

AppA.install = (app: App): void => {
  app.component(AppA.name, AppA);
};
const _AppA: SFCWithInstall<typeof AppA> = AppA;

export default _AppA;
