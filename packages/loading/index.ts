import { App } from 'vue';
import Loading from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Loading.install = (app: App): void => {
  app.component(Loading.name, Loading);
};
const _Loading: SFCWithInstall<typeof Loading> = Loading;

export default _Loading;
