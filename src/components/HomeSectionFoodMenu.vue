<template>
  <section class="food-menu">
    <h2 class="section-h-black">Food Menu</h2>
    <FoodMenu />
    <div class="row">
      <a href="#" class="btn btn-explore">Explore food menu</a>
    </div>
  </section>
</template>

<script>
import FoodMenu from '@/components/FoodMenu';

export default {
  components: {
    FoodMenu
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
