
import axios from 'axios'

const http = axios.create({
  baseURL: '/'
})

export default function install(Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    get() {
      return http
    },
  })
}