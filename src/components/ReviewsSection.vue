<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews-wrapper">
        <div class="box">
          <img src="@/assets/img/icons/reviews.png" alt="Reviews icon" />
          <p class="delivery-text p-read">
            read <br />
            <span>reviews</span>
          </p>
          <a href="#" class="back-layout">
            <div class="btn-reviews">
              <img
                src="@/assets/img/icons/right-arrow.png"
                alt="Right arrow icon"
              />
            </div>
          </a>
        </div>
        <div class="box">
          <img src="@/assets/img/icons/phone-call.png" alt="Phone icon" />
          <p class="delivery-text p-call">
            call us now for <br />
            <span>home delivery</span>
          </p>
        </div>
        <div class="box">
          <p class="tel">1-008 005 006</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/templates.scss';
@import '@/assets/scss/mixins.scss';

.reviews {
  background-color: #edf1f3;
  border-bottom: 1px solid #dde3e7;
}

.reviews-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .box {
    display: flex;
    align-items: center;
    padding: 27px 0;

    &:first-child {
      border-right: 1px solid #dde3e7;
      padding-right: 37px;
    }

    &:nth-child(2) {
      padding: 0 25px 0 37px;
    }

    &:nth-child(3) {
      border-left: 1px solid #dde3e7;
      padding: 0 0 0 27px;
      height: 37px;
    }
  }

  .back-layout {
    width: 45px;
    height: 45px;
    border-radius: 22px;
    background-color: $orange;
    @extend %row-center-aligment;
  }

  .btn-reviews {
    width: 39px;
    height: 39px;
    border-radius: 19px;
    background-color: $orange;
    border: 1px solid $white;
    @extend %row-center-aligment;
  }

  .p-read {
    margin: 0 16px 0 13px;
  }

  .p-call {
    margin-left: 20px;
  }
}

.delivery-text {
  span {
    color: $orange;
  }
}
</style>
