import 'swiper/swiper-bundle.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/assets/scss/main.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
