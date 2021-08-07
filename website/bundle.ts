import { moduleKey, appVuexModule } from './src/core/vuex-module/index';
import { createApp } from 'vue';
import App from './src/App.vue';
import demo from 'Pages/component/demo.vue';
import RadiumUI from 'lib/index';
import 'lib/theme-chalk/index.css';
import router from './router.config';
import './doc-style/index.scss';
import './style.scss';
import 'highlight.js/scss/vs.scss';

console.log(RadiumUI);

const app = createApp(App);
app.component('Demo', demo);

app
  .use(appVuexModule, moduleKey)
  .use(RadiumUI)
  .use(router)
  .mount('#app');
