<script lang="ts">
import throwError from '@radium-vue/utils/error';
import {
  Fragment,
  Teleport,
  defineComponent,
  h,
  nextTick,
  onMounted,
  onUpdated,
} from 'vue';
import usePopper from './use-popper/popper';
import popperProps from './use-popper/TPropperOptions';
import renderPopper from './renders/popper';
import renderArrow from './renders/arrow';
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
      {
        ...popperOptions,
        name: props.transition,
        effect: props.effect,
      },
      slots,
      arrow,
    );
    // lifeclycle
    onMounted(() => {
      nextTick(() => {
        popperOptions.createPopperInstance();
      });
    });

    onUpdated(() => {
      popperOptions.popperInstance.value.update();
    });

    if (props.disabled) {
      return null;
    }

    return () =>
      h(Fragment, {}, [
        renderTrigger(slots.trigger(), {
          ...popperOptions.triggerActiveEvents,
          ...popperOptions.triggerLeaveEvents,
          ref: (ref: { $el: HTMLElement }) => {
            popperOptions.reference.value = ref?.$el;
          },
        }),
        h(
          Teleport as any,
          {
            to: 'body',
            disabled: !props.appendToBody,
          },
          [popperInstance],
        ),
      ]);
  },
});
</script>
