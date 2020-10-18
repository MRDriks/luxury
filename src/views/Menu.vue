<template>
  <main>
    <SectionBanner title="Menu" />
    <SectionListView />
    <SectionSpeciality />
    <SectionOpeningHours />
  </main>
</template>

<script>
import SectionBanner from '@/components/SectionBanner';
import SectionSpeciality from '@/components/MenuSectionSpeciality';
import SectionListView from '@/components/MenuSectionListView';
import SectionOpeningHours from '@/components/SectionOpeningHours';

export default {
  components: {
    SectionBanner,
    SectionSpeciality,
    SectionListView,
    SectionOpeningHours
  }
};
</script>
