import { router } from "../../router";

const state = {
  token: ""
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    localStorage.setItem("token", token);
    router.push({ path: "home" });
    console.log("setToken");
  },
  clearToken(state) {
    state.token = "";
    localStorage.removeItem("token");
  }
};

const getters = {
  isAuthenticated(state) {
    console.log("isAuth " + state.token !== "");
    return state.token !== "";
  }
};

export default {
  state,
  getters,
  mutations
};
