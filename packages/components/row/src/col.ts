import type { SizeObject } from './grid';

const colProps = {
  flex: {
    type: [Number],
  },
  offset: {
    type: Number,
  },
  order: {
    type: Number,
  },
  pull: {
    type: Number,
  },
  push: {
    type: Number,
  },
  span: {
    type: Number,
  },
  xs: {
    type: [Number, Object] as PropType<number | SizeObject>,
  },
  sm: {
    type: [Number, Object] as PropType<number | SizeObject>,
  },
  raMd: {
    type: [Number, Object] as PropType<number | SizeObject>,
  },
  lg: {
    type: [Number, Object] as PropType<number | SizeObject>,
  },
  xl: {
    type: [Number, Object] as PropType<number | SizeObject>,
  },
  xxl: {
    type: [Number, Object] as PropType<number | SizeObject>,
  },
};

export { colProps };
