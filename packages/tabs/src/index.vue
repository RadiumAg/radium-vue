<template>
  <div class="ra-tabs">
    <div class="ra-tabs__wrap">
      <div class="ra-tabs__scroll">
        <div class="ra-tabs__nav">
          <slot> </slot>
        </div>
      </div>
      <ra-tab-bar />
    </div>
    <div ref="contentRef" class="ra-tabs__content"></div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  provide,
  ref,
  nextTick,
  watch,
  Slots,
  createVNode,
  render,
  VNode,
} from 'vue';
import RaTabBar from './tab-bar.vue';
import {
  TTabPosition,
  TTabsType,
  TABS_PROVIDE_TOKEN,
  ITabsProvide,
  TAB_UPDATE_EVENT,
  ITabPanel,
} from '.';

export default defineComponent({
  name: 'RaTabs',
  components: { RaTabBar },
  props: {
    modelValue: {
      type: String,
      defalult: '',
    },
    raType: {
      type: String as PropType<TTabsType>,
      default: 'card',
    },
    raCloseable: {
      type: Boolean,
      default: false,
    },
    raTabPosition: {
      type: String as PropType<TTabPosition>,
      default: 'top',
    },
  },
  emits: [
    'ra-tab-click',
    'ra-tab-remove',
    'ra-tab-add',
    'ra-edit',
    TAB_UPDATE_EVENT,
  ],
  setup(props, { emit, slots }) {
    const currentTabIndex = ref<number>(0);
    const setTabPanelIndex = ref<(index: number) => void>(undefined);
    const currentWidth = ref(0);
    const currentPosition = ref(0);
    const tabPanelItems = ref<ITabPanel[]>([]);
    const contentSlot = ref<Slots>(undefined);
    const contentRef = ref<HTMLElement>(undefined);

    const provideConfig = {
      setTabPanelIndex,
      currentTabIndex,
      currentWidth,
      currentPosition,
      tabPanelItems,
      contentSlot,
    };

    //funs
    function updateTheTabBar() {
      const currentPanel = tabPanelItems.value[currentTabIndex.value];
      provideConfig.currentWidth.value = currentPanel.width;
      provideConfig.currentPosition.value = currentPanel.left;
    }

    function setTheContent() {
      const vmList: VNode[] = [];
      tabPanelItems.value.forEach((tab, index) => {
        vmList.push(
          createVNode(
            'div',
            {
              style: `display:${
                currentTabIndex.value === index ? 'unset' : 'none'
              }`,
            },
            tab.contentSlots.default ? tab.contentSlots.default() : null,
          ),
        );
      });

      render(createVNode('div', {}, vmList), contentRef.value);
    }

    //lifecycle
    onMounted(async () => {
      await nextTick();
      tabPanelItems.value.forEach((tab, index) => {
        if (tab.name === props.modelValue) {
          currentTabIndex.value = index;
        }
        tab.setTabPanelIndex(index);
      });
      updateTheTabBar();
      setTheContent();
    });

    watch(currentTabIndex, () => {
      emit(
        TAB_UPDATE_EVENT,
        tabPanelItems.value[currentTabIndex.value].name ||
          tabPanelItems.value[currentTabIndex.value].index,
      );
      updateTheTabBar();
      setTheContent();
    });

    provide<ITabsProvide>(TABS_PROVIDE_TOKEN, provideConfig);
    return {
      props,
      contentSlot,
      contentRef,
    };
  },
});
</script>
