<template>
  <div id="app" class="wrapper">
    <Preloader />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import store from '@/store/index';

export default {
  components: {
    Preloader,
    Header,
    Footer
  },
  store,
  created() {
    this.$store.dispatch('fetchPositions');
    this.$store.dispatch('fetchAllPositions');
    this.$store.dispatch('fetchMenu');
  }
};
</script>
