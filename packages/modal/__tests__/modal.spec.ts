import { mount } from '@vue/test-utils'
import Modal from '../src/index.vue'

const AXIOM = '日后再来'

describe('Modal.vue', () => {
  test('render test', () => {
    const wrapper = mount(Modal, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
