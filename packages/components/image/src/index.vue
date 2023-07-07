<template>
  <img :src="src" />
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';
export default defineComponent({
  name: 'RaImage',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    alt: {
      type: String,
    },
    fit: {
      type: String as PropType<'fill' | 'contain' | 'cover' | ''>,
      default: '',
    },
    hideOnClickModal: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    previewSrcList: {
      type: Array,
      default: () => [],
    },
    raReferrerPolicy: {
      type: String,
      default: '',
    },
    src: {
      type: String,
    },
    scrollCotainer: {
      type: String,
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
    infinite: {
      type: Boolean,
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'raClose', 'raSwitch'],
  setup(props, { emit }) {
    return {
      props,
    };
  },
});
</script>
<style></style>
