<template>
  <header class="header">
    <div class="container">
      <nav class="nav-bar">
        <img src="@/assets/img/logo.png" alt="Brand logo" />
        <ul class="menu">
          <li>
            <router-link to="/" class="link">home</router-link>
          </li>
          <li>
            <router-link to="/menu" class="link">menu</router-link>
          </li>
          <li>
            <router-link to="/reservation" class="link"
              >reservation</router-link
            >
          </li>
          <li>
            <router-link to="/recipe" class="link">recipe</router-link>
          </li>
          <li>
            <router-link to="/blog" class="link">blog</router-link>
          </li>
          <li>
            <router-link to="/pages" class="link">pages</router-link>
          </li>
          <li>
            <router-link to="/contact" class="link">contact</router-link>
          </li>
          <li>
            <div class="cart">
              <img src="@/assets/img/icons/cart.png" alt="Cart" />
              <img src="@/assets/img/icons/arrow.png" alt="Arrow" />
              <div class="counter">
                <span>0</span>
              </div>
            </div>
          </li>
          <li>
            <router-link to="/reservation" class="link">
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

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/templates.scss';
@import '@/assets/scss/mixins.scss';

.header {
  padding: 22px 0 18px;
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
}
</style>
