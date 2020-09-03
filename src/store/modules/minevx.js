export default {
    state: () => {
      return {
        dataId:[]
      }
    },
  
    getters: {
     
    },
  
    mutations: {
      collectId(state,payload){
        state.dataId.push(payload);
        console.log(state.dataId);
      }
    },
  
    actions: {
      collectData(context, payload){
        context.commit('collectId',payload);
      }
    },
  
    namespaced: true
  }