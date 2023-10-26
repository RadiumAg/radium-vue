import { EmptyObject } from '@radium-vue/utils/common';
import { App, VNode, createVNode, isVNode, render } from 'vue';
import PopupManager from '@radium-vue/utils/popup-manager';
import MessageConstructor from './index.vue';

type Type = 'success' | 'warning' | 'info' | 'error';

export type MessageOptions = Partial<{
  message: string;
  type: Type;
  iconClass: string;
  duration: number;
  showClose: boolean;
  offset: number;
  isUseHtmlString: boolean;
  onClose: () => void;
}>;

type ShortcutOptions = Partial<{
  message: string;
  duration: number;
  showClose: boolean;
  offset: number;
  isUseHtmlString: boolean;
  onClose: () => void;
}>;

export class Message {
  private static instanceArray: { vm: VNode; id: symbol }[] = [];

  static install: (app: App) => void;
  private static getOffsetVertical(offset: number) {
    let result = 0;
    if (this.instanceArray.length > 0) {
      this.instanceArray.forEach((obj, index) => {
        const preInstanceOffsetHeight = (
          this.instanceArray[index].vm.el as HTMLElement
        ).offsetHeight;
        if (this.instanceArray.length > 0 && index === 0)
          result = result + offset * 2 + preInstanceOffsetHeight;
        else result = result + offset + preInstanceOffsetHeight;
      });
    } else result = offset;
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

  static create(options: MessageOptions) {
    const container = document.createElement('div');
    const offsetVertical = options.offset || 20;
    const offset = this.getOffsetVertical(offsetVertical);
    const symbol = Symbol();

    const vm = createVNode(
      MessageConstructor,
      {
        ...options,
        offset,
        type: options.type,
        zIndex: PopupManager.getZIndex(),
      },
      isVNode(options.message) ? { default: () => options.message } : null,
    );

    vm.props.onDestroy = () => {
      render(null, container);
    };

    vm.props.onClose = () => {
      options.onClose?.bind(EmptyObject);
      this.restartTheOffset(symbol, offsetVertical);
    };

    this.instanceArray.push({ vm, id: symbol });
    render(vm, container);
    document.body.append(container.firstChild);
  }

  static success(options: ShortcutOptions) {
    this.create({ ...options, type: 'success' });
  }

  static error(options: ShortcutOptions) {
    this.create({ ...options, type: 'error' });
  }

  static info(options: ShortcutOptions) {
    this.create({ ...options, type: 'info' });
  }

  static warning(options: ShortcutOptions) {
    this.create({ ...options, type: 'warning' });
  }
}
