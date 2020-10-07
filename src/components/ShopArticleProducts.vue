<template>
  <article class="products">
    <div class="container">
      <div class="products-wrapper">
        <Aside />
        <SectionOurProducts />
      </div>
    </div>
  </article>
</template>

<script>
import Aside from '@/components/ShopAside';
import SectionOurProducts from '@/components/ShopSectionOurProducts';

export default {
  components: {
    Aside,
    SectionOurProducts
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.products {
  padding: 100px 0 90px;
}

.products-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
