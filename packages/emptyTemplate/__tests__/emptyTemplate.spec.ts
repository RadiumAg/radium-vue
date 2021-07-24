import { mount } from '@vue/test-utils';
import EmptyTemplate from '../src/index.vue';

const AXIOM = '日后再来';

describe('EmptyTemplate.vue', () => {
  test('render test', () => {
    const wrapper = mount(EmptyTemplate, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
