import dataCategories from '@/store/test-data/d-categories.js';
export default {
  state: {
    categories: {},
    category: {},
    isLoaded: false,
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getCategory(state) {
      return state.category;
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_CATEGORY(state, category) {
      state.category = category;
    },
  },
  actions: {
    async fetchCategories(ctx) {
      const categories = dataCategories;
      ctx.commit('SET_CATEGORIES', categories);
      this.state.isLoaded = true;
    },
    async fetchCategory({ commit }, id) {
      const category = dataCategories.filter((el) => el.id === id);
      commit('SET_CATEGORY', category);
      this.state.isLoaded = true;
    },
  },
};
