
import Vue from 'vue'

const bus = new Vue()

export default function install(Vue) {
  Object.defineProperty(Vue.prototype, '$bus', {
    get() {
      return bus
    },
  })
}