import { SFCWithInstall } from '@radium-vue/utils/types';
import { App } from 'vue';
import { Message } from './src/message';

Message.install = (app: App) => {
  app.config.globalProperties.ra_message$ = _Message;
};

const _Message: SFCWithInstall<typeof Message> = Message;

export default _Message;
