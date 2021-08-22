import { componentLinkState, ComponentLinkStore } from './state/component-link';

import { componentState, ComponentStore } from './state/component';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
export interface IrootModules {
  componentLink: componentLinkState;
  component: componentState;
}
export const moduleKey: InjectionKey<Store<IrootModules>> = Symbol();

export const appVuexModule = createStore<IrootModules>({
  modules: {
    componentLink: ComponentLinkStore,
    component: ComponentStore,
  },
});

export function useRootStore() {
  return baseUseStore<IrootModules>(moduleKey);
}
