import { App } from 'vue';
import { SFCWithInstall } from '@radium-vue/utils/types';
import Row from './src/row.vue';

Row.install = (app: App): void => {
  app.component(Row.name, Row);
};

const _Row: SFCWithInstall<typeof Row> = Row;

export default _Row;
