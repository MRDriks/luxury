<template>
  <div class="preloader" active="true">
    <orbit-spinner
      :animation-duration="1200"
      :size="55"
      color="#fea100"
      class="loader"
    />
    <SectionBanner title="Luxury restaurant" />
  </div>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners';
import SectionBanner from '@/components/SectionBanner';

export default {
  components: {
    OrbitSpinner,
    SectionBanner
  }
};
</script>

<style lang="scss">
.body {
  overflow: hidden;
}

.preloader {
  width: 100%;
  height: 100vh;
  background-color: #ededed;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &[active='false'] {
    opacity: 0;
    visibility: hidden;
    transition-duration: 1.5s;
  }

  .banner {
    width: 100%;

    .wrapper {
      height: 100vh;
    }
  }
}

.loader {
  position: absolute;
  top: 30%;
}
</style>
