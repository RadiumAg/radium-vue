import { Message } from './src/message';
import type { App } from 'vue';
import type { SFCWithInstall } from '@radium-vue/utils/types';

Message.install = (app: App) => {
  app.config.globalProperties.ra_message$ = _Message;
};

const _Message = Message as SFCWithInstall<typeof Message>;

export default _Message;
