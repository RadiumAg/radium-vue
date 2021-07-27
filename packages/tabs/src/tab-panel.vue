<template>
  <div class="ra-tab-panel" @click="tabPanelClick">
    <div class="ra-tab-panel__wrap">
      <slot>
        <span>{{ raLabel }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';
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
    const tabPanelProvide = inject<ITabsProvide>(TABS_PROVIDE_TOKEN);
    tabPanelProvide.setTabPanelIndex.value = setThePanelIndex;

    // funcs
    function setThePanelIndex(index: number) {
      tabIndex.value = index;
    }

    //methods
    const tabPanelClick = () => {
      tabPanelProvide.currentTab.value = props.raName || tabIndex.value;
    };
    return {
      props,
      tabPanelClick,
    };
  },
});
</script>
