import { moduleKey, appVuexModule } from './src/core/vuex-module/index';
import { createApp } from 'vue';
import RadiumUI from 'radium-vue';
import '../packages/theme-chalk/src/index.scss';
import App from './src/App.vue';
import demo from 'Pages/component/demo.vue';
import 'normalize.css';
import './style.scss';
import './doc-style/index.scss';
import 'highlight.js/scss/vs.scss';
import router from './router.config';

const app = createApp(App);
app.component('Demo', demo);

app
  .use(appVuexModule, moduleKey)
  .use(RadiumUI)
  .use(router)
  .mount('#app');
