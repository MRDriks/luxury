<template>
  <header class="header">
    <vue-topprogress ref="topProgress" color="#fe4c8d"></vue-topprogress>
    <div class="container">
      <nav class="nav-bar">
        <img src="@/assets/img/logo.png" alt="Brand logo" />
        <ul class="menu">
          <li>
            <router-link @click.native="scrollUp" to="/luxury" class="link"
              >home</router-link
            >
          </li>
          <li>
            <router-link @click.native="scrollUp" to="/luxury/menu" class="link"
              >menu</router-link
            >
          </li>
          <li>
            <router-link
              @click.native="scrollUp"
              to="/luxury/gallery"
              class="link"
              >gallery</router-link
            >
          </li>
          <li>
            <router-link @click.native="scrollUp" to="/luxury/chef" class="link"
              >chef</router-link
            >
          </li>
          <li>
            <router-link
              @click.native="scrollUp"
              to="/luxury/events"
              class="link"
              >events</router-link
            >
          </li>
          <li>
            <router-link @click.native="scrollUp" to="/luxury/shop" class="link"
              >shop</router-link
            >
          </li>
          <li>
            <router-link
              @click.native="scrollUp"
              to="/luxury/contact"
              class="link"
              >contact</router-link
            >
          </li>
          <li>
            <div class="cart">
              <img src="@/assets/img/icons/cart.png" alt="Cart icon" />
              <img src="@/assets/img/icons/arrow.png" alt="Arrow icon" />
              <div class="counter">
                <span>{{ cart.counter }}</span>
              </div>
              <div class="cart-preview">
                <div class="item" v-for="item in cart.order" :key="item.id">
                  <img v-bind:src="item.image" alt="" />
                  <div class="text-content">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="description">{{ item.description }}</p>
                    <p class="price">{{ item.price }}</p>
                  </div>
                </div>
                <footer class="cart-preview-footer" v-if="cart.order.length">
                  <span class="total">Total: ${{ cart.totalPrice }}</span>
                  <router-link
                    @click.native="scrollUp"
                    to="/luxury/cart"
                    class="btn"
                    >To order</router-link
                  >
                </footer>
              </div>
            </div>
          </li>
          <li>
            <router-link
              @click.native="scrollUp"
              to="/luxury/reservation"
              class="link"
            >
              <div class="back-layout">
                <div class="btn btn-reserve">
                  <img src="@/assets/img/icons/plate.png" alt="Plate" />
                  <span>book your table</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import { vueTopprogress } from 'vue-top-progress';

export default {
  computed: mapState(['cart']),
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.$refs.topProgress.start();
      next();
    });
    const context = this;
    this.$router.afterEach(() => {
      setTimeout(() => {
        context.$refs.topProgress.done();
      }, 500);
    });
  },
  components: {
    vueTopprogress
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/kit.scss';

.header {
  padding: 22px 0 18px;
  position: sticky;
  width: 100%;
  background-color: #fff;
  z-index: 100;
  top: 0px;
  box-shadow: 0 0 8px grey;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: flex;
  align-items: center;

  li {
    margin-right: 32px;

    &:last-child {
      margin-right: 0;
    }
  }

  .cart {
    width: 42px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:hover {
      cursor: pointer;

      .cart-preview {
        visibility: visible;
        opacity: 1;
        transform: rotateX(0deg);
      }
    }
  }

  .cart-preview {
    position: absolute;
    width: 400px;
    height: 300px;
    background-color: $white;
    top: 25px;
    left: -350px;
    visibility: hidden;
    opacity: 0;
    transform: rotateX(-90deg);
    transition-duration: 0.5s;
    transform-origin: top center;
    border: 2px solid $orange;
    border-radius: 4px;
    cursor: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;

    .item {
      width: 100%;
      height: 125px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid $dark-blue;
      padding: 5px 0;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 5px;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin-top: 20px;
    }

    .description {
      padding: 10px 0 30px 0;
      width: 235px;
    }

    .price {
      font-size: 22px;
      text-align: right;
    }

    .cart-preview-footer {
      padding: 30px 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .total {
      @include font($Sintony, 16px, 600, $dark-blue);
    }

    .btn {
      padding: 15px 20px;
    }
  }

  .counter {
    position: absolute;
    top: 0;
    left: 15px;
    width: 18px;
    height: 18px;
    background-color: $pink;
    border-radius: 50%;
    @extend %row-center-aligment;

    span {
      @include font($Sintony, 11px, 700, $white);
    }
  }

  .back-layout {
    @extend %row-center-aligment;
    width: 199px;
    height: 47px;
    background-color: $orange;
    border-radius: 4px;
    padding: 3px;
  }

  .btn-reserve {
    border: 1px solid $white;
    padding: 11px 14px 11px 16px;
    width: 100%;
    height: 100%;

    img {
      margin-right: 14px;
    }
  }
}

.link {
  @include font($Sintony, 14px, 700, $default-blue);
  text-transform: uppercase;

  &[aria-current='page'] {
    color: $orange;
  }
}
</style>
