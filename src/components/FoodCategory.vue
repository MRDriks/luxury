<template>
  <div class="food-category">
    <h3 class="title">Food Category</h3>
    <ul data-tabs class="category-list">
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <a
          data-tabby-default
          v-on:click="$store.dispatch('countPositions', 'all')"
          class="link"
          href="#all"
          >All</a
        >
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <a
          v-on:click="$store.dispatch('countPositions', 'breakfast')"
          class="link"
          href="#breakfast"
          >Breakfast</a
        >
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <a
          v-on:click="$store.dispatch('countPositions', 'lunch')"
          class="link"
          href="#lunch"
          >Lunch</a
        >
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <a
          v-on:click="$store.dispatch('countPositions', 'snacks')"
          class="link"
          href="#snacks"
          >Snacks</a
        >
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <a
          v-on:click="$store.dispatch('countPositions', 'pizza')"
          class="link"
          href="#pizza"
          >Pizza</a
        >
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <a
          v-on:click="$store.dispatch('countPositions', 'soups')"
          class="link"
          href="#soups"
          >Soups</a
        >
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <a
          v-on:click="$store.dispatch('countPositions', 'dinner')"
          class="link"
          href="#dinner"
          >Dinner</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Tabby from 'tabbyjs';

export default {
  mounted() {
    new Tabby('[data-tabs]');
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.title {
  @include font($Playfair, 24px, 700, $dark-blue);
}

.category-list {
  margin-top: 25px;
}

.list-item {
  display: flex;
  align-items: center;
  margin: 7px 0;
}

.decor-arrow {
  width: 25px;
  height: 25px;
  background-color: #ffe9f1;
  border-radius: 50%;
  margin-right: 15px;
  @extend %row-center-aligment;

  i {
    font-size: 12px;
    color: $pink;
  }
}

.link {
  @include font($Sintony, 14px, 700, $dark-blue);
  text-transform: uppercase;
  transition-duration: 0.3s;

  &:hover {
    color: $orange;
  }

  &[aria-selected='true'] {
    color: $orange;
  }
}
</style>
