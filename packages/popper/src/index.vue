<script lang="ts">
import usePopper from './use-popper/popper';
import popperProps from './use-popper/TPropperOptions';
import renderPopper from './renders/popper';
import throwError from '@radium-vue/utils/error';
import renderArrow from './renders/arrow';
import {
  h,
  Fragment,
  nextTick,
  onMounted,
  Teleport,
  defineComponent,
} from 'vue';
import { MODEL_VALUE_UPDATE_EVENT } from './use-popper/type';
import { renderTrigger } from './renders/trigger';
const compName = 'RaPopper';

export default defineComponent({
  name: compName,
  props: popperProps,
  emits: [...MODEL_VALUE_UPDATE_EVENT],
  setup(props, { emit, slots }) {
    if (!slots.trigger) {
      throwError(compName, 'Trigger must be provided');
    }
    const popperOptions = usePopper(props, { emit });
    const arrow = renderArrow(props.showArrow, props.arrowOffset, props.effect);
    const popperInstance = renderPopper(
      { ...popperOptions, name: props.transition, effect: props.effect },
      slots,
      arrow,
    );

    // lifeclycle
    onMounted(() => {
      nextTick(() => {
        popperOptions.createPopperInstance();
      });
    });

    return () =>
      h(Fragment, {}, [
        renderTrigger(slots.trigger(), {
          onmouseenter: popperOptions.onTriggerMouseEnter,
          onmouseleave: popperOptions.onTriggerMouseLeave,
          ref: (ref: { $el: HTMLElement }) => {
            popperOptions.reference.value = ref?.$el;
          },
        }),
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
