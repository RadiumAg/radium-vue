import type { InjectionKey, Ref, Slots } from 'vue';
type TabsType = 'card' | 'border-card';
type TabPosition = 'top' | 'right' | 'bottom' | 'left';

type TabPanel = {
  index: number;
  name?: string;
  contentSlots: Slots;
  tabPanelRef: HTMLElement;
  tabWrapRef: HTMLElement;
  setTabPanelIndex: (index: number) => void;
};

interface TabsProvide {
  tabType: Ref<TabsType>;
  currentTabIndex: Ref<number>;
  currentPosition: Ref<number>;
  currentWidth: Ref<number>;
  isCloseable: Ref<boolean>;
  tabPanelItems: TabPanel[];
  tabRemove: (delValue: number | string) => void;
  tabClick: (clickValue: number | string) => void;
}

const TABS_PROVIDE_TOKEN: InjectionKey<TabsProvide> =
  Symbol('TABS_PROVIDE_TOKEN');

const TAB_UPDATE_EVENT = 'update:modelValue';

export { TAB_UPDATE_EVENT, TABS_PROVIDE_TOKEN };
export type { TabsType, TabPosition, TabPanel };
