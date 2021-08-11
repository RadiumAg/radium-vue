<script lang="ts">
import { createVNode, defineComponent, PropType } from 'vue';
import { TPlacement, TToolTipProps } from '.';
import RaPopper from '@radium-vue/popper';
import {
  processInvalidProp,
  UPDATE_MODEL_EVENT,
} from '@radium-vue/utils/common';
export default defineComponent({
  name: 'RaTooltip',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    raAppendToBody: {
      type: Boolean,
      default: false,
    },
    raEffect: {
      type: String as PropType<TToolTipProps>,
      default: 'light',
    },
    raContent: {
      type: String,
      default: '',
    },
    raPlacement: {
      type: String as PropType<TPlacement>,
      default: 'bottom',
    },
    raDisabled: {
      type: Boolean,
      default: false,
    },
    raOffset: {
      type: Number,
      default: 0,
    },
    raTransition: {
      type: String,
      default: '',
    },
    raShowAfter: {
      type: Number,
      default: 0,
    },
    raHideAfter: {
      type: Number,
      default: 0,
    },
    raAutoClose: {
      type: Number,
      default: 0,
    },
    raManual: {
      type: Boolean,
      default: false,
    },
    raPopperClass: {
      type: String,
      default: '',
    },
    raPopperStype: {
      type: String,
      default: '',
    },
    raEnterable: {
      type: Boolean,
      default: true,
    },
    raVisibleArrow: {
      type: Boolean,
      default: true,
    },
    raBoundariesPadding: {
      type: Number,
      default: 0,
    },
    raCutoff: {
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
          effect: props.raEffect,
          offset: props.raOffset,
          cutoff: props.raCutoff,
          visible: props.modelValue,
          style: props.raPopperStype,
          disabled: props.raDisabled,
          manualMode: props.raManual,
          arrowOffset: props.raOffset,
          placement: props.raPlacement,
          hideAfter: props.raHideAfter,
          autoClose: props.raAutoClose,
          enterable: props.raEnterable,
          showAfter: props.raShowAfter,
          transition: props.raTransition,
          popperClass: props.raPopperClass,
          appendToBody: props.raAppendToBody,
          boundariesPadding: props.raBoundariesPadding,
        }),
        {
          trigger: () => slots.default(),
          content: () => props.raContent,
        },
      );
  },
});
</script>
<style></style>
