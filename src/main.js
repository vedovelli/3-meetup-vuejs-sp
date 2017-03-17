
import Vue from 'vue'
import App from './App.vue'
import http from './plugins/http'
import eventbus from './plugins/eventbus'
import router from './router'
import store from './store'

Vue.use(http)
Vue.use(eventbus)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
})
