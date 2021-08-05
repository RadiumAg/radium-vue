<template>
  <button
    v-ripple="!raDisabled && raType !== 'text' && !raLoading"
    class="ra-button"
    :class="[...buttonClass]"
    style="position:relative"
  >
    <i v-if="raLoading" class="ra-icon-loading"></i>
    <slot v-if="$slots.default"></slot>
    <i v-if="iconClass.length != 0" :class="iconClass"></i>
  </button>
</template>

<script lang="ts">
import raRipple from '@radium-vue/ripple';
import { computed, defineComponent } from 'vue';
import { IButtonProps } from './button';
export default defineComponent({
  name: 'RaButton',
  directives: { ripple: raRipple },
  props: {
    raType: {
      type: String,
      default: 'default',
    },
    raSize: {
      type: String,
      default: '',
    },
    raIcon: {
      type: String,
      default: '',
    },
    raPlain: {
      type: Boolean,
      default: false,
    },
    raRound: {
      type: Boolean,
      default: false,
    },
    raCircle: {
      type: Boolean,
      default: false,
    },
    raDisabled: {
      type: Boolean,
      default: false,
    },
    raLoading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: IButtonProps) {
    // init here
    const buttonClass = computed(() => {
      const res = [];
      props.raType && res.push(`ra-button--${props.raType}`);
      props.raSize && res.push(`ra-button--${props.raSize}`);
      props.raPlain && res.push('is-plain');
      props.raRound && res.push('is-round');
      props.raCircle && res.push('is-circle');
      props.raDisabled && res.push('is-disabled');
      props.raLoading && res.push('is-disabled');
      return res;
    });

    const iconClass = computed(() => {
      const res = [];
      res.push(props.raIcon);
      return res;
    });

    return {
      buttonClass,
      iconClass,
    };
  },
});
</script>
