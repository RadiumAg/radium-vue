import { createApp } from 'Vue';
import App from './src/App.vue';
import router from './router.config';

createApp(App)
  .use(router)
  .mount('#app');
