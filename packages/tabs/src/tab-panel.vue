<template>
  <div class="ra-tab-panel" @click="tabPanelClick">
    <div
      ref="tabWrapRef"
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
import { defineComponent, inject, onMounted, ref, computed } from 'vue';
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

  setup(props, { slots }) {
    const tabIndex = ref(0);
    const tabWrapRef = ref<HTMLElement>(undefined);
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
        width: tabWrapRef.value.clientWidth,
        left: tabWrapRef.value.offsetLeft,
        name: props.raName,
        index: tabIndex.value,
        contentSlots: slots,
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
      tabWrapRef,
      isCurrentIndex,
    };
  },
});
</script>
