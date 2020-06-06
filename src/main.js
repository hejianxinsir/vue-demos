import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
