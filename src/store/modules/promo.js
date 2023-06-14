import dataPromo from '@/store/test-data/d-promo.js';

export default {
  state: {
    promo: [],
    isLoaded: false,
  },
  getters: {
    getPromo(state) {
      return state.promo;
    },
  },
  mutations: {
    SET_PROMO(state, promo) {
      state.promo = promo;
    },
  },
  actions: {
    fetchPromo(ctx) {
      ctx.commit('SET_PROMO', dataPromo);
      this.state.isLoaded = true;
    },
  },
};
