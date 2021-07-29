import { Ref, Slots } from 'vue';
export type TTabsType = 'card' | 'border-card';
export type TTabPosition = 'top' | 'right' | 'bottom' | 'left';

export interface ITabPanel {
  width: number;
  left: number;
  index: number;
  name?: string;
  contentSlots: Slots;
  setTabPanelIndex: (index: number) => void;
}

export interface ITabsProvide {
  tabPanelItems: Ref<ITabPanel[]>;
  currentTabIndex: Ref<number>;
  currentPosition: Ref<number>;
  currentWidth: Ref<number>;
  tabType: Ref<TTabsType>;
  isCloseable: Ref<boolean>;
}

export const TABS_PROVIDE_TOKEN = 'TABS_PROVIDE_TOKEN';

export const TAB_UPDATE_EVENT = 'update:modelValue';
