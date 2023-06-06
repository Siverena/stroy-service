import dataProjects from '@/store/test-data/d-projects.js';
export default {
  state: {
    projects: [],
    isLoaded: false,
  },
  getters: {
    getProjects(state) {
      return state.projects;
    },
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    fetchProjects({ commit }, id) {
      const projects = dataProjects.filter((el) => el.idCategory === id);
      //   console.log('fetchProjects: id =', id);
      commit('SET_PROJECTS', projects);
      this.state.isLoaded = true;
    },
  },
};
