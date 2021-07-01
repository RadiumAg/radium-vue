import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
export const SET_EL_MUTATION = 'SET_EL_MUTATION';

export interface componentLinkState {
  sourceSlotEl: HTMLElement;
}
export const key: InjectionKey<Store<componentLinkState>> = Symbol();

export const ComponentLinkModule = createStore<componentLinkState>({
  state: {
    sourceSlotEl: null,
  },
  mutations: {
    [SET_EL_MUTATION](state, playload: { el: HTMLElement }) {
      state.sourceSlotEl = playload.el;
    },
  },
});
