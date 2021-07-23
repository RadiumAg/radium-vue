import { getConfig } from './config';

class PopupManager {
  private static zIndex = 2000 || getConfig('zIndex');

  static getZIndex() {
    return this.zIndex++;
  }
}

export default PopupManager;
