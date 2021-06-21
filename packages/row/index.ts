import { App } from 'vue';
import Row from './src/row.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Row.install = (app: App): void => {
  app.component(Row.name, Row);
};

const _Row: SFCWithInstall<typeof Row> = Row;

export default _Row;
