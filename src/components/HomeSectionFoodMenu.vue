<template>
  <section class="food-menu">
    <h2 class="section-h-black">Food Menu</h2>
    <FoodMenu />
    <div class="row">
      <router-link
        to="/luxury/menu"
        @click.native="scrollUp"
        class="btn btn-explore"
        >Explore food menu</router-link
      >
    </div>
  </section>
</template>

<script>
import FoodMenu from '@/components/FoodMenu';

export default {
  components: {
    FoodMenu
  },
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.food-menu {
  h2 {
    text-align: center;
  }
}

.btn-explore {
  padding: 16px 30px;
}

.row {
  text-align: center;
  margin-bottom: 120px;
}
</style>
