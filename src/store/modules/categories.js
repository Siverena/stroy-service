import dataCategories from '@/store/test-data/d-categories.js';
export default {
  state: {
    categories: {},
    isLoaded: false,
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async fetchCategories(ctx) {
      const categories = dataCategories;
      ctx.commit('SET_CATEGORIES', categories);

      this.state.isLoaded = true;
    },
  },
};
