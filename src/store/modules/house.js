import dataHouse from '@/store/test-data/d-houses.js';
import dataProjects from '@/store/test-data/d-projects';
export default {
  state: {
    house: {},
    isLoaded: false,
    housesOnPromo: [],
    projects: [],
  },
  getters: {
    getHouse(state) {
      return state.house;
    },
    getHousesOnPromo(state) {
      return state.housesOnPromo;
    },
    getProjects(state) {
      return state.projects;
    },
  },
  mutations: {
    SET_HOUSE(state, house) {
      state.house = house;
    },
    SET_HOUSES_ON_PROMO(state, housesOnPromo) {
      state.housesOnPromo = housesOnPromo;
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    fetchHouse({ commit }, id) {
      const house = dataHouse.filter((el) => el.id === id);
      commit('SET_HOUSE', house);
      this.state.isLoaded = true;
    },
    fetchHousesOnPromo({ commit }) {
      const housesOnPromo = dataHouse.filter((el) => el.promoID != null);
      commit('SET_HOUSES_ON_PROMO', housesOnPromo);
      this.state.isLoaded = true;
    },
    fetchProjects({ commit }, id) {
      const projects = dataProjects.filter((el) => el.idCategory === id);
      commit('SET_PROJECTS', projects);
      this.state.isLoaded = true;
    },
  },
};
