<template>
  <main>
    <BannerSection />
    <ReviewsSection />
    <AboutUsSection />
    <SpecialSection />
    <FoodMenuSection />
    <ClientsSection />
  </main>
</template>

<script>
import BannerSection from '@/components/BannerSection';
import ReviewsSection from '@/components/ReviewsSection';
import AboutUsSection from '@/components/AboutUsSection';
import SpecialSection from '@/components/SpecialSection';
import FoodMenuSection from '@/components/FoodMenuSection';
import ClientsSection from '@/components/ClientsSection';

export default {
  components: {
    BannerSection,
    ReviewsSection,
    AboutUsSection,
    SpecialSection,
    FoodMenuSection,
    ClientsSection
  }
};
</script>
