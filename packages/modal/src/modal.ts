import { App, createVNode, isVNode, render, VNode } from 'vue';
import modalConstructor from './index.vue';

type TModalOption = Partial<{
  raWidth: string | number;
  raFullScreen: boolean;
  raTop: boolean;
  raModal: boolean;
  raLockScroll: boolean;
  raOpenDelay: number;
  raCloseDelay: number;
  raDropClose: boolean;
  raShowClose: boolean;
  raContent: string | VNode;
  raTitle: string | VNode;
  raFooter: string | VNode;
  footerTemplate: VNode;
  onRaOnAfterClose: () => void;
}>;

export class Modal {
  static install: (app: App) => void;
  static create(options: TModalOption) {
    let afterClose: Promise<void> = undefined;
    const container = document.createElement('div');
    const slotObject: { [key: string]: unknown } = {};

    isVNode(options.raContent['__vnode']) &&
      (slotObject.default = () => options.raContent['__vnode'].children);
    isVNode(options.raTitle['__vnode']) &&
      (slotObject.title = () => options.raTitle['__vnode'].children);
    isVNode(options.raTitle['__vnode']) &&
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
}
