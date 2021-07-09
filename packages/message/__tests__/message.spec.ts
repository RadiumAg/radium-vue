import { mount } from '@vue/test-utils';
import Message from '../src/index.vue';

const AXIOM = '日后再来';

describe('Message.vue', () => {
  test('render test', () => {
    const wrapper = mount(Message, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
