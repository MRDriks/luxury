import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Shop from '@/views/Shop';
import Contact from '@/views/Contact';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/contact',
    component: Contact
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});
