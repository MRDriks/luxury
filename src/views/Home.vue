<template>
  <main>
    <SectionBanner />
    <SectionReviews />
    <SectionAboutUs />
    <SectionSpecial />
    <SectionFoodMenu />
    <SectionClients />
    <SectionReserve />
  </main>
</template>

<script>
import SectionBanner from '@/components/HomeSectionBanner';
import SectionReviews from '@/components/HomeSectionReviews';
import SectionAboutUs from '@/components/HomeSectionAboutUs';
import SectionSpecial from '@/components/HomeSectionSpecial';
import SectionFoodMenu from '@/components/HomeSectionFoodMenu';
import SectionClients from '@/components/HomeSectionClients';
import SectionReserve from '@/components/HomeSectionReserve';

export default {
  components: {
    SectionBanner,
    SectionReviews,
    SectionAboutUs,
    SectionSpecial,
    SectionFoodMenu,
    SectionClients,
    SectionReserve
  }
};
</script>
