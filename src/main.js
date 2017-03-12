
import Vue from 'vue'
import App from './App.vue'
import http from './plugins/http'
import eventbus from './plugins/eventbus'
import router from './router'

Vue.use(http)
Vue.use(eventbus)

new Vue({
  router,
  el: '#app',
  render: h => h(App),
})
