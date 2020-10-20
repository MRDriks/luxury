<template>
  <main>
    <SectionBanner title="Reservation" />
    <SectionTableReserve />
    <SectionSpecial />
    <SectionOpeningHours />
  </main>
</template>

<script>
import SectionBanner from '@/components/SectionBanner';
import SectionOpeningHours from '@/components/SectionOpeningHours';
import SectionTableReserve from '@/components/ReservationSectionTableReserve';
import SectionSpecial from '@/components/ReservationSectionSpecial';

export default {
  components: {
    SectionBanner,
    SectionOpeningHours,
    SectionTableReserve,
    SectionSpecial
  }
};
</script>
