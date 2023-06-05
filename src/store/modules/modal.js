export default {
  state: { isOpen: false },
  mutations: {
    toggleModal(state) {
      state.isOpen = !state.isOpen;
    },
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
  getters: {
    isModalOpen(state) {
      return state.isOpen;
    },
  },
};
