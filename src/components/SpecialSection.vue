<template>
  <section class="special">
    <div class="wallpaper"></div>
    <div class="content">
      <h2 class="section-h-white">Today Special</h2>
      <div class="cards-box">
        <div class="card">
          <div class="card-header">
            <img src="@/assets/img/pizza-presentation.jpg" alt="Pizza" />
          </div>
          <div class="card-body">
            <h3 class="block-h-black">Food Name one</h3>
            <p class="text">
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled.
            </p>
          </div>
          <div class="card-footer">
            <p class="delivery-text">
              home <br />
              <span>delivery</span>
            </p>
            <p class="tel">1-008 005 006</p>
            <p class="price"><sup>$</sup>89.00</p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <img src="@/assets/img/beef-presentation.jpg" alt="Beef" />
          </div>
          <div class="card-body">
            <h3 class="block-h-black">Food Name two</h3>
            <p class="text">
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled.
            </p>
          </div>
          <div class="card-footer">
            <p class="delivery-text">
              home <br />
              <span>delivery</span>
            </p>
            <p class="tel">1-008 005 006</p>
            <p class="price"><sup>$</sup>99.00</p>
          </div>
        </div>
        <img src="@/assets/img/decor-pizza.png" alt="" class="decor-pizza" />
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

export default {
    mounted() {
        new Swiper('.swiper-container', {

        });
    }
};
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/templates.scss';
@import '@/assets/scss/mixins.scss';

.wallpaper {
  width: 100%;
  height: 440px;
  background-image: url('../assets/img/special-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
}

.special {
  position: relative;
  padding-bottom: 550px;

  .content {
    width: $content-size;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);

    .section-h-white {
      text-align: center;
      margin-bottom: 34px;
    }
  }

  .decor-pizza {
    position: absolute;
    right: -65px;
    bottom: -125px;
    z-index: 5;
    width: 200px;
  }
}

.cards-box {
  display: flex;
  justify-content: space-between;
}

.card {
  width: 569px;
  @extend %column-center-aligment;
  box-shadow: 0px 24px 19px rgba(0, 0, 0, 0.09);
  background-color: $white;
  position: relative;
  z-index: 10;
}

.card-header {
  img {
    width: 569px;
    height: 420px;
  }
}

.card-body {
  @extend %column-center-aligment;

  .block-h-black {
    margin: 50px 0 22px;
  }

  .text {
    width: 416px;
    text-align: center;
    margin-bottom: 52px;
  }
}

.card-footer {
  width: 473px;
  border-top: 1px solid #e1e1e1;
  display: flex;
  padding: 18px 0 29px;

  .tel {
    font-size: 26px;
    border-left: 1px solid #e1e1e1;
    padding-left: 18px;
  }

  .delivery-text {
    font-size: 13px;
    margin-right: 18px;
  }

  .price {
    margin-left: auto;
  }
}
</style>
