const state = {
  class: ""
};
const getters = {
  getClass(state) {
    return state.class;
  }
};
const mutations = {
  setClass(state, payload) {
    state.class = payload.name;
  }
};

export default {
  state,
  getters,
  mutations
};
