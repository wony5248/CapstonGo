import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SetInfo: [],
  },
  mutations: {
    SetInfo: function (state, data) {
      this.state.SetInfo = data
    },
  },
  actions: {
  },
  modules: {
  }
})
