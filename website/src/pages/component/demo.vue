<template>
  <div class="demo">
    <div>
      <slot name="doc"></slot>
    </div>
    <div class="demo_source">
      <div
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
import { computed, defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'Demo',
  setup(props, { slots }) {
    const demoSourceHeight = ref(0);
    const sourceSlotHeight = ref(0);
    const demoSourceState = ref(false);
    const demoDrawerTitle = computed(() => {
      return demoSourceState.value ? '关闭代码' : '查看代码';
    });

    onMounted(() => {
      hljs.highlightAll();
    });

    function demoDrawerClick() {
      this.demoSourceHeight = this.demoSourceHeight ? 0 : this.sourceSlotHeight;
      this.demoSourceState = !this.demoSourceState;
    }

    return {
      demoDrawerClick,
      demoSourceHeight,
      demoDrawerTitle,
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
  width: 100%;
  height: max-content;
  min-width: 500px;
  border: 1px solid #ebebeb;
  background: #fff;
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
