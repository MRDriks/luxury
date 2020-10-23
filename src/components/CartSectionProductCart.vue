<template>
  <section class="product-cart">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-h-black">Product Cart</h2>
        <div class="row">
          <ArticleItems />
          <AsideSummary />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleItems from '@/components/CartArticleItems';
import AsideSummary from '@/components/CartAsideSummary';

export default {
  components: {
    ArticleItems,
    AsideSummary
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 100px 0;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
</style>
