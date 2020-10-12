<template>
  <main>
    <SectionBanner title="Gallery" />
    <SectionOpeningHours />
  </main>
</template>

<script>
import SectionBanner from '@/components/SectionBanner';
import SectionOpeningHours from '@/components/SectionOpeningHours';

export default {
  components: {
    SectionBanner,
    SectionOpeningHours
  }
};
</script>

<style lang="scss" scoped>
.opening-hours {
  background-color: #edf1f3;
}
</style>
