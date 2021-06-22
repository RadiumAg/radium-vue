<template>
  <div
    ref="barRef"
    class="ra-scrollbar__bar"
    style="{
     'width': axis ==='y'?  0 : '100%',
     'height': axis ==='x'?  0 : '100%'
  }"
  ></div>
</template>

<script lang="ts">
import { SCROLL_BAR_INJECT_TOKEN } from '@radium-vue/scrollbar/src';
import { defineComponent, inject, onMounted, ref, watch } from 'vue';
import { scrollBarInject } from '.';

export default defineComponent({
  name: 'RaBar',
  props: {
    axis: {
      type: String,
      defalut: '',
    },
  },
  setup(props) {
    const barRef = ref<HTMLElement>(null);
    const scrollInject = inject<scrollBarInject>(SCROLL_BAR_INJECT_TOKEN);

    watch(scrollInject.moveY, () => {
      barRef.value.style.transform = `translateY(${scrollInject.moveY.value}%)`;
    });

    onMounted(() => {
      barRef.value.style.height =
        (scrollInject.scrollBarRef.value.clientHeight /
          scrollInject.scrollBarRef.value.scrollHeight) *
          100 +
        '%';
    });

    onMounted(() => {});

    return {
      barRef,
      props,
    };
  },
});
</script>
