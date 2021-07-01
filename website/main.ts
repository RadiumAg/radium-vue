import { createApp } from 'vue';
import RadiumUI from 'radium-vue';
import App from './src/App.vue';
import '../packages/theme-brush/src/index.scss';
import router from './router.config';
import './doc-style/index.scss';
import './style.scss';
import 'highlight.js/scss/vs.scss';

createApp(App)
  .use(RadiumUI)
  .use(router)
  .mount('#app');
