<template>
  <div
    ref="tabPanelRef"
    class="ra-tab-panel"
    :class="panelClass"
    @click="tabPanelClick"
    @mouseover="!disabled && (isHover = true)"
    @mouseleave="!disabled && (isHover = false)"
  >
    <div ref="tabWrapRef" :class="wrapClass">
      {{ label }}
      <transition name="ra-tab-transform">
        <i
          v-show="isCollpaseShow"
          :class="closeIconClass"
          @click.stop="closeIconClick"
        ></i>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import { TABS_PROVIDE_TOKEN } from '.';

export default defineComponent({
  name: 'RaTabPanel',
  props: {
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    const tabIndex = ref(0);
    const tabWrapRef = ref<HTMLElement>();
    const tabPanelRef = ref<HTMLElement>();
    const tabPanelProvide = inject(TABS_PROVIDE_TOKEN);
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
    //class
    const panelClass = computed(() => {
      const ret = [];
      tabPanelProvide.tabType.value &&
        ret.push(`is-${tabPanelProvide.tabType.value}`);
      isCurrentIndex.value && ret.push('is-active');
      props.disabled && ret.push('is-disabled');
      return ret;
    });

    const wrapClass = computed(() => {
      const ret = ['ra-tab-panel__wrap'];
      props.disabled && ret.push('is-disabled');
      return ret;
    });

    const closeIconClass = computed(() => {
      const ret = ['ra-icon-close'];
      props.disabled && ret.push('is-disabled');
      return ret;
    });

    // funcs
    function setThePanelIndex(index: number) {
      tabIndex.value = index;
    }

    // lifecycle
    onMounted(() => {
      tabPanelProvide.tabPanelItems.push({
        tabPanelRef: tabPanelRef.value,
        tabWrapRef: tabWrapRef.value,
        name: props.name,
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
      if (props.disabled) return;
      tabPanelProvide.currentTabIndex.value = tabIndex.value;
      tabPanelProvide.tabClick(props.name || tabIndex.value);
    };

    const closeIconClick = () => {
      tabPanelProvide.tabRemove(props.name || tabIndex.value);
    };

    return {
      isHover,
      tabWrapRef,
      tabPanelRef,
      panelClass,
      wrapClass,
      closeIconClass,
      tabPanelClick,
      closeIconClick,
      isCollpaseShow,
    };
  },
});
</script>
