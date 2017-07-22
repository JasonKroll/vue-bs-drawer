import Vue from 'vue'
import VueBsDrawer from '@/vue-bs-drawer'

describe('vue-bs-drawer.vue', () => {
  it('should open when button is clicked', () => {
    const Constructor = Vue.extend(VueBsDrawer)
    const vm = new Constructor().$mount()
    vm.closeDrawer()

    const button = vm.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm._watcher.run()

    expect(vm.open)
      .to.equal(true)
  })

  it('should not be open when closeDrawer() called', () => {
    const Constructor = Vue.extend(VueBsDrawer)
    const vm = new Constructor().$mount()
    vm.closeDrawer()
    expect(vm.open)
      .to.equal(false)
  })

  it('should have the correct side classes', () => {
    const Constructor = Vue.extend(VueBsDrawer)
    const vm = new Constructor()
    vm.side = 'right'
    vm.$mount()
    const container = vm.$el.querySelector('div.bs-drawer__nav-container-right')

    expect(vm.$el.className.indexOf('bs-drawer__right') > 0)
      .to.equal(true)

    expect(container !== null)
      .to.equal(true)

    const btnContainer = vm.$el.querySelector('div.bs-drawer__btn-container-right')
    expect(btnContainer !== null)
      .to.equal(true)
  })

  it('should have correct button class', () => {
    const Constructor = Vue.extend(VueBsDrawer)
    const vm = new Constructor()
    vm.sidebar = 'sm'
    vm.$mount()
    const button = vm.$el.querySelector('button')

    expect(button.className.indexOf('hidden-sm-up') > 0)
      .to.equal(true)

    vm.sidebar = 'md'
    vm.$mount()
    expect(button.className.indexOf('hidden-md-up') > 0)
      .to.equal(true)

    vm.sidebar = 'lg'
    vm.$mount()
    expect(button.className.indexOf('hidden-lg-up') > 0)
      .to.equal(true)
  })

  it('should have correct button text when open', (done) => {
    const vm = new Vue({
      template: `<div><bs-drawer
                  ref="rightDrawer"
                  side="right"
                  :showDrawer="true"
                  class="col-9 col-sm-8 col-md-4 col-lg-4 col-xl-2 bs-drawer__animate">
              <span slot="opened">
                Open!
              </span>
              <span slot="closed">
                Closed!
              </span>
          </bs-drawer></div>`,
      components: {
        'bs-drawer': VueBsDrawer
      },
      methods: {
        closeDrawer () {
          this.$refs.rightDrawer.closeDrawer()
        }
      }
    }).$mount()

    const button = vm.$el.querySelector('button')
    expect(button.textContent.indexOf('Open!') > 0)
      .to.equal(true)

    vm.closeDrawer()
    Vue.nextTick(() => {
      const buttonClosed = vm.$el.querySelector('button')
      expect(buttonClosed.textContent.indexOf('Closed!') > 0)
        .to.equal(true)
    })
    done()
  })
})
