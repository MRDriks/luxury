<template>
  <div class="products-pagination">
    <button
      class="btn btn-prev"
      :disabled="products.pagination.currentPage === 1"
      @click="prevPageClick"
    >
      <i class="fas fa-chevron-left"></i>
      prev
    </button>
    <button class="btn btn-page" @click="firstPageClick">1</button>
    <button class="btn btn-page" @click="lastPageClick">
      {{ $store.state.products.pagination.totalPages }}
    </button>
    <button
      class="btn btn-next"
      :disabled="
        products.pagination.currentPage >= products.pagination.totalPages
      "
      @click="nextPageClick"
    >
      next
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['products']),
  methods: {
    prevPageClick() {
      this.$store.dispatch('prevPage');
      document.location.href = '#products';
    },
    nextPageClick() {
      this.$store.dispatch('nextPage');
      document.location.href = '#products';
    },
    firstPageClick() {
      const page = {
        startIndex: 0,
        endIndex: 6,
        number: 1
      };
      this.$store.dispatch('setPage', page);
      document.location.href = '#products';
    },
    lastPageClick() {
      const state = this.$store.state.products;
      const startIndex =
        state.allPositionsCounter - (state.allPositionsCounter % 6);
      const endIndex = state.allPositionsCounter;
      const number = state.pagination.totalPages;
      const page = {
        startIndex,
        endIndex,
        number
      };
      this.$store.dispatch('setPage', page);
      document.location.href = '#products';
      console.log(startIndex);
      console.log(endIndex);
    }
  }
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
