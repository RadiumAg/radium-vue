<template>
  <div
    ref="tabPanelRef"
    class="ra-tab-panel"
    @click="tabPanelClick"
  >
    <div
      class="ra-tab-panel__wrap"
      :class="{
        'is-active': isCurrentIndex,
      }"
    >
      <span>{{ raLabel }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  onMounted,
  ref,
  computed,
  nextTick,
} from 'vue';
import { ITabsProvide, TABS_PROVIDE_TOKEN } from '.';

export default defineComponent({
  name: 'RaTabPanel',
  props: {
    raLabel: {
      type: String,
      default: '',
    },
    raDisabled: {
      type: Boolean,
      default: false,
    },
    raName: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const tabIndex = ref(0);
    const tabPanelRef = ref<HTMLElement>(undefined);
    const tabPanelProvide = inject<ITabsProvide>(TABS_PROVIDE_TOKEN);
    const isCurrentIndex = computed(() => {
      return tabIndex.value === tabPanelProvide.currentTabIndex.value;
    });

    // funcs
    function setThePanelIndex(index: number) {
      tabIndex.value = index;
    }
    
    onMounted(async () => {
      tabPanelProvide.tabPanelItems.value.push({
        width: tabPanelRef.value.offsetWidth,
        left: tabPanelRef.value.offsetLeft,
        name: props.raName,
        index: tabIndex.value,
        setTabPanelIndex: setThePanelIndex,
      });
    });

    //methods
    const tabPanelClick = () => {
      tabPanelProvide.currentTabIndex.value = tabIndex.value;
    };
    
    return {
      props,
      tabPanelClick,
      tabPanelRef,
      isCurrentIndex,
    };
  },
});
</script>
