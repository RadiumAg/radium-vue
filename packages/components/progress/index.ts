import Progress from './src/index.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

Progress.install = (app: App) => {
  app.component(Progress.name, Progress);
};
const _Progress = Progress as SFCWithInstall<typeof Progress>;

export default _Progress;
