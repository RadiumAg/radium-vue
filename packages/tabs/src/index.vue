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
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  provide,
  ref,
  watchEffect,
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
  setup(props, { slots, emit }) {
    const currentTab = ref<string | number>('');
    const setTabPanelIndex = ref<(index: number) => void>(undefined);
    const currentWidth = ref(0);
    const currentPosition = ref(0);
    const tabPanelItems = ref<ITabPanel[]>([]);

    provide<ITabsProvide>(TABS_PROVIDE_TOKEN, {
      setTabPanelIndex,
      currentTab,
      currentWidth,
      currentPosition,
      tabPanelItems,
    });

    //lifecycle
    onMounted(() => {
      Array.of(slots).forEach((s, index) => {
        setTabPanelIndex.value(index);
      });
    });

    watchEffect(() => {
      emit(TAB_UPDATE_EVENT, currentTab.value);
    });

    return {
      props,
    };
  },
});
</script>
