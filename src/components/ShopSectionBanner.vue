<template>
  <section class="banner">
    <div class="wrapper">
      <h1>Shop Listing</h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.wrapper {
  width: 100%;
  height: 250px;
  background-color: $dark-blue;
  @extend %row-center-aligment;
  @include font($Playfair, 56px, 700, $white);
}

h1 {
  &::before,
  &::after {
    content: '';
    width: 45px;
    height: 30px;
    background: url('../assets/img/icons/left-leaf.png') no-repeat center center;
    display: inline-block;
  }

  &::after {
    background: url('../assets/img/icons/right-leaf.png') no-repeat center
      center;
  }
}
</style>
