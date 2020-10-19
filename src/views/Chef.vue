<template>
  <main>
    <SectionBanner title="Chef" />
    <SectionHeadChef />
    <SectionTeam />
    <SectionOpeningHours />
  </main>
</template>

<script>
import SectionBanner from '@/components/SectionBanner';
import SectionOpeningHours from '@/components/SectionOpeningHours';
import SectionHeadChef from '@/components/ChefSectionHeadChef';
import SectionTeam from '@/components/ChefSectionTeam';

export default {
  components: {
    SectionBanner,
    SectionOpeningHours,
    SectionHeadChef,
    SectionTeam
  }
};
</script>
