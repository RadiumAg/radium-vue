<script lang="ts">
import { PropType, createVNode, defineComponent } from 'vue';
import RaPopper from '@radium-vue/components/popper';
import {
  UPDATE_MODEL_EVENT,
  processInvalidProp,
} from '@radium-vue/utils/common';
import type { Placement, ToolTipProps } from '.';

export default defineComponent({
  name: 'RaTooltip',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    efflect: {
      type: String as PropType<ToolTipProps>,
      default: 'dark',
    },
    content: {
      type: String,
      default: '',
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    offset: {
      type: Number,
      default: 10,
    },
    transition: {
      type: String,
      default: '',
    },
    showAfter: {
      type: Number,
      default: 0,
    },
    hideAfter: {
      type: Number,
      default: 0,
    },
    autoClose: {
      type: Number,
      default: 0,
    },
    manual: {
      type: Boolean,
      default: false,
    },
    popperClass: {
      type: String,
      default: '',
    },
    popperStype: {
      type: String,
      default: '',
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    boundariesPadding: {
      type: Number,
      default: 0,
    },
    cutoff: {
      type: Boolean,
      default: false,
    },
  },
  emits: [UPDATE_MODEL_EVENT],

  setup(props, { slots, emit }) {
    return () =>
      createVNode(
        RaPopper,
        processInvalidProp({
          'onUpdate:visible': value => {
            emit(UPDATE_MODEL_EVENT, value);
          },
          effect: props.efflect,
          offset: props.offset,
          cutoff: props.cutoff,
          visible: props.modelValue,
          style: props.popperStype,
          disabled: props.disabled,
          manualMode: props.manual,
          arrowOffset: props.offset,
          placement: props.placement,
          hideAfter: props.hideAfter,
          autoClose: props.autoClose,
          enterable: props.enterable,
          showAfter: props.showAfter,
          transition: props.transition,
          popperClass: props.popperClass,
          appendToBody: props.appendToBody,
          boundariesPadding: props.boundariesPadding,
        }),
        {
          trigger: () => slots.default?.(),
          content: () => props.content || slots.content?.(),
        },
      );
  },
});
</script>
<style></style>
