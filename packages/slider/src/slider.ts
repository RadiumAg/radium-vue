import { Ref } from 'vue';
export const SLIDER_PROVIDE_TOKEN = 'SLIDER_PROVIDE_TOKEN';

export type TSliderProvide = {
  trackWidth: Ref<number>;
  sliderDistance: Ref<number>;
  maxValue: Ref<number>;
  step: Ref<number>;
  currentValue: Ref<number>;
};

export const ButtonBarConfig = {
  x: {
    client: 'clientX',
  },
  y: {
    client: 'clientY',
  },
};
