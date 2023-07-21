<template>
  <button
    v-ripple="!disabled && type !== 'text' && !loading"
    class="ra-button"
    :class="[...buttonClass]"
    style="position: relative"
  >
    <i v-if="loading" class="ra-icon-loading"></i>
    <slot v-if="$slots.default"></slot>
    <i v-if="iconClass.length > 0" :class="iconClass"></i>
  </button>
</template>

<script lang="ts">
import { Directive, computed, defineComponent } from 'vue';
import raRipple from '../../ripple';
import { buttonProps } from './button';

export default defineComponent({
  name: 'RaButton',
  directives: { ripple: raRipple as Directive },
  props: buttonProps,
  setup(props) {
    // init here
    const buttonClass = computed(() => {
      const res: string[] = [];

      props.plain && res.push('is-plain');
      props.round && res.push('is-round');
      props.circle && res.push('is-circle');
      props.disabled && res.push('is-disabled');
      props.loading && res.push('is-disabled');
      props.type && res.push(`ra-button--${props.type}`);
      // eslint-disable-next-line unicorn/explicit-length-check
      props.size && res.push(`ra-button--${props.size}`);

      return res;
    });

    const iconClass = computed(() => {
      const res: string[] = [];
      props.icon && res.push(props.icon);
      return res;
    });

    return {
      iconClass,
      buttonClass,
    };
  },
});
</script>
