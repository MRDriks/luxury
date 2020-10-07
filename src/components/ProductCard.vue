<template>
  <div class="card">
    <img
      class="position-image"
      src="@/assets/img/position-1.jpg"
      alt="Position image"
    />
    <p class="title">{{ position.title }}</p>
    <p class="price">${{ position.price }}</p>
    <button
      v-on:click="positionBtnClick($event, position.id)"
      class="btn-position"
    ></button>
  </div>
</template>

<script>
export default {
  props: ['position'],
  methods: {
    positionBtnClick(event) {
      event.target.classList.toggle('active');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.card {
  width: 270px;
  height: 396px;
  border: 1px solid #e4e4e4;
  position: relative;
  margin-top: 50px;
}

.position-image {
  width: 226px;
  height: 226px;
  margin: 35px 21px 40px;
}

.title {
  text-transform: uppercase;
  @include font($Sintony, 17px, 700, $dark-blue);
  text-align: center;
}

.price {
  @include font($Sintony, 16px, 700, $dark-blue);
  text-align: center;
  margin-top: 10px;
}

.btn-position {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: $orange;
  color: $white;
  position: absolute;
  bottom: -21.5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: '';
    width: 14px;
    height: 2px;
    background-color: $white;
    display: inline-block;
    position: absolute;
  }

  &::after {
    transform: rotate(90deg);
  }

  &.active {
    background-color: #4af029;
  }

  &.active {
    &::after {
      visibility: hidden;
    }
  }
}
</style>
