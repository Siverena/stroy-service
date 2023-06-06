import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage/MainPage.vue';
import ProjectPage from '@/pages/ProjectPage/ProjectPage.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
