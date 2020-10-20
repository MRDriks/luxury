<template>
  <aside class="side-bar">
    <FoodCategory />
    <NewsletterPanel />
  </aside>
</template>

<script>
import FoodCategory from '@/components/FoodCategory';
import NewsletterPanel from '@/components/NewsletterPanel';

export default {
  components: {
    FoodCategory,
    NewsletterPanel
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.newsletter-panel {
  margin: 100px 0;
}
</style>
