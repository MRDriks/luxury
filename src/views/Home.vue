<template>
  <main>
    <ReviewsSection />
    <AboutUsSection />
    <SpecialSection />
  </main>
</template>

<script>
import ReviewsSection from '@/components/ReviewsSection';
import AboutUsSection from '@/components/AboutUsSection';
import SpecialSection from '@/components/SpecialSection';

export default {
  components: {
    ReviewsSection,
    AboutUsSection,
    SpecialSection
  }
};
</script>
