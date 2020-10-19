<template>
  <main>
    <SectionBanner title="Events" />
    <SectionEvents />
    <SectionOpeningHours />
  </main>
</template>

<script>
import SectionBanner from '@/components/SectionBanner';
import SectionOpeningHours from '@/components/SectionOpeningHours';
import SectionEvents from '@/components/EventsSectionEvents';

export default {
  components: {
    SectionBanner,
    SectionOpeningHours,
    SectionEvents
  }
};
</script>

<style lang="scss" scoped>
.opening-hours {
  background-color: #edf1f3;
}
</style>
