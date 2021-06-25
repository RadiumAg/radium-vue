import { createApp } from 'vue';
import App from './src/App.vue';
import router from './router.config';
import './doc-style/index.scss';
import './style.scss';
createApp(App)
  .use(router)
  .mount('#app');
