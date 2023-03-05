import { ComponentInternalInstance, InjectionKey } from 'vue';
import { Store, Module } from 'vuex';
import { RootModules } from '..';
export const SET_EL_COMPONENT_SCROLLBAR = 'SET_EL_COMPONENT_SCROLLBAR';
export const SET_EL_COMPONENT_SCROLLBAR_TOP = 'SET_EL_COMPONENT_SCROLLBAR_TOP';

export interface componentState {
  scrollbarEl: ComponentInternalInstance;
  scrollTop: number;
}
export const componentKey: InjectionKey<Store<componentState>> = Symbol();

export const ComponentStore: Module<componentState, RootModules> = {
  state: {
    scrollbarEl: null,
    scrollTop: 0,
  },
  mutations: {
    [SET_EL_COMPONENT_SCROLLBAR](
      state,
      playload: { el: ComponentInternalInstance },
    ) {
      state.scrollbarEl = playload.el;
    },

    [SET_EL_COMPONENT_SCROLLBAR_TOP](state, playload: { scrollTop: number }) {
      state.scrollTop = playload.scrollTop;
    },
  },
};
