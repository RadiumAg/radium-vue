import { moduleKey, appVuexModule } from './src/core/vux-module/index';
import { createApp } from 'vue';
import RadiumUI from 'radium-vue';
import App from './src/App.vue';
import '../packages/theme-brush/src/index.scss';
import router from './router.config';
import './doc-style/index.scss';
import './style.scss';
import 'highlight.js/scss/vs.scss';

createApp(App)
  .use(appVuexModule, moduleKey)
  .use(RadiumUI)
  .use(router)
  .use()
  .mount('#app');
