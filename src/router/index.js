import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage/MainPage.vue';
import ProjectPage from '@/pages/ProjectPage/ProjectPage.vue';
import HousePage from '@/pages/HousePage/HousePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/project/:id',
    name: 'project',
    props: (route) => ({ id: route.params.id }),
    component: ProjectPage,
  },
  {
    path: '/house/:id',
    name: 'house',
    props: (route) => ({ id: route.params.id }),
    component: HousePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
