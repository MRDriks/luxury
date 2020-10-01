<template>
  <section class="clients">
    <div class="container">
      <div class="clients-wrapper">
        <h2 class="section-h-white">Happy Clients</h2>
        <div class="swiper-container clients-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <blockquote>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose.
                </p>
                <footer>
                  <div class="avatar"></div>
                  <cite>DR. John Snow</cite>
                  <img
                    src="@/assets/img/icons/star.png"
                    alt="Stars"
                    class="stars-icon"
                  />
                </footer>
              </blockquote>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';

export default {
  mounted() {
    new Swiper('.clients-slider', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/templates.scss';
@import '@/assets/scss/mixins.scss';

.clients {
  background: url('../assets/img/clients-bg.jpg') no-repeat center / cover;

  .swiper-button-prev,
  .swiper-button-next {
    color: #fffaf1;
  }

  h2 {
    text-align: center;
  }

  blockquote {
    width: 752px;
    margin: 25px auto 0;

    p {
      @include font($Sintony, 15px, 400, $white);
      text-align: center;
      line-height: 26px;
      position: relative;

      &::before,
      &::after {
        content: '';
        background: url('../assets/img/icons/open-quote.png') no-repeat;
        width: 25px;
        height: 18px;
        display: inline-block;
        position: absolute;
        left: -70px;
      }

      &::after {
        background: url('../assets/img/icons/close-quote.png') no-repeat;
        right: -70px;
        left: auto;
      }
    }

    cite {
      @include font($Sintony, 16px, 700, #fffaf1);
      text-transform: uppercase;
      font-style: normal;
      margin: 15px 0 8px;
    }

    .avatar {
      width: 67px;
      height: 67px;
      border-radius: 50%;
      background: url('../assets/img/client-avatar.jpg') top center no-repeat;
      border: 3px solid $white;
    }

    footer {
      @extend %column-center-aligment;
      margin-top: 25px;
    }
  }
}

.clients-wrapper {
  padding: 100px 0 95px;
}
</style>
