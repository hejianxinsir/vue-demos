import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import {CHANGE} from './collect.js'

export default new Vuex.Store({
  state: {
    num: 99,
    location: '加拿大'
  },
  modules: {
    moduleA: {
      namespaced: true,
      state: {
        today: 'Sunny'
      }
    },
    moduleB: {
      namespaced: true,
      state: {
        today: 'Rain'
      }
    }
  },
  mutations: {
    inc(state){
      state.num += 1
    },
    dec(state){
      state.num -= 1
    },
    [CHANGE](state){
      state.location = '中国'
    }
  },
  actions: {
    incAction(context){
      context.commit('inc')
    },
    decAction(context){
      context.commit('dec')
    }
  },
  getters: {
    getNum(state){
      return state.num
    },
    getLocation(state){
      return state.location
    }
  }
})

