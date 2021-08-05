import { VNode } from 'vue';
export const modalType = [
  'confirm',
  'info',
  'success',
  'error',
  'warning',
] as const;

export type TModalTypeOption = Partial<{
  raFullScreen: boolean;
  raTop: string;
  raModal: boolean;
  raLockScroll: boolean;
  raDropClose: boolean;
  raShowClose: boolean;
  raContent: string | VNode;
  raTitle: string | VNode;
  raOnOk: () => void;
  raOnCancel: () => void;
  onRaOnAfterClose: () => void;
}>;

export type TModalOption = Partial<{
  raType: string;
  raWidth: string;
  raTop: string;
  raModal: boolean;
  raLockScroll: boolean;
  raDropClose: boolean;
  raShowClose: boolean;
  raOkLabel: string;
  raCancelLabel: string;
  raContent: string | VNode;
  raTitle: string | VNode;
  raFooter: string | VNode;
  raOnOk: () => void;
  raOnCancel: () => void;
}>;
