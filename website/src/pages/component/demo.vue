<template>
  <div class="demo" :class="[className]">
    <div class="demo_component">
      <slot name="doc" />
    </div>
    <div class="demo_source">
      <div
        ref="sourceRef"
        class="demo_source_content"
        :style="{
          height: demoSourceHeight + 'px',
        }"
      >
        <slot name="source" />
      </div>
    </div>
    <div class="demo_drawer" @click="demoDrawerClick">
      {{ demoDrawerTitle }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Demo',
  setup() {
    const router = useRouter();
    const demoSourceHeight = ref(0);
    const sourceSlotHeight = ref(0);
    const demoSourceState = ref(false);
    const demoDrawerTitle = computed(() => {
      return demoSourceState.value ? '关闭代码' : '查看代码';
    });
    const sourceRef = ref<HTMLElement>();
    const className = computed(() => {
      return `demo_${router.currentRoute.value.name.toString().toLowerCase()}`;
    });
    onMounted(() => {
      sourceSlotHeight.value = sourceRef.value.getElementsByTagName(
        'code',
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
      className,
    };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  margin-top: 10px;
  height: max-content;
  border: 1px solid #ebebeb;
  background: #fff;
  margin-bottom: 50px;
  border-radius: 4px;

  .demo_component {
    padding: 20px;
  }

  &:hover {
    box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
      0 2px 4px 0 rgb(232 237 250 / 50%);
  }

  .demo_source_content {
    transition: all 0.1s ease-in-out;
  }

  .demo_source {
    overflow: hidden;
    width: 100%;
    position: relative;
  }

  .demo_drawer {
    color: #909399;
    width: 100%;
    display: flex;
    font-size: 14px;
    align-content: center;
    justify-content: center;
    overflow: hidden;
    line-height: 50px;
    user-select: none;
    cursor: pointer;
    border-top: 1px solid #ebebeb;
  }
}
</style>
