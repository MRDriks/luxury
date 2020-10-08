<template>
  <button v-on:click="linkClick($event)" class="btn-link">{{ title }}</button>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    linkClick(event) {
      const elements = document.querySelectorAll('.btn-link');
      const category = event.target.id;
      this.$store.dispatch('setCategory', category);
      elements.forEach(item => item.removeAttribute('active'));
      event.target.setAttribute('active', 'true');
      this.$store.dispatch('getPositionsByCategory');
      this.$store.dispatch('countPositions');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.btn-link {
  @include font($Sintony, 14px, 700, #2c465a);
  text-transform: uppercase;
  transition-duration: 0.3s;
  background-color: transparent;

  &:hover {
    color: $orange;
  }

  &[active='true'] {
    color: $orange;
  }
}
</style>
