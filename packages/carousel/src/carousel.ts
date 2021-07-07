import { Ref } from 'vue';

export type TCarouselProps = {
  raAutoplay: boolean;
  raPauseOnHover: boolean;
  raLoop: boolean;
  raHeight: string;
  raInitialIndex: number;
  raInterval: number;
  raArrow: string;
  raType: string;
  raDirection: 'horizontal' | 'vertical';
};

export interface ICarouselItem {
  uid: number;
  transformItem: (
    index: number,
    activeIndex: number,
    isAnimate?: boolean,
  ) => void;
}

export const CarouselItemConfig = {
  horizontal: {
    translate: 'translateX',
    offset: 'offsetWidth',
  },
  vertical: {
    translate: 'translateY',
    offset: 'offsetHeight',
  },
};

export interface ICarouselItemProps {
  raName: string;
  raLabel: string;
}

export interface ICarouselProvide {
  offsetHeight: Ref<number>;
  offsetWidth: Ref<number>;
  oldActiveIndex: Ref<number>;
  itemReact: ICarouselItem[];
}

export const CAROUSEL_ITEM_PROVIDETOKEN = 'CAROUSEL_PROVIDE';

export type TClickType = 'left' | 'right';
