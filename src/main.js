import 'swiper/swiper-bundle.css';
import '@/assets/scss/main.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
