import { createApp } from 'vue';
import RadiumPlus from 'radium-vue';
import ElementPlus from 'element-plus';
import App from './play/index.vue';
import '../packages/theme-brush/src/index.scss';

const app = createApp(App);
app.use(RadiumPlus);
app.use(ElementPlus);
app.mount('#app');
