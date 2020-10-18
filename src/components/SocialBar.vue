<template>
  <div class="social">
    <a href="#" class="social-link">
      <img src="../assets/img/icons/facebook.png" alt="Facebook link" />
    </a>
    <a href="#" class="social-link">
      <img src="../assets/img/icons/twitter.png" alt="Twitter link" />
    </a>
    <a href="#" class="social-link">
      <img src="../assets/img/icons/google.png" alt="Google+ link" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.social {
  display: flex;

  .social-link {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    @extend %row-center-aligment;

    &:nth-child(1) {
      background-color: #3b5998;
    }

    &:nth-child(2) {
      background-color: #55acee;
      margin: 0 5px;
    }

    &:nth-child(3) {
      background-color: #dd4b39;
    }
  }
}
</style>
