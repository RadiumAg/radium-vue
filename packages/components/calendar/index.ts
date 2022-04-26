import { App } from 'vue';
import Calendar from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Calendar.install = (app: App): void => {
  app.component(Calendar.name, Calendar);
};
const _Calendar: SFCWithInstall<typeof Calendar> = Calendar;

export default _Calendar;
