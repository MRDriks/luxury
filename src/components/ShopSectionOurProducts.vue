<template>
  <section class="our-products">
    <header class="products-header">
      <h2 class="section-h-black">Our Products</h2>
      <select class="select-list text" v-on:change="selectOnChange($event)">
        <option class="option-item text" value="default"
          >Default Sorting</option
        >
        <option class="option-item text" value="price-high"
          >Price - High to Low</option
        >
        <option class="option-item text" value="price-low"
          >Price - Low to High</option
        >
      </select>
      <div class="display-style">
        <div class="grid">
          <i class="fas fa-th"></i>
        </div>
        <div class="row">
          <span></span>
        </div>
      </div>
      <p class="text">
        Showing 9 of {{ products.allPositionsCounter }} products
      </p>
    </header>
    <div class="products-body">
      <ProductCard
        v-for="position in products.positionsByCategory"
        :key="position.id"
        v-bind:position="position"
      />
    </div>
    <footer class="products-footer">
      <button class="btn btn-prev">
        <i class="fas fa-chevron-left"></i>
        prev
      </button>
      <button class="btn btn-page">1</button>
      <button class="btn btn-next">
        next
        <i class="fas fa-chevron-right"></i>
      </button>
    </footer>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import ProductCard from '@/components/ProductCard';

export default {
  computed: mapState(['products']),
  components: {
    ProductCard
  },
  methods: {
    selectOnChange(event) {
      const value = event.target.value;
      this.$store.dispatch('sortingStateChange', value);
      this.$store.dispatch('getPositionsByCategory');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

%row-line {
  content: '';
  width: 13px;
  height: 3px;
  background-color: #2c465a;
  display: inline-block;
}

%gird-block {
  content: '';
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color: $pink;
}

.our-products {
  width: 870px;
}

.products-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.products-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.display-style {
  display: flex;
}

.grid,
.row {
  width: 31px;
  height: 31px;
  border: 1px solid #c7d1d6;
  margin: 0 4px;
  cursor: pointer;
}

.row {
  @extend %column-center-aligment;
  justify-content: center;

  &::before {
    @extend %row-line;
  }

  span {
    @extend %row-line;
    margin: 2px 0;
  }

  &::after {
    @extend %row-line;
  }
}

.grid {
  @extend %row-center-aligment;

  i {
    color: $pink;
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

  .btn {
    padding: 13px 32px;
    border-radius: 22px;

    i {
      font-size: 13px;
    }
  }

  .btn-prev {
    background-color: #ffeac5;
    color: #d38a0c;

    i {
      margin-right: 8px;
    }
  }

  .btn-next {
    i {
      margin-left: 8px;
    }
  }

  .btn-page {
    color: $dark-blue;
    background-color: transparent;
    border: 1px solid #d3d9dd;
    margin: 0 10px;
  }
}
</style>
