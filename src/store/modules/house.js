import dataHouse from '@/store/test-data/d-houses.js';
export default {
  state: {
    house: {},
    isLoaded: false,
  },
  getters: {
    getHouse(state) {
      return state.projects;
    },
  },
  mutations: {
    SET_HOUSE(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    fetchHouse({ commit }, id) {
      const house = dataHouse.filter((el) => el.id === id);

      commit('SET_HOUSE', house);
      this.state.isLoaded = true;
    },
  },
};
