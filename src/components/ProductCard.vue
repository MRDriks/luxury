<template>
  <div class="card" :vm="$store.state.products.viewModel">
    <div class="rate">
      {{ position.rate }}
      <i class="fas fa-star"></i>
    </div>
    <img
      class="position-image"
      src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Position image"
    />
    <div class="text-block">
      <p class="title">{{ position.title }}</p>
      <p class="description">{{ position.description }}</p>
      <p class="price">${{ position.price }}</p>
    </div>
    <button
      @click="addToCart($event, position.id)"
      class="btn-position"
    ></button>
  </div>
</template>

<script>
export default {
  props: ['position'],
  methods: {
    addToCart(event, positionId) {
      event.target.classList.toggle('active');
      this.$store.dispatch('addToCart', positionId);
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

  &[vm='row'] {
    width: 100%;
    display: flex;
    height: 100%;

    .rate {
      right: 5px;
      left: auto;
    }

    .position-image {
      margin: 0;
    }

    .price {
      margin: 0;
    }

    .description {
      display: block;
    }

    .text-block {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }

    .btn-position {
      left: 61%;
      transform: none;
    }
  }
}

.rate {
  width: 39px;
  height: 25px;
  background-color: $orange;
  position: absolute;
  top: 5px;
  left: 5px;
  @include font($Sintony, 14px, 700, $white);
  @extend %row-center-aligment;

  i {
    color: $white;
    font-size: 13px;
    margin-left: 4px;
  }
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

.description {
  display: none;
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
    background-color: $pink;
  }

  &.active {
    &::after {
      visibility: hidden;
    }
  }
}
</style>
