<template>
  <div class="demo">
    <div>
      <slot name="doc"></slot>
    </div>
    <div class="demo_source">
      <div
        ref="sourceRef"
        class="demo_source_content"
        :style="{
          height: demoSourceHeight + 'px',
        }"
      >
        <slot name="source"></slot>
      </div>
      <div class="demo_drawer" @click="demoDrawerClick">
        {{ demoDrawerTitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import hljs from 'highlight.js';
import { computed, defineComponent, nextTick, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Demo',
  setup(props) {
    const demoSourceHeight = ref(0);
    const sourceSlotHeight = ref(0);
    const demoSourceState = ref(false);
    const demoDrawerTitle = computed(() => {
      return demoSourceState.value ? '关闭代码' : '查看代码';
    });
    const sourceRef = ref<HTMLElement>();

    onMounted(() => {
      hljs.highlightAll();
      sourceSlotHeight.value = sourceRef.value.getElementsByTagName(
        'pre',
      )[0].offsetHeight;
    });

    function demoDrawerClick() {
      demoSourceHeight.value = demoSourceHeight.value
        ? 0
        : sourceSlotHeight.value;
      demoSourceState.value = !demoSourceState.value;
    }

    return {
      demoDrawerClick,
      demoSourceHeight,
      demoDrawerTitle,
      sourceRef,
      sourceSlotHeight,
      demoSourceState,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  overflow: hidden;
  margin-top: 10px;
  height: max-content;
  border: 1px solid #ebebeb;
  background: #fff;
  margin-bottom: 50px;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
      0 2px 4px 0 rgb(232 237 250 / 50%);
  }

  .demo_source_content {
    transition: all 0.3s ease-in-out;
  }

  .demo_source {
    width: 100%;
    overflow: hidden;
    padding-top: 20px;
    border-top: 1px solid #ebebeb;
    position: relative;
  }

  .demo_drawer {
    width: 100%;
    display: flex;
    font-size: 14px;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    height: 21px;
    position: absolute;
    color: aqua;
    bottom: 0;
    user-select: none;
    cursor: pointer;
    border-top: 1px solid #ebebeb;
  }
}
</style>
