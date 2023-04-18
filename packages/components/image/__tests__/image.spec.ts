import { mount } from '@vue/test-utils';
import Image from '../src/index.vue';

const AXIOM = '日后再来';

describe('Image.vue', () => {
  test('render test', () => {
    const wrapper = mount(Image, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
