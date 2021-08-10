<script lang="ts">
import { createVNode, defineComponent, h, PropType } from 'vue';
import { TPlacement, TToolTipProps } from '.';
import RaPopper from '@radium-vue/popper';
export default defineComponent({
  name: 'RaTooltip',
  props: {
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
    raEnterable: {
      type: Boolean,
      default: true,
    },
    raVisibleArrow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    // init here

    return () =>
      createVNode(
        RaPopper,
        {
          arrowOffset: props.raVisibleArrow,
          appendToBody: props.raAppendToBody,
        },
        {
          trigger: () => slots.default(),
          content: () => props.raContent,
        },
      );
  },
});
</script>
<style></style>
