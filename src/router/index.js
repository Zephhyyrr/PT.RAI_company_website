import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductDetails from '@/views/ProductDetails.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/product/:id', component: ProductDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
  }
});

export default router;
