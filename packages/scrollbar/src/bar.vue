<template>
  <transition name="ra-scrollbar-fade">
    <div
      v-show="isHover"
      ref="barRef"
      class="ra-scrollbar__bar"
      :style="{
        width: axis === 'y' ? '100%' : 0,
        height: axis === 'x' ? '100%' : 0,
        ...barStyle,
      }"
    />
  </transition>
</template>

<script lang="ts">
import { PROP_MAP, SCROLL_BAR_INJECT_TOKEN } from '@radium-vue/scrollbar/src';
import { off, on } from '@radium-vue/utils/dom';
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from 'vue';
import { scrollBarInject } from '.';

export default defineComponent({
  name: 'RaBar',
  props: {
    axis: String,
  },
  setup(props: { axis: string }) {
    let currentPosition = 0;
    const barStyle = reactive<{ transform?: string; height?: string }>({});
    const barRef = ref<HTMLElement>(null);
    const scrollInject = inject<scrollBarInject>(SCROLL_BAR_INJECT_TOKEN);
    const currPro = computed(() => PROP_MAP['' + props.axis]);
    const mouse = {
      startX: 0,
      endX: 0,
      startY: 0,
      endY: 0,
    };

    const maxScrollDistance = computed(
      () =>
        scrollInject.scrollBarRef.value[currPro.value.scrollSize] -
        scrollInject.scrollBarRef.value[currPro.value.clinetSize],
    );
    const minScrollDistance = 0;
    scrollInject.updateBarSize.value = setTheBarSize;

    // func
    function mouseUpHandler(e: MouseEvent) {
      e.stopPropagation();
      off(document, 'mousemove', mouseMoveHandler);
      mouse[currPro.value.mouseStart] = 0;
      mouse[currPro.value.mouseEnd] = 0;
      document.onselectstart = null;
      scrollInject.isActive.value = false;
      scrollInject.isMouseHover.value || (scrollInject.isHover.value = false);
    }

    function mouseDownHandler(e: MouseEvent) {
      e.stopPropagation();
      scrollInject.isActive.value = true;
      window.getSelection().removeAllRanges();
      mouse[currPro.value.mouseStart] = e[currPro.value.pageCoordinate];
      currentPosition =
        (scrollInject[currPro.value.move].value / 100) *
        barRef.value[currPro.value.clinetSize];
      on(document, 'mousemove', mouseMoveHandler);
      document.onselectstart = () => false;
    }

    function IsMoreMaxOrMin() {
      let flag = false;
      if (
        scrollInject.scrollBarRef.value[currPro.value.scrollDirection] <
        minScrollDistance
      ) {
        scrollInject.scrollBarRef.value[
          currPro.value.scrollDirection
        ] = minScrollDistance;
        return (flag = true);
      }
      if (
        scrollInject.scrollBarRef.value[currPro.value.scrollDirection] >
        maxScrollDistance.value
      ) {
        scrollInject.scrollBarRef.value[currPro.value.scrollDirection] =
          maxScrollDistance.value;
        return (flag = true);
      }
      return flag;
    }

    function mouseMoveHandler(e: MouseEvent) {
      if (IsMoreMaxOrMin()) {
        return;
      }
      mouse[currPro.value.mouseEnd] = e[currPro.value.pageCoordinate];
      scrollInject.scrollBarRef.value[currPro.value.scrollDirection] =
        ((mouse[currPro.value.mouseEnd] -
          mouse[currPro.value.mouseStart] +
          currentPosition) /
          barRef.value[currPro.value.clinetSize]) *
        scrollInject.scrollBarRef.value[currPro.value.clinetSize];
    }

    function setTheBarSize() {
      scrollInject.scrollBarRef.value &&
        (barStyle[currPro.value.size] =
          (scrollInject.scrollBarRef.value[currPro.value.clinetSize] /
            scrollInject.scrollBarRef.value[currPro.value.scrollSize]) *
            100 +
          '%');
    }

    watch(scrollInject[currPro.value.move], () => {
      barStyle.transform = `${currPro.value.translate}(${
        scrollInject[currPro.value.move].value
      }%)`;
    });

    // lifeCycle
    onMounted(() => {
      setTheBarSize();
      on(barRef.value, 'mousedown', mouseDownHandler);
      on(document, 'mouseup', mouseUpHandler);
      on(document, 'mouseleave', mouseUpHandler);
    });

    onUnmounted(() => {
      off(barRef.value, 'mousedown', mouseDownHandler);
      off(window, 'mouseleave', mouseUpHandler);
      off(document, 'mouseup', mouseUpHandler);
    });

    return {
      barRef,
      props,
      barStyle,
      isHover: scrollInject.isHover,
    };
  },
});
</script>
