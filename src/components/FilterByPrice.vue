<template>
  <div class="filter-by-price">
    <h3 class="title">Filter by Price</h3>
    <div class="wrapper">
      <input type="range" class="price-slider" min="0" max="100" value="50" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.title {
  @include font($Playfair, 24px, 700, $dark-blue);
}

input[type='range'] {
  appearance: none;
  margin-top: 45px;
  width: 100%;
}

input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  background-color: #ffdbe8;
}

input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 11px;
  height: 11px;
  background-color: $pink;
  transform: translateY(-3px);
}
</style>
