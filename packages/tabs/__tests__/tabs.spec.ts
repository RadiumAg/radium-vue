import { mount } from '@vue/test-utils'
import Tabs from '../src/index.vue'

const AXIOM = '日后再来'

describe('Tabs.vue', () => {
  test('render test', () => {
    const wrapper = mount(Tabs, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
