<script lang="ts">
import usePopper from './use-popper/popper';
import popperProps from './use-popper/TPropperOptions';
import renderPopper from './renders/popper';
import throwError from '@radium-vue/utils/error';
import { defineComponent, Fragment, h, Teleport } from 'vue';
import { MODEL_VALUE_UPDATE_EVENT } from './use-popper/type';

const compName = 'RaPopper';

export default defineComponent({
  name: compName,
  props: popperProps,
  emits: [...MODEL_VALUE_UPDATE_EVENT],
  setup(props, { emit, slots }) {
    const popperOptions = usePopper(props, { emit });
    const popperInstance = renderPopper(
      { ...popperOptions, name: props.transition },
      slots,
    );

    if (!slots.trigger) {
      throwError(compName, 'Trigger must be provided');
    }

    return () =>
      h(Fragment, {}, [
        slots.trigger(),
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
