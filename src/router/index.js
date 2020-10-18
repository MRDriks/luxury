import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/luxury',
    component: Home
  },
  {
    path: '/luxury/shop',
    component: () => import('@/views/Shop')
  },
  {
    path: '/luxury/contact',
    component: () => import('@/views/Contact')
  },
  {
    path: '/luxury/gallery',
    component: () => import('@/views/Gallery')
  },
  {
    path: '/luxury/menu',
    component: () => import('@/views/Menu')
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});
