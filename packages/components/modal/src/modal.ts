import { App, createVNode, isVNode, render } from 'vue';
import modalConstructor from './index.vue';
import type { ModalOption, ModalTypeOption } from './type';

export class Modal {
  static install: (app: App) => void;
  static create(options: ModalOption) {
    let afterClose: Promise<void> = undefined;
    const container = document.createElement('div');
    const slotObject: { [key: string]: unknown } = {};
    const close = () => {
      vm.component.proxy['raDestroy']();
    };

    isVNode(options.content?.['__vnode']) &&
      (slotObject.default = () => options.content['__vnode'].children);
    isVNode(options.title?.['__vnode']) &&
      (slotObject.title = () => options.title['__vnode'].children);
    isVNode(options.footer?.['__vnode']) &&
      (slotObject.footer = () => options.footer['__vnode'].children);

    const vm = createVNode(
      modalConstructor,
      options,
      Object.keys(slotObject).length > 0 ? slotObject : null,
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
    document.body.append(container.firstChild);
    return {
      afterClose,
      close,
    };
  }

  static warning(option: ModalTypeOption) {
    return this.create({ type: 'warning', width: '20%', ...option });
  }

  static info(option: ModalTypeOption) {
    return this.create({ type: 'info', width: '20%', ...option });
  }

  static success(option: ModalTypeOption) {
    return this.create({ type: 'success', width: '20%', ...option });
  }

  static confirm(option: ModalTypeOption) {
    return this.create({ type: 'confirm', width: '20%', ...option });
  }

  static error(option: ModalTypeOption) {
    return this.create({ type: 'error', width: '20%', ...option });
  }
}
