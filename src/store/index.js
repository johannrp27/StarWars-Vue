import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {},
    categories: [
      { url: 'people', name : 'Characters'},
      { url: 'planets', name : 'Planets'},
      { url: 'films', name :'Films'},
      { url: 'species', name : 'Species'},
      { url: 'vehicles', name : 'Vehicles'},
      { url: 'starships', name : 'Starships'}
    ]
  },
  mutations: {
    getData(state, data){
      state.data = data;
    }
  },
  actions: {
    async fetchData({commit}, param){
      console.log(param);
      const data = await axios.get(`${process.env.VUE_APP_BASE_URL}${param}`);
      commit('getData', data);
    }
  },
  modules: {
  }
})
