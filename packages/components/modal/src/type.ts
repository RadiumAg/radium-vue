import type { VNode } from 'vue';

export const modalType = [
  'confirm',
  'info',
  'success',
  'error',
  'warning',
] as const;

export type ModalTypeOption = Partial<{
  fullScreen: boolean;
  top: string;
  modal: boolean;
  lockScroll: boolean;
  dropClose: boolean;
  showClose: boolean;
  content: string | VNode;
  title: string | VNode;
  onOk: () => void;
  onCancel: () => void;
  onAfterClose: () => void;
}>;

export type ModalOption = Partial<{
  type: string;
  width: string;
  top: string;
  modal: boolean;
  lockScroll: boolean;
  dropClose: boolean;
  showClose: boolean;
  okLabel: string;
  cancelLabel: string;
  content: string | VNode;
  title: string | VNode;
  footer: string | VNode;
  onOk: () => void;
  onCancel: () => void;
}>;
