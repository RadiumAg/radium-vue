import usePopper from '../use-popper/popper';

export type TRenderPopperOptions = ReturnType<typeof usePopper> & {
  name: string;
};
