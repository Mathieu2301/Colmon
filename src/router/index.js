import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/home.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
    },
  ],
});

export default router;
