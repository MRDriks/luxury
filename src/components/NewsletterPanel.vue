<template>
  <div class="newsletter-panel">
    <div class="wrapper">
      <h3 class="title">Newsletter</h3>
      <p class="text">
        Lorem Ipsum is simply dummy text of the printing
      </p>
      <form class="email-form" @submit.prevent>
        <input
          class="email-field"
          type="email"
          placeholder="Email Address"
          autocomplete="off"
          required
        />
        <button class="btn btn-subscribe">Subscribe</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.newsletter-panel {
  width: 270px;
  background-color: #373844;
  padding: 7px;
}

.wrapper,
.email-form {
  @extend %column-center-aligment;
}

.wrapper {
  border: 3px solid #5f6069;
}

.title {
  @include font($Playfair, 24px, 700, $white);
  margin: 40px 0 20px;
}

.text {
  color: #bcbdc1;
  width: 185px;
  text-align: center;
  margin: 0 auto;
}

.email-form {
  margin: 30px 0 50px;
}

.email-field {
  width: 210px;
  height: 51px;
  border: 2px solid $white;
  border-radius: 4px;
  background-color: transparent;
  @include font($Sintony, 14px, 400, #e6e9eb);
  background: url('../assets/img/icons/email.png') no-repeat 13px 18px;
  padding-left: 48px;
  margin-bottom: 8px;

  &::placeholder {
    @include font($Sintony, 14px, 400, #e6e9eb);
  }
}

.btn-subscribe {
  padding: 16px 67px;
}
</style>
