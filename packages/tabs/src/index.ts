import { Ref, Slots } from 'vue';
export type TTabsType = 'card' | 'border-card';
export type TTabPosition = 'top' | 'right' | 'bottom' | 'left';

export interface ITabPanel {
  index: number;
  name?: string;
  contentSlots: Slots;
  tabPanelRef: Ref<HTMLElement>;
  setTabPanelIndex: (index: number) => void;
}

export interface ITabsProvide {
  tabType: Ref<TTabsType>;
  tabPanelItems: ITabPanel[];
  currentTabIndex: Ref<number>;
  currentPosition: Ref<number>;
  currentWidth: Ref<number>;
  isCloseable: Ref<boolean>;
  tabRemove: (delValue: number | string) => void;
  tabClick: (clickValue: number | string) => void;
}

export const TABS_PROVIDE_TOKEN = 'TABS_PROVIDE_TOKEN';

export const TAB_UPDATE_EVENT = 'update:modelValue';
