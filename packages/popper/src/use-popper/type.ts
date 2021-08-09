import { Options, Placement, PositioningStrategy } from '@popperjs/core';
export type TriggerType = 'click' | 'hover' | 'focus' | 'manual';
export enum ETheme {
  DARK = 'dark',
  LIGHT = 'light',
}

type TEventType =
  | 'update:visible'
  | 'after-enter'
  | 'after-leave'
  | 'before-enter'
  | 'before-leave';

export const MODEL_VALUE_UPDATE_EVENT: TEventType[] = [
  'update:visible',
  'after-enter',
  'after-leave',
  'before-enter',
  'before-leave',
];

export type TEmit = (event: TEventType, ...args: any[]) => void;

export type Trigger = TriggerType | TriggerType[];

export type TPropperOptions = {
  arrowOffset: number;
  autoClose: number;
  boundariesPadding: number;
  class: string;
  cutoff: boolean;
  disabled: boolean;
  enterable: boolean;
  hideAfter: number;
  manualMode: boolean;
  offset: number;
  placement: Placement;
  popperOptions: Options;
  showAfter: number;
  showArrow: boolean;
  strategy: PositioningStrategy;
  trigger: Trigger;
  visible: boolean;
  stopPopperMouseEvent: boolean;
  gpuAcceleration: boolean;
  fallbackPlacements: Array<Placement>;
};
