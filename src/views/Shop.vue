<template>
  <main>
    <SectionBanner title="Shop Listing" />
    <ArticleProducts />
  </main>
</template>

<script>
import SectionBanner from '@/components/SectionBanner';
import ArticleProducts from '@/components/ShopArticleProducts';

export default {
  components: {
    SectionBanner,
    ArticleProducts
  }
};
</script>
