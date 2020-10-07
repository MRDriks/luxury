<template>
  <main>
    <SectionBanner />
    <ArticleProducts />
  </main>
</template>

<script>
import SectionBanner from '@/components/ShopSectionBanner';
import ArticleProducts from '@/components/ShopArticleProducts';

export default {
  components: {
    SectionBanner,
    ArticleProducts
  }
};
</script>
