<template>
  <transition
    name="ra-message-fade"
    @after-enter="afterEnter"
    @after-leave="$emit('raDestroy')"
  >
    <div
      v-show="isShow"
      class="ra-message"
      :style="{ zIndex: raZIndex, top: props.raOffset + 'px' }"
      :class="messageClass"
      @mouseover="mouseover"
      @mouseout="mouseout"
    >
      <i :class="iconClass"></i>
      <p v-if="!raIsUseHtmlString">{{ raMessage }}</p>
      <p v-if="raIsUseHtmlString" :innerHtml="raMessage"></p>
      <i class="ra-icon-close"></i>
    </div>
  </transition>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
  name: 'RaMessage',
  props: {
    raZIndex: {
      type: Number,
      default: 2000,
    },
    raMessage: {
      type: String,
      default: '',
    },
    raType: {
      type: String,
      default: 'info',
    },
    raIconClass: {
      type: String,
      default: '',
    },
    raDuration: {
      type: Number,
      default: 3000,
    },
    raIsUseHtmlString: {
      type: Boolean,
      default: false,
    },
    raShowClose: {
      type: Boolean,
      default: false,
    },
    raOffset: {
      type: Number,
      default: 0,
    },
  },
  emits: ['raDestroy'],
  setup(props) {
    const isShow = ref(false);
    let timer: NodeJS.Timer = null;
    const messageClass = computed(() => {
      const ret = [];
      props.raType && ret.push(`ra-message--${props.raType}`);
      return ret;
    });

    const iconClass = computed(() => {
      const ret = [];
      if (props.raIconClass) {
        ret.push(props.raIconClass);
        return ret;
      }
      props.raType && ret.push(`ra-icon-${props.raType}`);
      return ret;
    });
    // methods
    function afterEnter() {
      isShow.value = true;
    }

    function mouseover() {
      clearTimeout(timer);
    }

    function mouseout() {
      startCloseTimer();
    }

    // funs
    function close() {
      isShow.value = false;
    }

    function startCloseTimer() {
      timer = setTimeout(() => {
        close();
        clearTimeout(timer);
      }, props.raDuration);
    }

    onMounted(() => {
      isShow.value = true;
      startCloseTimer();
    });

    return {
      afterEnter,
      iconClass,
      messageClass,
      close,
      isShow,
      mouseout,
      mouseover,
      props,
    };
  },
});
</script>
<style></style>
