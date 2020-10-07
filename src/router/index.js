import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Shop from '@/views/Shop';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/shop',
    component: Shop
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});
