<template>
  <img :src="raSrc" />
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  name: 'RaImage',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    raAlt: {
      type: String,
      default: '',
    },
    raFit: {
      type: String as PropType<'fill' | 'contain' | 'cover' | ''>,
      default: '',
    },
    raHideOnClickModal: {
      type: Boolean,
      default: false,
    },
    raLazy: {
      type: Boolean,
      default: false,
    },
    raPreviewSrcList: {
      type: Array,
      default: () => [],
    },
    raReferrerPolicy: {
      type: String,
      default: '',
    },
    raSrc: {
      type: String,
    },
    raScrollCotainer: {
      type: String,
    },
    raZIndex: {
      type: Number,
      default: 2000,
    },
    raInitialIndex: {
      type: Number,
      default: 0,
    },
    raInfinite: {
      type: Boolean,
      default: true,
    },
    raAppendToBody: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'raClose', 'raSwitch'],
  setup(props, { emit }) {

    return {
      props
    }
  },
});
</script>
<style></style>
