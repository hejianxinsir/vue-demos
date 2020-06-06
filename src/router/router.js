import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import List from '../components/list.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'list',
      path: '/',
      components: {
        List
      }
    },
    {
      name: 'helloworld',
      path: '/helloworld/:data',
      components: {
        main: HelloWorld
      }
    }

  ]
})