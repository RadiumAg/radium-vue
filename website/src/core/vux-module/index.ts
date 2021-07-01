import { ComponentLinkModule } from './state/component.link';
import { createStore } from 'vuex';

export const appVuexModule = createStore({
  modules: {
    componentLink: ComponentLinkModule,
  },
});
