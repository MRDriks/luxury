<template>
  <aside class="side-bar">
    <FoodCategory />
    <FilterByPrice />
    <NewsletterPanel />
  </aside>
</template>

<script>
import FoodCategory from '@/components/FoodCategory';
import FilterByPrice from '@/components/FilterByPrice';
import NewsletterPanel from '@/components/NewsletterPanel';

export default {
  components: {
    FoodCategory,
    FilterByPrice,
    NewsletterPanel
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.filter-by-price {
  margin: 100px 0;
}
</style>
