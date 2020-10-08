<template>
  <div class="food-category">
    <h3 class="title">Food Category</h3>
    <ul class="category-list">
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <Button title="All" id="all" active="true" />
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <Button title="Breakfast" id="breakfast" />
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <Button title="Lunch" id="lunch" />
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <Button title="Snacks" id="snacks" />
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <Button title="Pizza" id="pizza" />
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <Button title="Soups" id="soups" />
      </li>
      <li class="list-item">
        <div class="decor-arrow">
          <i class="fas fa-chevron-right"></i>
        </div>
        <Button title="Dinner" id="dinner" />
      </li>
    </ul>
  </div>
</template>

<script>
import Button from '@/components/FoodCategoryButton';

export default {
  components: {
    Button
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
</style>
