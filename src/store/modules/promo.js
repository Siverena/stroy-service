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
      const pr = dataPromo;
      ctx.commit('SET_PROMO', dataPromo);
      console.log(dataPromo);
      this.state.isLoaded = true;
    },
  },
};
