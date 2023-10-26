import type { Trigger } from './type';

export const isManualMode = (manualMode: boolean, trigger: Trigger) =>
  manualMode || trigger === 'manual';
