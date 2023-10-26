import { ETheme, Trigger } from './type';
import type { PropType } from 'vue';
import type { Options, Placement, PositioningStrategy } from '@popperjs/core';

export default {
  arrowOffset: {
    type: Number,
    default: 5,
  },
  appendToBody: {
    type: Boolean,
    default: true,
  },
  autoClose: {
    type: Number,
    default: 0,
  },
  boundariesPadding: {
    type: Number,
    default: 0,
  },
  content: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  style: {
    type: String,
    default: '',
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
  cutoff: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  effect: {
    type: String as PropType<ETheme>,
    default: ETheme.DARK,
  },
  enterable: {
    type: Boolean,
    default: true,
  },
  manualMode: {
    type: Boolean,
    default: false,
  },
  showAfter: {
    type: Number,
    default: 0,
  },
  offset: {
    type: Number,
    default: 12,
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  popperClass: {
    type: String,
    default: '',
  },
  pure: {
    type: Boolean,
    default: false,
  },
  popperOptions: {
    type: Object as PropType<Options>,
    default: () => null,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  strategy: {
    type: String as PropType<PositioningStrategy>,
    default: 'fixed',
  },
  transition: {
    type: String,
    default: 'ra-fade-in-linear',
  },
  trigger: {
    type: [String, Array] as PropType<Trigger>,
    default: 'hover',
  },
  visible: {
    type: Boolean,
    default: undefined,
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true,
  },
  gpuAcceleration: {
    type: Boolean,
    default: true,
  },
  fallbackPlacements: {
    type: Array as PropType<Placement[]>,
    default() {
      return [];
    },
  },
};
