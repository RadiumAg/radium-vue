<template>
  <transition name="ra-modal-fade" @after-leave="$emit('raOnAfterClose')">
    <div v-show="isShow" class="ra-modal">
      <div class="ra-modal__content">
        <slot><h3>{{ raTitle }}</h3></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'RaModal',
  props: {
    raTitle:{
      type:String,
      default: '',
    },
    raWidth:{
      type: [String,Number],
      default:'50%',
    },
    raFullScreen: {
      type: Boolean,
      default: false,
    },
    raTop: {
      type: Boolean,
      default: false,
    },
    raModal: {
      type: Boolean,
      default: false,
    },
    raLockScroll: {
      type: Boolean,
      default: true,
    },
    raOpenDelay: {
      type: Number,
      default: 0,
    },
    raCloseDelay: {
      type: Number,
      default: 0,
    },
    raDropClose: {
      type: Boolean,
      default: false,
    },
    raShowClose: {
      type: Boolean,
      default: false,
    },
  },
  emits:['raOnAfterClose'],
  setup(props) {
    const isShow = ref(true);

    return {
      isShow,
      props,
    };
  },
});
</script>
<style>
</style>
