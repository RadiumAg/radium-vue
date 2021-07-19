<template>
  <div class="ra-modal" @click="raModalClick">
    <transition name="ra-modal-fade" @after-leave="$emit('raOnAfterClose')">
      <div v-show="isShow" class="ra-modal__content" :style="modalStyle">
        <slot name="title">
          <h3>{{ raTitle }}</h3>
        </slot>
        <slot>
          <div>{{ raContent }}</div>
        </slot>
        <slot name="footer"></slot>
      </div>
    </transition>
  </div>
</template>
<script lang='ts'>
import { computed, defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
  name: 'RaModal',
  props: {
    raTitle: {
      type: String,
      default: '',
    },
    raContent: {
      type: [String,Object],
      default: '',
    },
    raWidth: {
      type: [String, Number],
      default: '50%',
    },
    raFullScreen: {
      type: Boolean,
      default: false,
    },
    raTop: {
      type: String,
      default: '15vh',
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
  emits: ['ra-onafterclose'],
  setup(props,{ emit }) {
    const isShow = ref(false);
    const contentRef = ref<HTMLTemplateElement>(null);
    const modalStyle = computed(() => {
      const ret = [];
      props.raTop && ret.push({ top: props.raTop });
      props.raWidth && ret.push({ width: props.raWidth });
      return ret;
    });

    onMounted(() => {
      isShow.value = true;
    });

    // funs
    function raModalClick() {
      isShow.value = false;
    }

    // methods
    function raDestroy(){
      isShow.value = false;
      emit('raOnAfterClose');
    }
    return {
      isShow,
      props,
      modalStyle,
      raModalClick,
      contentRef,
      raDestroy,
    };
  },
});
</script>
<style>
</style>
