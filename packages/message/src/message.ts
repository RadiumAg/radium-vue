import { EmptyObject } from '@radium-vue/utils/common';
import { App, render, VNode } from 'vue';
import { createVNode, isVNode } from 'vue';
import MessageConstructor from './index.vue';
import PopupManager from '@radium-vue/utils/popup-manager';

type raType = 'success' | 'warning' | 'info' | 'error';

export type TMessageOptions = Partial<{
  raMessage: string;
  raType: raType;
  raIconClass: string;
  raDuration: number;
  raShowClose: boolean;
  raOffset: number;
  raIsUseHtmlString: boolean;
  raOnClose: () => void;
}>;

type TShortcutOptions = Partial<{
  raMessage: string;
  raDuration: number;
  raShowClose: boolean;
  raOffset: number;
  raIsUseHtmlString: boolean;
  raOnClose: () => void;
}>;

export class Message {
  private static instanceArray: { vm: VNode; id: symbol }[] = [];

  static install: (app: App) => void;
  private static getOffsetVertical(raOffset: number) {
    let result = 0;
    if (this.instanceArray.length) {
      this.instanceArray.forEach((obj, index) => {
        const preInstanceOffsetHeight = (this.instanceArray[index].vm
          .el as HTMLElement).offsetHeight;
        if (this.instanceArray.length && index === 0)
          result = result + raOffset * 2 + preInstanceOffsetHeight;
        else result = result + raOffset + preInstanceOffsetHeight;
      });
    } else result = raOffset;
    return result;
  }

  private static restartTheOffset(id: symbol, offset: number) {
    const targetInstanceIndex = this.instanceArray.findIndex(_ => _.id === id);
    const targetInstance = this.instanceArray.splice(targetInstanceIndex, 1);
    for (
      let index = targetInstanceIndex;
      index < this.instanceArray.length;
      index++
    ) {
      const pos =
        (this.instanceArray[index].vm.component.props.raOffset as number) -
        targetInstance[0].vm.el.offsetHeight -
        offset;
      this.instanceArray[index].vm.component.props.raOffset = pos;
    }
  }

  static create(options: TMessageOptions) {
    const container = document.createElement('div');
    const offsetVertical = options.raOffset || 20;
    const offset = this.getOffsetVertical(offsetVertical);
    const symbol = Symbol();

    const vm = createVNode(
      MessageConstructor,
      {
        ...options,
        raOffset: offset,
        raType: options.raType,
        raZIndex: PopupManager.getZIndex(),
      },
      isVNode(options.raMessage) ? { default: () => options.raMessage } : null,
    );

    vm.props.onRaDestroy = () => {
      render(null, container);
    };

    vm.props.onRaClose = () => {
      options.raOnClose?.bind(EmptyObject);
      this.restartTheOffset(symbol, offsetVertical);
    };

    this.instanceArray.push({ vm, id: symbol });
    render(vm, container);
    document.body.appendChild(container.firstChild);
  }

  static success(options: TShortcutOptions) {
    this.create({ ...options, raType: 'success' });
  }

  static error(options: TShortcutOptions) {
    this.create({ ...options, raType: 'error' });
  }

  static info(options: TShortcutOptions) {
    this.create({ ...options, raType: 'info' });
  }

  static warning(options: TShortcutOptions) {
    this.create({ ...options, raType: 'warning' });
  }
}
