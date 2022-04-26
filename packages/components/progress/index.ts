import { App } from 'vue';
import Progress from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Progress.install = (app: App): void => {
  app.component(Progress.name, Progress);
};
const _Progress: SFCWithInstall<typeof Progress> = Progress;

export default _Progress;
