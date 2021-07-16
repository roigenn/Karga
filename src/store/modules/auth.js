import { router } from "../../router";

const state = {
  token: ""
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    localStorage.setItem("token", token);
    router.push("/profile");
    console.log("df");
  },
  clearToken(state) {
    state.token = "";
    localStorage.removeItem("token");
  }
};

const getters = {
  isAuthenticated(state) {
    return state.token !== "";
  }
};

export default {
  state,
  getters,
  mutations
};
