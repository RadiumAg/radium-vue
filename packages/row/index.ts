import { App } from 'vue';
import Row from './src/row.vue';
import Col from './src/col.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Row.install = (app: App): void => {
  app.component(Row.name, Row);
};

Col.install = (app: App): void => {
  app.component(Col.name, Col);
};
const _Row: SFCWithInstall<typeof Row> = Row;

export default _Row;
