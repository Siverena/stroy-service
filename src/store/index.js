import { createStore } from 'vuex';
import categories from './modules/categories.js';
import house from './modules/house.js';
import projects from './modules/projects.js';
import modalModule from './modules/modal';

export default createStore({
  modules: {
    categories,
    house,
    projects,
    modalModule,
  },
});
