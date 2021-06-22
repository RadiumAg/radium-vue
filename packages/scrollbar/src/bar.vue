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
import { SCROLL_BAR_INJECT_TOKEN } from '@radium-vue/scrollbar/src';
import { off } from '@radium-vue/utils/dom';
import {
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from 'vue';
import { scrollBarInject } from '.';
import { on } from '../../utils/dom';

export default defineComponent({
  name: 'RaBar',
  props: {
    axis: {
      type: String,
      defalut: '',
    },
  },
  setup(props) {
    console.log(props);
    const barStyle = reactive<{ transform?: string; height?: string }>({});
    const barRef = ref<HTMLElement>(null);
    const scrollInject = inject<scrollBarInject>(SCROLL_BAR_INJECT_TOKEN);
    const move = ref(0);
    const mouse = {
      startY: 0,
      endY: 0,
    };

    watch(scrollInject.moveY, () => {
      barStyle.transform = `translateY(${scrollInject.moveY.value}%)`;
    });

    watch(move, () => {
      console.log(move.value);
      if (move.value) {
      }

      scrollInject.scrollBarRef.value.scrollTop = -move.value;
    });

    onMounted(() => {
      barStyle.height =
        (scrollInject.scrollBarRef.value.clientHeight /
          scrollInject.scrollBarRef.value.scrollHeight) *
          100 +
        '%';
    });

    onMounted(() => {
      on(barRef.value, 'mousedown', mouseDownHandler);
      on(barRef.value, 'mouseup', mouseUpHandler);
    });

    // func

    function mouseUpHandler() {
      off(barRef.value, 'mousemove', mouseMoveHandler);
      mouse.startY = 0;
      mouse.endY = 0;
      move.value = 0;
    }

    function mouseDownHandler(e: MouseEvent) {
      e.stopPropagation();
      window.getSelection().removeAllRanges();
      console.log('mousedown');
      if (props.axis === 'x') {
      } else if (props.axis === 'y') {
        mouse.startY = e.clientY;
      }

      on(barRef.value, 'mousemove', mouseMoveHandler);
    }

    function mouseMoveHandler(e: MouseEvent) {
      console.log('mouseMove');
      if (props.axis === 'y') {
        mouse.endY = e.clientY;
        move.value =
          ((mouse.startY - mouse.endY) /
            scrollInject.scrollBarRef.value.clientHeight) *
          scrollInject.scrollBarRef.value.scrollHeight;
      }
    }

    onUnmounted(() => {
      off(barRef.value, 'mousedown', mouseDownHandler);
      off(barRef.value, 'mouseup', mouseUpHandler);
    });

    return {
      barRef,
      props,
      barStyle,
    };
  },
});
</script>
