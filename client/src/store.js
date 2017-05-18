import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dataArticles: [],
    isLogin: false
  },
  getters: {
    dataArticles(state) {
      return state.dataArticles
    }
  },
  mutations: {
    dataArticles
  }
})