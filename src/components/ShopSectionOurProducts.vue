<template>
  <section class="our-products">
    <header class="products-header">
      <h2 class="section-h-black">Our Products</h2>
      <select class="select-list text">
        <option class="option-item text" value="">Default Sorting</option>
      </select>
      <div class="display-style">
        <div class="grid">
          <i class="fas fa-th"></i>
        </div>
        <div class="row">
          <span></span>
        </div>
      </div>
      <p class="text">Showing 9 of {{ products.positionsCounter }} products</p>
    </header>
    <div class="products-body">
      <div id="all">
        <div class="tab">
          <ProductCard
            v-for="position in products.positions.all"
            :key="position.id"
            v-bind:position="position"
          />
        </div>
      </div>
      <div id="breakfast">
        <div class="tab">
          <ProductCard
            v-for="position in products.positions.breakfast"
            :key="position.id"
            v-bind:position="position"
          />
        </div>
      </div>
      <div id="lunch">
        <div class="tab">
          <ProductCard
            v-for="position in products.positions.lunch"
            :key="position.id"
            v-bind:position="position"
          />
        </div>
      </div>
      <div id="snacks">
        <div class="tab">
          <ProductCard
            v-for="position in products.positions.snacks"
            :key="position.id"
            v-bind:position="position"
          />
        </div>
      </div>
      <div id="pizza">
        <div class="tab">
          <ProductCard
            v-for="position in products.positions.pizza"
            :key="position.id"
            v-bind:position="position"
          />
        </div>
      </div>
      <div id="soups">
        <div class="tab">
          <ProductCard
            v-for="position in products.positions.soups"
            :key="position.id"
            v-bind:position="position"
          />
        </div>
      </div>
      <div id="dinner">
        <div class="tab">
          <ProductCard
            v-for="position in products.positions.dinner"
            :key="position.id"
            v-bind:position="position"
          />
        </div>
      </div>
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

.tab {
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
