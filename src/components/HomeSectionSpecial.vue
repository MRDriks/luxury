<template>
  <section class="special">
    <div class="wallpaper"></div>
    <div class="swiper-container special-slider">
      <div class="swiper-pagination"></div>
      <h2 class="section-h-white">Today Special</h2>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="content">
            <div class="cards-box">
              <div class="card">
                <div class="card-header">
                  <img src="@/assets/img/food-presentation-1.jpg" alt="Pizza" />
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
                  <a href="tel:1088055006" class="tel">1-008 005 006</a>
                  <p class="price"><sup>$</sup>89.00</p>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <img src="@/assets/img/food-presentation-4.jpg" alt="Beef" />
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
                  <a href="tel:1088055006" class="tel">1-008 005 006</a>
                  <p class="price"><sup>$</sup>99.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="content">
            <div class="cards-box">
              <div class="card">
                <div class="card-header">
                  <img src="@/assets/img/food-presentation-3.jpg" alt="Pizza" />
                </div>
                <div class="card-body">
                  <h3 class="block-h-black">Food Name three</h3>
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
                  <a href="tel:1088055006" class="tel">1-008 005 006</a>
                  <p class="price"><sup>$</sup>87.00</p>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <img src="@/assets/img/food-presentation-2.jpg" alt="Beef" />
                </div>
                <div class="card-body">
                  <h3 class="block-h-black">Food Name four</h3>
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
                  <a href="tel:1088055006" class="tel">1-008 005 006</a>
                  <p class="price"><sup>$</sup>69.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="content">
            <div class="cards-box">
              <div class="card">
                <div class="card-header">
                  <img src="@/assets/img/food-presentation-5.jpg" alt="Pizza" />
                </div>
                <div class="card-body">
                  <h3 class="block-h-black">Food Name five</h3>
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
                  <a href="tel:1088055006" class="tel">1-008 005 006</a>
                  <p class="price"><sup>$</sup>54.00</p>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <img src="@/assets/img/food-presentation-6.jpg" alt="Beef" />
                </div>
                <div class="card-body">
                  <h3 class="block-h-black">Food Name six</h3>
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
                  <a href="tel:1088055006" class="tel">1-008 005 006</a>
                  <p class="price"><sup>$</sup>75.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="@/assets/img/decor-pizza.png"
        alt="Decoration pizza"
        class="decor-pizza"
      />
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/bundle';

export default {
  mounted() {
    new Swiper('.special-slider', {
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 20000
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      spaceBetween: 100
    });
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

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
    @extend %container-center-aligment;
    position: absolute;
    top: 0;
    z-index: 10;
  }

  .decor-pizza {
    position: absolute;
    right: 10px;
    bottom: 0;
    z-index: 5;
    width: 200px;
  }

  .swiper-container {
    width: 100%;
    height: 990px;
    position: absolute;
    top: 0;

    .section-h-white {
      text-align: center;
      margin: 100px 0 34px;
    }
  }

  .swiper-wrapper {
    z-index: 10;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: auto;
    @extend %container-center-aligment;
    text-align: right;
    top: 120px;
  }

  .swiper-slide {
    height: 730px;
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
  border-radius: 10px;
}

.card-header {
  img {
    width: 569px;
    height: 420px;
    border-radius: 6px;
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
    margin-left: 18px;
  }

  .delivery-text {
    font-size: 13px;
    padding-right: 18px;
    border-right: 1px solid #e1e1e1;
  }

  .price {
    margin-left: auto;
  }
}
</style>
