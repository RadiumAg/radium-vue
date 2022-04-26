import usePopper from '../use-popper/popper';
import { ETheme } from '../use-popper/type';

export type TRenderPopperOptions = ReturnType<typeof usePopper> & {
  name: string;
  effect: ETheme;
};
