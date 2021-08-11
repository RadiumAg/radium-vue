<script lang="ts">
import usePopper from './use-popper/popper';
import popperProps from './use-popper/TPropperOptions';
import renderPopper from './renders/popper';
import throwError from '@radium-vue/utils/error';
import renderArrow from './renders/arrow';
import {
  h,
  cloneVNode,
  Fragment,
  nextTick,
  onMounted,
  Teleport,
  defineComponent,
} from 'vue';
import { MODEL_VALUE_UPDATE_EVENT } from './use-popper/type';
const compName = 'RaPopper';

export default defineComponent({
  name: compName,
  props: popperProps,
  emits: [...MODEL_VALUE_UPDATE_EVENT],
  setup(props, { emit, slots }) {
    const popperOptions = usePopper(props, { emit });
    const arrow = renderArrow(props.showArrow, props.arrowOffset);
    const popperInstance = renderPopper(
      { ...popperOptions, name: props.transition },
      slots,
      arrow,
    );

    if (!slots.trigger) {
      throwError(compName, 'Trigger must be provided');
    }

    // lifeclycle
    onMounted(() => {
      nextTick(() => {
        popperOptions.createPopperInstance();
      });
    });

    return () =>
      h(Fragment, {}, [
        cloneVNode(
          slots.trigger()[0],
          {
            onmouseenter: popperOptions.onTriggerMouseEnter,
            onmouseleave: popperOptions.onTriggerMouseLeave,
            ref: (ref: { $el: HTMLElement }) => {
              popperOptions.reference.value = ref.$el;
            },
          },
          true,
        ),
        h(
          Teleport as any,
          {
            to: 'body',
            disabled: !props.disabled,
          },
          [popperInstance],
        ),
      ]);
  },
});
</script>
<style></style>
