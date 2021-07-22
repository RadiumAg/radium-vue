import { App, createVNode, isVNode, render, VNode } from 'vue';
import modalConstructor from './index.vue';

export const modalType = [
  'confirm',
  'info',
  'success',
  'error',
  'warning',
] as const;

type TModalTypeOption = Partial<{
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

type TModalOption = Partial<{
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

export class Modal {
  static install: (app: App) => void;
  static create(options: TModalOption) {
    let afterClose: Promise<void> = undefined;
    const container = document.createElement('div');
    const slotObject: { [key: string]: unknown } = {};

    isVNode(options.raContent?.__vnode) &&
      (slotObject.default = () => options.raContent['__vnode'].children);
    isVNode(options.raTitle?.__vnode) &&
      (slotObject.title = () => options.raTitle['__vnode'].children);
    isVNode(options.raFooter?.__vnode) &&
      (slotObject.footer = () => options.raFooter['__vnode'].children);

    const vm = createVNode(
      modalConstructor,
      options,
      Object.keys(slotObject).length ? slotObject : null,
    );

    afterClose = new Promise<void>((resolve, reject) => {
      try {
        vm.props.onRaOnAfterClose = () => {
          render(null, container);
          resolve(undefined);
        };
      } catch (error) {
        reject((error as Error).message);
      }
    });

    render(vm, container);
    document.body.appendChild(container.firstChild);
    return {
      afterClose,
    };
  }

  static warning(option: TModalTypeOption) {
    return this.create({ raType: 'warning', raWidth: '20%', ...option });
  }

  static info(option: TModalTypeOption) {
    return this.create({ raType: 'info', raWidth: '20%', ...option });
  }

  static success(option: TModalTypeOption) {
    return this.create({ raType: 'success', raWidth: '20%', ...option });
  }

  static confirm(option: TModalTypeOption) {
    return this.create({ raType: 'confirm', raWidth: '20%', ...option });
  }

  static error(option: TModalTypeOption) {
    return this.create({ raType: 'error', raWidth: '20%', ...option });
  }
}
