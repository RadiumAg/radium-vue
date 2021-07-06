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
  raDirection: string;
};

export interface ICarouselItem {
  uid: number;
  transformItem: (
    index: number,
    activeIndex: number,
    isAnimate?: boolean,
  ) => void;
}

export interface ICarouselItemProps {
  raName: string;
  raLabel: string;
}

export interface ICarouselProvide {
  offsetWidth: Ref<number>;
  itemReact: ICarouselItem[];
  direction: Ref<TClickType>;
}

export const CAROUSEL_ITEM_PROVIDETOKEN = 'CAROUSEL_PROVIDE';

export type TClickType = 'left' | 'right';
