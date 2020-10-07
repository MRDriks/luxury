<template>
  <div id="app" class="wrapper">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import store from '@/store/index';

export default {
  components: {
    Header,
    Footer
  },
  store,
  created() {
    this.$store.dispatch('fetchPositions');
    this.$store.dispatch('fetchMenu');
  }
};
</script>
