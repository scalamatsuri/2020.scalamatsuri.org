import Vue from 'vue'
import Toast from './Toast.vue'

const toastPlugin = {
  install(Vue, defaultOptions = {}) {
    const CONSTRUCTOR = Vue.extend(Toast)
    const CACHE = {}
    Object.assign(Toast.DEFAULT_OPT, defaultOptions)

    function toast(msg, options = {}) {
      options.message = msg
      const toast = CACHE[options.id] || (CACHE[options.id] = new CONSTRUCTOR())
      if (!toast.$el) {
        const vm = toast.$mount()
        document.querySelector(options.parent || 'body').appendChild(vm.$el)
      }
      toast.queue.push(options)
    }
    Vue.toast = Vue.prototype.$toast = toast
  }
}

Vue.use(toastPlugin)
