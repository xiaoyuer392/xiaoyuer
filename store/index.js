import Vue from 'vue'
import Vuex from 'vuex'

import homepage from './homepage/homepage'
import spot from "./spot/spot";
import wangxiang from "./wangxiang/wangxiang";
import mine from "./mine/mine";

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    data: [],
  },
  getters: {},
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
      homepage,
      spot,
      wangxiang,
      mine
  },
});

export default store