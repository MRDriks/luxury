<template>
  <section class="get-in-touch">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-h-black">Get in touch</h2>
        <form class="message-form" @submit.prevent>
          <div class="row">
            <div class="input-wrapper">
              <input
                @blur="inputOnBlur($event)"
                @focus="inputOnFocus($event)"
                type="text"
                id="name"
                required
                autocomplete="off"
              />
              <label for="name">Name*</label>
              <i class="fas fa-user"></i>
            </div>
            <div class="input-wrapper">
              <input
                @blur="inputOnBlur($event)"
                @focus="inputOnFocus($event)"
                type="email"
                id="email"
                required
                autocomplete="off"
              />
              <label for="email">Email*</label>
              <i class="fas fa-envelope"></i>
            </div>
          </div>
          <div class="row">
            <div class="input-wrapper">
              <textarea
                @blur="inputOnBlur($event)"
                @focus="inputOnFocus($event)"
                type="text"
                id="message"
                required
                autocomplete="off"
                rows="7"
              />
              <label for="message">Message*</label>
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
export default {
  methods: {
    inputOnBlur(event) {
      let el = document.querySelector(`#${event.target.id} + label`);
      if (event.target.value !== '') {
        el.style.opacity = '0';
      } else {
        el.style.opacity = '1';
      }
    },
    inputOnFocus(event) {
      document.querySelector(`#${event.target.id} + label`).style.opacity = '1';
    }
  }
};
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
  transition: border-bottom ease 0.3s;
}

input:focus,
textarea:focus {
  border-bottom: 1px solid $orange;

  & + label {
    top: -10px;
    left: 0;
  }

  & ~ i {
    color: $orange;
  }
}

textarea:focus {
  & + label {
    top: -25px;
  }
}

label {
  @include font($Sintony, 14px, 400, #363d43);
  transition: all ease 0.5s;
  position: absolute;
  top: 35%;
  left: 30px;
}

textarea {
  width: 100%;
  padding: 0 0 0 30px;

  & + label {
    top: 0;
  }
}

.row {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  &:nth-child(2) {
    i {
      top: 0;
    }
  }
}

.input-wrapper {
  position: relative;
  width: 100%;

  i {
    position: absolute;
    left: 0;
    top: 15px;
    font-size: 18px;
    transition: all ease 0.5s;
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
