<template>
  <section class="list-view">
    <h2 class="section-h-black">Menu List View</h2>
    <FoodMenu />
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
.section-h-black {
  text-align: center;
}

.list-view {
  padding: 100px 0;
}
</style>
