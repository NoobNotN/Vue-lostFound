import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:'index',
    userID:2,
  },
  mutations: {
    setToken(state,token){
      state.token = token;
      // console.log('store Token set!');
      localStorage.setItem('token',token);
    },
    delToken(state){
      // console.log('store Token del!');
      state.token = '';
      localStorage.removeItem('token');
    },
    setUserID(state,userID){
      state.userID = userID;
      console.log('store userID set!'+userID);
    },
  },
  actions: {
  },
  modules: {
  }
})
