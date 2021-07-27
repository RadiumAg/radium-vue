import { Ref } from 'vue';
export type TTabsType = 'card' | 'border-card';
export type TTabPosition = 'top' | 'right' | 'bottom' | 'left';

export interface ITabPanel {
  width: number;
  left: number;
}

export interface ITabsProvide {
  setTabPanelIndex: Ref<(index: number) => void>;
  tabPanelItems: Ref<ITabPanel[]>;
  currentTab: Ref<string | number>;
  currentPosition: Ref<number>;
  currentWidth: Ref<number>;
}

export const TABS_PROVIDE_TOKEN = 'TABS_PROVIDE_TOKEN';

export const TAB_UPDATE_EVENT = 'update:modelValue';
