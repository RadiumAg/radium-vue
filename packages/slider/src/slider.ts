import { Ref } from 'vue';
export const SLIDER_PROVIDE_TOKEN = 'SLIDER_PROVIDE_TOKEN';

export type TDirection = 'x' | 'y';

export type TSliderProvide = {
  step: Ref<number>;
  isDrag: Ref<boolean>;
  maxValue: Ref<number>;
  trackWidth: Ref<number>;
  trackHeight: Ref<number>;
  currentValue: Ref<number>;
  sliderDistance: Ref<number>;
};

export const ButtonBarConfig = {
  x: {
    client: 'clientX',
    distance: 'left',
    track: 'trackWidth',
    class: [],
  },
  y: {
    client: 'clientY',
    distance: 'top',
    track: 'trackHeight',
    class: ['is-vertical'],
  },
};
