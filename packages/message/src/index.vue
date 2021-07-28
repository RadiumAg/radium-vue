<template>
  <transition
    name="ra-message-fade"
    @before-leave="$emit('ra-close')"
    @after-leave="$emit('ra-destroy')"
  >
    <div
      v-show="isShow"
      class="ra-message"
      :style="{ zIndex: raZIndex, top: raOffset + 'px' }"
      :class="messageClass"
      @mouseover="mouseover"
      @mouseout="mouseout"
    >
      <div class="ra-message__content">
        <i :class="iconClass" class="ra-message__type-icon"></i>
        <slot>
          <p v-if="!raIsUseHtmlString">{{ raMessage }}</p>
          <p v-else :innerHTML="raMessage"></p>
        </slot>
      </div>
      <i
        v-if="raShowClose"
        class="ra-icon-close ra-message__icon-close"
        @click="close"
      ></i>
    </div>
  </transition>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  VNode,
} from 'vue';
export default defineComponent({
  name: 'RaMessage',
  props: {
    raZIndex: {
      type: Number,
      default: 2000,
    },
    raMessage: {
      type: [String, Object] as PropType<string | VNode>,
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
  emits: ['ra-destroy', 'ra-close'],
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
