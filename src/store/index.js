import { createStore } from "vuex";
import coachesModule from "./Coaches/index.js";
export default createStore({
  modules: {
    coaches: coachesModule,
  },
  state() {},
  mutations: {},
  actions: {},
  getters: {},
});
