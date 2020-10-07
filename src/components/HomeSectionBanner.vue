<template>
  <section class="banner">
    <div class="image-container">
      <div>
        <p>Explore food Menu</p>
        <img src="@/assets/img/note.png" alt="Note" class="note-image" />
      </div>
    </div>
    <div class="swiper-container banner-slider">
      <div class="swiper-pagination"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="first-slide">
            <div class="container">
              <div class="banner-wrapper">
                <h1>
                  Teast your fav dish
                  <span class="lower"
                    >from
                    <span class="orange-color">luxury restaurant.</span></span
                  >
                </h1>
                <img src="@/assets/img/slide-pizza.png" alt="Pizza" />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="first-slide">
            <div class="container">
              <div class="banner-wrapper">
                <h1>
                  Teast your fav dish
                  <span class="lower"
                    >from
                    <span class="orange-color">luxury restaurant.</span></span
                  >
                </h1>
                <img src="@/assets/img/slide-pasta.png" alt="Pasta" />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="first-slide">
            <div class="container">
              <div class="banner-wrapper">
                <h1>
                  Teast your fav dish
                  <span class="lower"
                    >from
                    <span class="orange-color">luxury restaurant.</span></span
                  >
                </h1>
                <img
                  src="@/assets/img/slide-korean-food.png"
                  alt="Korean food"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/bundle';

export default {
  mounted() {
    new Swiper('.banner-slider', {
      direction: 'vertical',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 7000
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.banner {
  .container {
    position: relative;
    z-index: 10;
  }

  .swiper-container {
    width: 100%;
    height: 570px;
  }

  .swiper-container-vertical > .swiper-pagination-bullets {
    top: 50%;
    left: 29px;
  }

  h1 {
    @include font($Playfair, 56px, 700, $white);
    width: 480px;

    .orange-color {
      color: $orange;
    }

    .lower {
      font-size: 40px;
    }
  }

  .first-slide {
    background-image: url('../assets/img/texture.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 570px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 5;
    }

    img {
      width: 400px;
      height: 400px;
    }
  }
}

.image-container {
  position: absolute;
  top: 500px;
  @extend %container-center-aligment;
  height: auto;
  z-index: 10;

  div {
    display: inline-flex;
    justify-content: center;
  }

  p {
    @include font($Playfair, 22px, 400, $white);
    width: 110px;
    position: absolute;
    text-align: center;
    top: 110px;
  }
}

.banner-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
</style>
