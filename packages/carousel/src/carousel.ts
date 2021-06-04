export interface CarouselProp {
  height: number;
  initialIndex: number;
  autoplay: boolean;
  interval: number;
  arrow: 'always' | 'hover' | 'never';
  type: 'card';
  loop: boolean;
  direction: 'horizontal' | 'vertical';
  pauseOnHover: boolean;
}
