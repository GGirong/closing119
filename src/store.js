import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      partnerId: 0,
      clientId: 0,
      partnerLogin: false,
      clientLogin: false
  },
  getters: {
    getPartner: function (state) {
        return state.partnerId;
    },
    getClient: function (state) {
        return state.clientId;
    },
    getPartnerLogin: function (state) {
        return state.partnerLogin;
    },
    getClientLogin: function (state) {
        return state.clientLogin;
    }
  },
  mutations: {
    setPartner: function(state, payload) {
        return state.partnerId = payload
    },
    setClient: function(state, payload) {
        return state.partnerId = payload
    },
    setPartnerLogin: function(state, payload) {
        return state.partnerLogin= true
    },
    setClientLogin: function(state, payload) {
        return state.clientLogin= true
    },
    setPartnerLogout: function(state, payload) {
        return state.partnerLogin = false
    }
  }
});