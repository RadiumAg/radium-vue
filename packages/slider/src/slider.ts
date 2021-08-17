import { Ref } from 'vue';
export const SLIDER_PROVIDE_TOKEN = 'SLIDER_PROVIDE_TOKEN';

export type TSliderProvide = {
  step: Ref<number>;
  isDrag: Ref<boolean>;
  maxValue: Ref<number>;
  trackWidth: Ref<number>;
  currentValue: Ref<number>;
  sliderDistance: Ref<number>;
};

export const ButtonBarConfig = {
  x: {
    client: 'clientX',
  },
  y: {
    client: 'clientY',
  },
};
