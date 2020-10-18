<template>
  <section class="our-products">
    <header class="products-header">
      <h2 class="section-h-black">Our Products</h2>
      <select class="select-list text" v-on:change="selectOnChange($event)">
        <option class="option-item text" value="rate">Most rated</option>
        <option class="option-item text" value="price-high"
          >Price - High to Low</option
        >
        <option class="option-item text" value="price-low"
          >Price - Low to High</option
        >
      </select>
      <div class="display-style">
        <div class="view-model">
          <i
            class="fas fa-th vm-item"
            @click="vmGridClick($event)"
            active="true"
          ></i>
        </div>
        <div class="view-model">
          <i class="fas fa-bars vm-item" @click="vmRowClick($event)"></i>
        </div>
      </div>
      <p class="text">
        Showing {{ products.pagination.currentPage }} of
        {{ products.pagination.totalPages }} pages
      </p>
    </header>
    <div class="products-body" :vm="products.viewModel">
      <ProductCard
        v-for="position in products.positionsByCategory.slice(
          products.pagination.startIndex,
          products.pagination.endIndex
        )"
        :key="position.id"
        :position="position"
      />
    </div>
    <footer class="products-footer">
      <Pagination />
    </footer>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/ProductsPagination';

export default {
  computed: mapState(['products']),
  components: {
    ProductCard,
    Pagination
  },
  methods: {
    selectOnChange(event) {
      const value = event.target.value;
      this.$store.dispatch('sortingStateChange', value);
      this.$store.dispatch('getPositionsByCategory');
    },
    vmGridClick(event) {
      this.$store.dispatch('setViewModel', 'grid');
      const el = document.querySelectorAll('.vm-item');
      el.forEach(item => item.removeAttribute('active'));
      event.target.setAttribute('active', 'true');
    },
    vmRowClick(event) {
      this.$store.dispatch('setViewModel', 'row');
      const el = document.querySelectorAll('.vm-item');
      el.forEach(item => item.removeAttribute('active'));
      event.target.setAttribute('active', 'true');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.our-products {
  width: 870px;
}

.products-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.products-body {
  &[vm='grid'] {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &[vm='row'] {
    display: flex;
    flex-direction: column;
  }
}

.display-style {
  display: flex;
}

.view-model {
  width: 31px;
  height: 31px;
  border: 1px solid #c7d1d6;
  margin: 0 4px;
  cursor: pointer;

  i {
    color: #2c465a;
    font-size: 16px;
    width: 100%;
    height: 100%;
    @extend %row-center-aligment;

    &[active='true'] {
      color: $pink;
    }
  }
}

.select-list {
  width: 220px;
  border-bottom: 1px solid #c7d1d6;
  padding-bottom: 15px;
}

.text,
.option-item,
.select-list {
  color: #363d43;
}

.products-footer {
  margin-top: 75px;
}
</style>
