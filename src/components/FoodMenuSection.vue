<template>
  <section class="food-menu">
    <h2 class="section-h-black">Food Menu</h2>
    <ul data-tabs class="tablist">
      <li>
        <a data-tabby-default href="#all">
          <i class="fas fa-receipt"></i>
          All
        </a>
      </li>
      <li>
        <a href="#breakfast">
          <i class="fas fa-mug-hot"></i>
          Breakfast
        </a>
      </li>
      <li>
        <a href="#lunch">
          <i class="fas fa-utensils"></i>
          Lunch
        </a>
      </li>
      <li>
        <a href="#snacks">
          <i class="fas fa-ice-cream"></i>
          Snacks
        </a>
      </li>
      <li>
        <a href="#pizza">
          <i class="fas fa-pizza-slice"></i>
          Pizza
        </a>
      </li>
      <li>
        <a href="#soups">
          <i class="fas fa-concierge-bell"></i>
          Soups
        </a>
      </li>
      <li>
        <a href="#dinner">
          <i class="fas fa-fish"></i>
          Dinner
        </a>
      </li>
    </ul>
    <div class="container">
      <div id="all">
        <div class="tab">
          <div
            class="position"
            v-for="position in menu.all"
            v-bind:key="position.id"
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
      </div>
      <div id="breakfast">
        <div class="tab">
          <div
            class="position"
            v-for="position in menu.breakfast"
            v-bind:key="position.id"
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
      </div>
      <div id="lunch">
        <div class="tab">
          <div
            class="position"
            v-for="position in menu.lunch"
            v-bind:key="position.id"
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
      </div>
      <div id="snacks">
        <div class="tab">
          <div
            class="position"
            v-for="position in menu.snacks"
            v-bind:key="position.id"
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
      </div>
      <div id="pizza">
        <div class="tab">
          <div
            class="position"
            v-for="position in menu.pizza"
            v-bind:key="position.id"
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
      </div>
      <div id="soups">
        <div class="tab">
          <div
            class="position"
            v-for="position in menu.soups"
            v-bind:key="position.id"
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
      </div>
      <div id="dinner">
        <div class="tab">
          <div
            class="position"
            v-for="position in menu.dinner"
            v-bind:key="position.id"
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
      </div>
      <img
        src="@/assets/img/decor-ciabatta.png"
        alt="Decoration ciabatta"
        class="decor-ciabatta"
      />
    </div>
    <div class="btn-row">
      <a href="#" class="btn btn-explore">Explore food menu</a>
    </div>
  </section>
</template>

<script>
import Tabby from 'tabbyjs';
import menu from '@/db/menu-db';

export default {
  data() {
    return {
      menu
    };
  },
  mounted() {
    new Tabby('[data-tabs]');
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/templates.scss';
@import '@/assets/scss/mixins.scss';

.food-menu {
  h2 {
    text-align: center;
  }

  .container {
    position: relative;
  }
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

  a {
    @include font($Playfair, 20px, 700, $dark-blue);
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    i {
      color: $orange;
      font-size: 20px;
      margin-bottom: 10px;
    }

    &[aria-selected='true'] {
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

.btn-explore {
  padding: 16px 30px;
}

.btn-row {
  text-align: center;
  margin-bottom: 120px;
}
</style>
