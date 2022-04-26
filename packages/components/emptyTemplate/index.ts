import { App } from 'vue';
import EmptyTemplate from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

EmptyTemplate.install = (app: App): void => {
  app.component(EmptyTemplate.name, EmptyTemplate);
};
const _EmptyTemplate: SFCWithInstall<typeof EmptyTemplate> = EmptyTemplate;

export default _EmptyTemplate;
