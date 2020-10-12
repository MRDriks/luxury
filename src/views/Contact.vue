<template>
  <main>
    <SectionBanner title="Contact Us" />
    <SectionDetails />
    <SectionForm />
  </main>
</template>

<script>
import SectionBanner from '@/components/SectionBanner';
import SectionDetails from '@/components/ContactSectionDetails';
import SectionForm from '@/components/ContactSectionForm';

export default {
  components: {
    SectionBanner,
    SectionDetails,
    SectionForm
  }
};
</script>
