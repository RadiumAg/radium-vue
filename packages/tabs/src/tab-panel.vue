<template>
  <div
    class="ra-tab-panel"
    :class="panelClass"
    @click="tabPanelClick"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <div ref="tabWrapRef" class="ra-tab-panel__wrap">
      {{ raLabel }}
      <transition name="ra-tab-transform">
        <i
          v-show="isCollpaseShow"
          class="ra-icon-close"
          @click.stop="closeIconClick"
        ></i>
      </transition>
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
  onUnmounted,
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
  setup(props, { slots }) {
    const tabIndex = ref(0);
    const tabWrapRef = ref<HTMLElement>(undefined);
    const tabPanelProvide = inject<ITabsProvide>(TABS_PROVIDE_TOKEN);
    const isHover = ref(false);
    const isCollpaseShow = computed(() => {
      if (tabPanelProvide.isCloseable.value) {
        if (!tabPanelProvide.tabType.value) return true;
        return isHover.value || isCurrentIndex.value;
      } else {
        return tabPanelProvide.isCloseable.value;
      }
    });
    const isCurrentIndex = computed(() => {
      return tabIndex.value === tabPanelProvide.currentTabIndex.value;
    });

    const panelClass = computed(() => {
      const ret = [];
      tabPanelProvide.tabType.value &&
        ret.push(`is-${tabPanelProvide.tabType.value}`);
      isCurrentIndex.value && ret.push('is-active');
      return ret;
    });

    // funcs
    function setThePanelIndex(index: number) {
      tabIndex.value = index;
    }

    // lifecycle
    onMounted(() => {
      tabPanelProvide.tabPanelItems.push({
        tabPanelRef: tabWrapRef,
        name: props.raName,
        index: tabIndex.value,
        contentSlots: slots,
        setTabPanelIndex: setThePanelIndex,
      });
    });

    onUnmounted(() => {
      tabPanelProvide.tabPanelItems.splice(tabIndex.value, 1);
    });

    //methods
    const tabPanelClick = () => {
      tabPanelProvide.currentTabIndex.value = tabIndex.value;
    };

    const closeIconClick = () => {
      tabPanelProvide.raTabRemove(props.raName || tabIndex.value);
    };

    return {
      props,
      isHover,
      tabWrapRef,
      panelClass,
      tabPanelClick,
      closeIconClick,
      isCollpaseShow,
    };
  },
});
</script>
