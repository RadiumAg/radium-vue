import {
  componentLinkState,
  ComponentLinkStore,
  SET_EL_MUTATION,
} from './state/component-link';

import {
  componentState,
  ComponentStore,
  SET_EL_COMPONENT_SCROLLBAR,
  SET_EL_COMPONENT_SCROLLBAR_TOP,
} from './state/component';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey, ComponentInternalInstance } from 'vue';
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
  mutations: {
    [SET_EL_MUTATION](state, playload: { el: HTMLElement }) {
      state.componentLink.sourceSlotEl = playload.el;
    },
    [SET_EL_COMPONENT_SCROLLBAR](
      state,
      playload: { el: ComponentInternalInstance },
    ) {
      state.component.scrollbarEl = playload.el;
    },
    [SET_EL_COMPONENT_SCROLLBAR_TOP](state, playload: { scrollTop: number }) {
      state.component.scrollTop = playload.scrollTop;
    },
  },
});

export function useRootStore() {
  return baseUseStore<IrootModules>(moduleKey);
}
