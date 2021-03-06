import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/luxury',
    component: () => import('@/views/Home')
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
  },
  {
    path: '/luxury/chef',
    component: () => import('@/views/Chef')
  },
  {
    path: '/luxury/events',
    component: () => import('@/views/Events')
  },
  {
    path: '/luxury/reservation',
    component: () => import('@/views/Reservation')
  },
  {
    path: '/luxury/cart',
    component: () => import('@/views/Cart')
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});
