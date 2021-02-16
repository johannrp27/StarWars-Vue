import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {},
  },
  mutations: {
    getData(state, data){
      state.data = data;
    }
  },
  actions: {
    async fetchData({commit}, param){
      console.log(param)
      // axios.get(process.env.VUE_APP_BASE_URL/param/)
      const data = await axios.get(process.env.VUE_APP_BASE_URL);
      commit('getData', data);
    }
  },
  modules: {
  }
})
