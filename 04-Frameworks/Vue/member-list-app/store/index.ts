import { createStore } from "vuex";

export default createStore({
  state: {
    organization: "lemoncode",
    page: 1,
  },
  mutations: {
    setOrganization(state,organization) {
      state.organization = organization;
    },
    incrementPage (state) {
      state.page ++;
    },
    decrementPage (state) {
      state.page --;
    },
    resetPage (state) {
      state.page =1;
    },
    lastPage (state,lastPage) {
      state.page = lastPage;
    }
  },
  actions: {},
  modules: {},
});
