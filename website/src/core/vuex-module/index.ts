import { componentLinkState, ComponentLinkStore } from './state/component-link';

import { componentState, ComponentStore } from './state/component';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
export interface RootModules {
  componentLink: componentLinkState;
  component: componentState;
}
export const moduleKey: InjectionKey<Store<RootModules>> = Symbol();

export const appVuexModule = createStore<RootModules>({
  modules: {
    componentLink: ComponentLinkStore,
    component: ComponentStore,
  },
});

export function useRootStore() {
  return baseUseStore<RootModules>(moduleKey);
}
