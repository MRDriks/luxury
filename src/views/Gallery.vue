<template>
  <main>
    <SectionBanner title="Gallery" />
    <SectionGallery />
    <SectionOpeningHours />
  </main>
</template>

<script>
import SectionBanner from '@/components/SectionBanner';
import SectionGallery from '@/components/GallerySectionGallery';
import SectionOpeningHours from '@/components/SectionOpeningHours';

export default {
  components: {
    SectionBanner,
    SectionGallery,
    SectionOpeningHours
  }
};
</script>

<style lang="scss" scoped>
.opening-hours {
  background-color: #edf1f3;
}
</style>
