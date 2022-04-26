import { App } from 'vue';
import Image from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Image.install = (app: App): void => {
  app.component(Image.name, Image);
};
const _Image: SFCWithInstall<typeof Image> = Image;

export default _Image;
