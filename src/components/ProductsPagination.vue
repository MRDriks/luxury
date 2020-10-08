<template>
  <div class="products-pagination">
    <button
      class="btn btn-prev"
      :disabled="products.pagination.currentPage === 1"
      v-on:click="$store.dispatch('prevPage')"
    >
      <i class="fas fa-chevron-left"></i>
      prev
    </button>
    <button class="btn btn-page">1</button>
    <button
      class="btn btn-next"
      :disabled="
        products.pagination.currentPage >= products.pagination.totalPages
      "
      v-on:click="$store.dispatch('nextPage')"
    >
      next
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['products'])
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.btn {
  padding: 13px 32px;
  border-radius: 22px;

  &[disabled] {
    background-color: #ffeac5;
    color: #d38a0c;
    cursor: not-allowed;
  }

  i {
    font-size: 13px;
    margin-right: 8px;
  }
}

.btn-page {
  color: $dark-blue;
  background-color: transparent;
  border: 1px solid #d3d9dd;
  margin: 0 10px;
}
</style>
