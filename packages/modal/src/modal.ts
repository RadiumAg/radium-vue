import { App, createVNode, isVNode, render, VNode } from 'vue';
import modalConstructor from './index.vue';

type TModalOption = Partial<{
  raTitle: string;
  raWidth: string | number;
  raFullScreen: boolean;
  raTop: boolean;
  raModal: boolean;
  raLockScroll: boolean;
  raOpenDelay: number;
  raCloseDelay: number;
  raDropClose: boolean;
  raShowClose: boolean;
  defaultTemplate: VNode;
  titleTemplate: VNode;
  footerTemplate: VNode;
  onRaOnAfterClose: () => void;
}>;

export class Modal {
  static install: (app: App) => void;
  static create(options: TModalOption) {
    let afterClose: Promise<void> = undefined;
    const container = document.createElement('div');

    const vm = createVNode(modalConstructor, options, {
      default: isVNode(options.defaultTemplate)
        ? () => options.defaultTemplate
        : null,
      title: isVNode(options.titleTemplate)
        ? () => options.titleTemplate
        : null,
      footer: isVNode(options.footerTemplate)
        ? () => options.footerTemplate
        : null,
    });

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
