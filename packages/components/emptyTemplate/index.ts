import { App } from 'vue';
import { SFCWithInstall } from '@radium-vue/utils/types';
import EmptyTemplate from './src/index.vue';

EmptyTemplate.install = (app: App): void => {
  app.component(EmptyTemplate.name, EmptyTemplate);
};
const _EmptyTemplate: SFCWithInstall<typeof EmptyTemplate> = EmptyTemplate;

export default _EmptyTemplate;
