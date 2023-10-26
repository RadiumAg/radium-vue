import Image from './src/index.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

Image.install = (app: App) => {
  app.component(Image.name, Image);
};
const _Image = Image as SFCWithInstall<typeof Image>;

export default _Image;
