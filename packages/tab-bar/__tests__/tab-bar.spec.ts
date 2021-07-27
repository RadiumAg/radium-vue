import { mount } from '@vue/test-utils'
import TabBar from '../src/index.vue'

const AXIOM = '日后再来'

describe('TabBar.vue', () => {
  test('render test', () => {
    const wrapper = mount(TabBar, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
