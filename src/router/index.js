import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/shop',
    component: () => import('@/views/Shop')
  },
  {
    path: '/contact',
    component: () => import('@/views/Contact')
  },
  {
    path: '/gallery',
    component: () => import('@/views/Gallery')
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});
