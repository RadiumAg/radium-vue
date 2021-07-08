<template>
  <button
    v-ripple
    class="ra-button"
    :class="[...buttonClass]"
    style="position:relative"
  >
    <slot></slot>
    <i v-if="iconClass.length != 0" :class="iconClass"></i>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { IButtonPorps } from './button';
export default defineComponent({
  name: 'RaButton',
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
      defalut: '',
    },
    raPlain: {
      type: Boolean,
      defalut: false,
    },
  },
  setup(porps: IButtonPorps) {
    // init here
    const buttonClass = computed(() => {
      const res = [];
      res.push(`ra-button--${porps.raType}`);
      res.push(`ra-button--${porps.raSize}`);
      return res;
    });
    const iconClass = computed(() => {
      const res = [];
      res.push(porps.raIcon);
      return res;
    });

    return {
      buttonClass,
      iconClass,
    };
  },
});
</script>
