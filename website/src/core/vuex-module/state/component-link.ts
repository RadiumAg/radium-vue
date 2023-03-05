import { InjectionKey } from 'vue';
import { Module, Store } from 'vuex';
import { RootModules } from '..';
export const SET_EL_MUTATION = 'SET_EL_MUTATION';

export interface componentLinkState {
  sourceSlotEl: HTMLElement;
}

export const componentLinkKey: InjectionKey<Store<
  componentLinkState
>> = Symbol();

export const ComponentLinkStore: Module<componentLinkState, RootModules> = {
  state: {
    sourceSlotEl: null,
  },
  mutations: {
    [SET_EL_MUTATION](state, playload: { el: HTMLElement }) {
      state.sourceSlotEl = playload.el;
    },
  },
};
