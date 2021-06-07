import { createApp } from 'vue';
import RadiumPlus from 'radium-vue';
import App from './play/index.vue';
import '../packages/theme-chalk/src/index.scss';

const app = createApp(App);
app.use(RadiumPlus);
app.mount('#app');
