import {
  componentLinkState,
  ComponentLinkStore,
  SET_EL_MUTATION,
} from './state/component-link';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
export interface IrootModules {
  componentLink: componentLinkState;
}
export const moduleKey: InjectionKey<Store<IrootModules>> = Symbol();

export const appVuexModule = createStore<IrootModules>({
  modules: {
    componentLink: ComponentLinkStore,
  },
  mutations: {
    [SET_EL_MUTATION](state, playload: { el: HTMLElement }) {
      state.componentLink.sourceSlotEl = playload.el;
    },
  },
});

export function useRootStore() {
  return baseUseStore<IrootModules>(moduleKey);
}
