<template>
  <div ref="tabPanelRef" class="ra-tab-panel" @click="tabPanelClick">
    <div class="ra-tab-panel__wrap">
      <slot>
        <span>{{ raLabel }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from 'vue';
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
    tabPanelProvide.setTabPanelIndex.value = setThePanelIndex;

    // funcs
    function setThePanelIndex(index: number) {
      tabIndex.value = index;
    }

    onMounted(() => {
      tabPanelProvide.tabPanelItems.value.push({width:tabPanelRef.value.offsetWidth,left:tabPanelRef.value.offsetLeft });
    });

    //methods
    const tabPanelClick = () => {
      tabPanelProvide.currentTab.value = props.raName || tabIndex.value;
    };
    return {
      props,
      tabPanelClick,
      tabPanelRef,
    };
  },
});
</script>
