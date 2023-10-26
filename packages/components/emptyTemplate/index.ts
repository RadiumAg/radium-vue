import EmptyTemplate from './src/index.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

EmptyTemplate.install = (app: App) => {
  app.component(EmptyTemplate.name, EmptyTemplate);
};
const _EmptyTemplate = EmptyTemplate as SFCWithInstall<typeof EmptyTemplate>;

export default _EmptyTemplate;
