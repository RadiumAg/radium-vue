import { App } from 'vue';
import Message from './src/index.vue';
import { SFCWithInstall } from '@radium-vue/utils/types';

Message.install = (app: App): void => {
  app.component(Message.name, Message);
};
const _Message: SFCWithInstall<typeof Message> = Message;

export default _Message;
