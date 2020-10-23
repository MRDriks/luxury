<template>
  <main>
    <SectionBanner title="Shopping Cart" />
    <SectionProductCart />
  </main>
</template>

<script>
import SectionBanner from '@/components/SectionBanner';
import SectionProductCart from '@/components/CartSectionProductCart';

export default {
  components: {
    SectionBanner,
    SectionProductCart
  }
};
</script>
