import Calendar from './src/index.vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';
import type { App } from 'vue';

Calendar.install = (app: App) => {
  app.component(Calendar.name, Calendar);
};
const _Calendar = Calendar as SFCWithInstall<typeof Calendar>;

export default _Calendar;
