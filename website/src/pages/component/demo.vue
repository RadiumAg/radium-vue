<template>
  <div class="demo">
    <div>
      <slot name="doc"></slot>
    </div>
    <div class="demo_source">
      <div
        class="demo_source_content"
        :style="{
          height: demo_source_height + 'px',
        }"
      >
        <slot name="source"></slot>
      </div>
      <div class="demo_drawer" @click="demo_drawer_click">
        {{ demo_drawer_title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue';
import { DEMO_COMPONENT_TOKEN } from '../../core/token';
import hljs from 'highlight.js';

export default defineComponent({
  name: 'Demo',
  data() {
    return {
      demo_source_height: 0,
      source_slot_height: 0,
      demo_source_state: false,
    };
  },
  computed: {
    demo_drawer_title() {
      return this.demo_source_state ? '关闭代码' : '查看代码';
    },
  },
  mounted() {
    const HtmlRef = ref();
    const sourceSolt = this.$slots['source']()[0]['el'] as HTMLElement;
    HtmlRef.value = sourceSolt;
    hljs.highlightAll();
    this.source_slot_height = sourceSolt.offsetHeight;
  },
  methods: {
    demo_drawer_click() {
      this.demo_source_height = this.demo_source_height
        ? 0
        : this.source_slot_height;
      this.demo_source_state = !this.demo_source_state;
    },
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
