import Vue from "vue";
import Vuex from "vuex";
import other from "./modules/other";
import auth from "./modules/auth";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {},
  modules: {
    other,
    auth
  }
});
