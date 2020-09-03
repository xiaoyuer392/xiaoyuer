import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import home from './modules/homevx'
import mine from './modules/minevx'
import spot from './modules/spotvx'
import wanxiang from './modules/wanxiangvx'

let store = new Vuex.Store({
  state: {
    allid: 0,
    allname:''
  },

  mutations: {
    setId(state,payload){
      if(payload.item.id){
        state.allid = payload.item.id;
        state.allname = payload.name;
      }else{
        state.allid = payload.item.speech_id;
        state.allname = payload.name;
      }
    }
  },

  actions: {
    changId( context,payload ){
        context.commit('setId',payload);
    }
  },

  modules: {
    home,
    mine,
    spot,
    wanxiang
  }
})

export default store