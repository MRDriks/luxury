<template>
  <section class="get-in-touch">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-h-black">Get in touch</h2>
        <form class="message-form">
          <div class="row">
            <div class="input-wrapper">
              <input type="text" placeholder="Name*" />
              <i class="fas fa-user"></i>
            </div>
            <div class="input-wrapper">
              <input type="email" placeholder="Email*" />
              <i class="fas fa-envelope"></i>
            </div>
          </div>
          <div class="row">
            <div class="input-wrapper">
              <textarea rows="7" placeholder="Message*"></textarea>
              <i class="fas fa-comments"></i>
            </div>
          </div>
          <button class="btn btn-send">Send Now</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.get-in-touch {
  background-color: #edf1f3;
}

input,
textarea {
  width: 340px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #c7d1d6;
  padding: 15px 0 15px 30px;
  @include font($Sintony, 15px, 400, $dark-blue);
}

textarea {
  width: 100%;
  padding: 0 0 0 30px;
}

.row {
  display: flex;
  justify-content: space-between;

  &:first-child {
    margin-top: 20px;
  }

  &:nth-child(2) {
    margin-top: 50px;

    i {
      top: 0;
    }
  }
}

input::placeholder,
textarea::placeholder {
  @include font($Sintony, 14px, 400, #363d43);
}

.input-wrapper {
  position: relative;
  width: 100%;

  i {
    position: absolute;
    left: 0;
    top: 15px;
    font-size: 18px;
  }
}

.wrapper {
  padding: 100px 0;
}

.message-form {
  width: 740px;
}

.btn-send {
  padding: 15px 45px;
  margin-top: 30px;
}
</style>
