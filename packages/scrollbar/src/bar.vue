<template>
  <div
    ref="barRef"
    class="ra-scrollbar__bar"
    :style="{
      width: axis === 'y' ? '100%' : 0,
      height: axis === 'x' ? '100%' : 0,
      ...barStyle,
    }"
  ></div>
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
  setup(props) {
    const barStyle = reactive<{ transform?: string; height?: string }>({});
    const barRef = ref<HTMLElement>(null);
    const scrollInject = inject<scrollBarInject>(SCROLL_BAR_INJECT_TOKEN);
    const currPro = computed(() => PROP_MAP[props.axis + '']);
    let currentPosition = 0;
    const mouse = {
      startX: 0,
      endX: 0,
      startY: 0,
      endY: 0,
    };

    // func
    function mouseUpHandler() {
      off(document, 'mousemove', mouseMoveHandler);
      mouse[currPro.value.mouseStart] = 0;
      mouse[currPro.value.mouseEnd] = 0;
    }

    function mouseDownHandler(e: MouseEvent) {
      e.stopPropagation();
      window.getSelection().removeAllRanges();
      mouse[currPro.value.mouseStart] = e[currPro.value.pageCoordinate];
      currentPosition =
        (scrollInject[currPro.value.move].value / 100) *
        barRef.value[currPro.value.clinetSize];
      on(document, 'mousemove', mouseMoveHandler);
    }

    function mouseMoveHandler(e: MouseEvent) {
      mouse[currPro.value.mouseEnd] = e[currPro.value.pageCoordinate];
      if (scrollInject.scrollBarRef.value[currPro.value.scrollDirection] < 0) {
        scrollInject.scrollBarRef.value[currPro.value.scrollDirection] = 0;
        return;
      }
      if (
        scrollInject.scrollBarRef.value[currPro.value.scrollDirection] >
        scrollInject.scrollBarRef.value[currPro.value.scrollSize] -
          scrollInject.scrollBarRef.value[currPro.value.clinetSize]
      ) {
        scrollInject.scrollBarRef.value[currPro.value.scrollDirection] =
          scrollInject.scrollBarRef.value[currPro.value.scrollSize] -
          scrollInject.scrollBarRef.value[currPro.value.clinetSize];
        return;
      }

      scrollInject.scrollBarRef.value[currPro.value.scrollDirection] =
        ((mouse[currPro.value.mouseEnd] - mouse[currPro.value.mouseStart]) /
          barRef.value.clientHeight) *
        scrollInject.scrollBarRef.value[currPro.value.scrollSize];
    }

    watch(scrollInject[currPro.value.move], () => {
      barStyle.transform = `${currPro.value.translate}(${
        scrollInject[currPro.value.move].value
      }%)`;
    });

    // lifeCycle
    onMounted(() => {
      barStyle[currPro.value.size] =
        (scrollInject.scrollBarRef.value[currPro.value.clinetSize] /
          scrollInject.scrollBarRef.value[currPro.value.scrollSize]) *
          100 +
        '%';
    });

    onMounted(() => {
      on(barRef.value, 'mousedown', mouseDownHandler);
      on(document, 'mouseup', mouseUpHandler);
      on(document, 'mouseleave', mouseUpHandler);
    });

    onUnmounted(() => {
      off(barRef.value, 'mousedown', mouseDownHandler);
      off(document, 'mouseleave', mouseUpHandler);
      off(document, 'mouseup', mouseUpHandler);
    });

    return {
      barRef,
      props,
      barStyle,
    };
  },
});
</script>
