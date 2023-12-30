import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from './App.vue'

describe('App', () => {
  it('should hide the headline by default', () => {
    const wrapper = mount(App)

    expect(wrapper.find('[data-test="headline"]').isVisible()).toBe(false)
  })

  it('should toggle the headline visibility when clicking on the "toggle" button', async () => {
    const wrapper = mount(App, {
      attachTo: document.body,
    })

    await wrapper.get('[data-test="toggle-headline"]').trigger('click')

    expect(wrapper.find('[data-test="headline"]').isVisible()).toBe(true)

    await wrapper.get('[data-test="toggle-headline"]').trigger('click')

    expect(wrapper.find('[data-test="headline"]').isVisible()).toBe(false)
  })
})