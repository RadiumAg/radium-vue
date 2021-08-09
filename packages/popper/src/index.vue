<script lang="ts">
import { defineComponent, Fragment, h, Teleport } from 'vue';
import usePopper from './use-popper/popper';
import popperProps from './use-popper/TPropperOptions';
import { MODEL_VALUE_UPDATE_EVENT } from './use-popper/type';

export default defineComponent({
  name: 'RaPopper',
  props: popperProps,
  emits: [...MODEL_VALUE_UPDATE_EVENT],
  setup(props, { emit, slots }) {
    const popperOptions = usePopper(props, { emit });

    return () =>
      h(Fragment, null, [
        h(
          Teleport as any,
          {
            to: 'body',
            disabled: !props,
          },
          [],
        ),
      ]);
  },
});
</script>
<style></style>
