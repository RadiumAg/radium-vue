import { mount } from '@vue/test-utils';
import TabPanel from '../src/index.vue';

const AXIOM = '日后再来';

describe('TabPanel.vue', () => {
  test('render test', () => {
    const wrapper = mount(TabPanel, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
