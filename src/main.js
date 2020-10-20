import 'swiper/swiper-bundle.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/assets/scss/main.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

window.onload = () => {
  document.querySelector('.preloader').setAttribute('active', 'false');
  document.querySelector('.body').style.overflowY = 'visible';
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
