import { App } from 'vue';
import Grid from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Grid.install = (app: App): void => {
  app.component(Grid.name, Grid);
};
const _Grid: SFCWithInstall<typeof Grid> = Grid;

export default _Grid;
