import Vue from "vue";
import Vuex from "vuex";
import other from "./modules/other";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {},
  modules: {
    other
  }
});
