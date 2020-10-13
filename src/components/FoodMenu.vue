<template>
  <div class="food-menu-block">
    <ul class="tablist">
      <li>
        <button
          class="btn-tab"
          v-on:click="tabClick($event)"
          id="all"
          active="true"
        >
          <i class="fas fa-receipt"></i>
          All
        </button>
      </li>
      <li>
        <button class="btn-tab" v-on:click="tabClick($event)" id="breakfast">
          <i class="fas fa-mug-hot"></i>
          Breakfast
        </button>
      </li>
      <li>
        <button class="btn-tab" v-on:click="tabClick($event)" id="lunch">
          <i class="fas fa-utensils"></i>
          Lunch
        </button>
      </li>
      <li>
        <button class="btn-tab" v-on:click="tabClick($event)" id="snacks">
          <i class="fas fa-ice-cream"></i>
          Snacks
        </button>
      </li>
      <li>
        <button class="btn-tab" v-on:click="tabClick($event)" id="pizza">
          <i class="fas fa-pizza-slice"></i>
          Pizza
        </button>
      </li>
      <li>
        <button class="btn-tab" v-on:click="tabClick($event)" id="soups">
          <i class="fas fa-concierge-bell"></i>
          Soups
        </button>
      </li>
      <li>
        <button class="btn-tab" v-on:click="tabClick($event)" id="dinner">
          <i class="fas fa-fish"></i>
          Dinner
        </button>
      </li>
    </ul>
    <div class="container">
      <div class="tab">
        <div
          class="position"
          v-for="position in products.menuByCategory"
          :key="position.id"
        >
          <div class="description">
            <p class="title">{{ position.title }}</p>
            <p class="text">
              {{ position.description }}
            </p>
          </div>
          <p class="price"><sup>$</sup>{{ position.price }}</p>
        </div>
      </div>
      <img
        src="@/assets/img/decor-ciabatta.png"
        alt="Decoration ciabatta"
        class="decor-ciabatta"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['products']),
  methods: {
    tabClick(event) {
      const category = event.target.id;
      const elements = document.querySelectorAll('.btn-tab');
      elements.forEach(item => item.removeAttribute('active'));
      event.target.setAttribute('active', 'true');
      this.$store.dispatch('setMenuCategory', category);
      this.$store.dispatch('getMenuByCategory');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.container {
  position: relative;
}

.decor-ciabatta {
  width: 241px;
  height: 241px;
  position: absolute;
  bottom: -315px;
  right: 37px;
}

.tab {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 50px 0 70px;
}

.tablist {
  display: flex;
  justify-content: center;
  border-bottom: 2px dotted #a3b0ba;
  margin-top: 40px;
  padding-bottom: 23px;

  li {
    margin: 0 25px;
  }

  button {
    @include font($Playfair, 20px, 700, $dark-blue);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;

    i {
      color: $orange;
      font-size: 20px;
      margin-bottom: 10px;
    }

    &[active='true'] {
      color: $pink;

      i {
        color: $pink;
      }
    }

    &:hover {
      color: $pink;

      i {
        color: $pink;
      }
    }
  }
}

.position {
  width: 570px;
  display: flex;
  justify-content: space-between;
  padding: 25px 0 23px;
  border-bottom: 1px solid #eeeeee;

  .title {
    @include font($Sintony, 16px, 700, $dark-blue);
    text-transform: uppercase;
  }

  .price {
    font-size: 26px;
    margin-right: 40px;
  }
}
</style>
