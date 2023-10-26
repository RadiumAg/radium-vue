<template>
  <transition
    name="ra-message-fade"
    @before-leave="$emit('close')"
    @after-leave="$emit('destroy')"
  >
    <div
      v-show="isShow"
      class="ra-message"
      :style="{ zIndex: zIndex, top: offset + 'px' }"
      :class="messageClass"
      @mouseover="mouseover"
      @mouseout="mouseout"
    >
      <div class="ra-message__content">
        <i :class="iconCls" class="ra-message__type-icon"></i>
        <slot>
          <p v-if="!isUseHtmlString">{{ message }}</p>
          <p v-else :innerHTML="(message as string)"></p>
        </slot>
      </div>
      <i
        v-if="showClose"
        class="ra-icon-close ra-message__icon-close"
        @click="close"
      ></i>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  PropType,
  VNode,
  computed,
  defineComponent,
  onMounted,
  ref,
} from 'vue';
export default defineComponent({
  name: 'RaMessage',
  props: {
    zIndex: {
      type: Number,
      default: 2000,
    },
    message: {
      type: [String, Object] as PropType<string | VNode>,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
    iconClass: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 3000,
    },
    isUseHtmlString: {
      type: Boolean,
      default: false,
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  emits: ['destroy', 'close'],
  setup(props) {
    const isShow = ref(false);
    let timer: NodeJS.Timer = null;

    const messageClass = computed(() => {
      const ret: string[] = [];
      props.type && ret.push(`ra-message--${props.type}`);
      return ret;
    });

    const iconCls = computed(() => {
      const ret: string[] = [];
      if (props.iconClass) {
        ret.push(props.iconClass);
        return ret;
      }
      props.type && ret.push(`ra-icon-${props.type}`);
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
      }, props.duration);
    }

    onMounted(() => {
      isShow.value = true;
      startCloseTimer();
    });

    return {
      iconCls,
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
