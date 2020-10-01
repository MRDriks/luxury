<template>
  <main>
    <BannerSection />
    <ReviewsSection />
    <AboutUsSection />
    <SpecialSection />
  </main>
</template>

<script>
import BannerSection from '@/components/BannerSection';
import ReviewsSection from '@/components/ReviewsSection';
import AboutUsSection from '@/components/AboutUsSection';
import SpecialSection from '@/components/SpecialSection';

export default {
  components: {
    BannerSection,
    ReviewsSection,
    AboutUsSection,
    SpecialSection
  }
};
</script>
