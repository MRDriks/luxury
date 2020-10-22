<template>
  <section class="table-reserve">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-h-black">Book a Table</h2>
        <p class="text">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <form class="reservation-form" @submit.prevent>
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
              type="text"
              id="email"
              required
              autocomplete="off"
            />
            <label for="email">Email Address*</label>
            <i class="fas fa-envelope"></i>
          </div>
          <div class="input-wrapper">
            <input
              @blur="inputOnBlur($event)"
              @focus="inputOnFocus($event)"
              type="text"
              id="phone"
              required
              autocomplete="off"
            />
            <label for="phone">Phone Number*</label>
            <i class="fas fa-mobile-alt"></i>
          </div>
          <div class="input-wrapper">
            <input
              @blur="inputOnBlur($event)"
              @focus="inputOnFocus($event)"
              type="text"
              id="date"
              required
              autocomplete="off"
            />
            <label for="date">Date*</label>
            <i class="fas fa-calendar-alt"></i>
          </div>
          <div class="input-wrapper">
            <input
              @blur="inputOnBlur($event)"
              @focus="inputOnFocus($event)"
              type="text"
              id="time"
              required
              autocomplete="off"
            />
            <label for="name">Time*</label>
            <i class="fas fa-clock"></i>
          </div>
          <div class="input-wrapper">
            <input
              @blur="inputOnBlur($event)"
              @focus="inputOnFocus($event)"
              type="text"
              id="guests"
              required
              autocomplete="off"
            />
            <label for="guests">Guests*</label>
            <i class="fas fa-users"></i>
          </div>
          <div class="row">
            <div class="input-wrapper">
              <textarea rows="5" placeholder="Special Requirments*"></textarea>
              <i class="fas fa-comments"></i>
            </div>
            <button class="btn btn-reservation">Make reservation</button>
          </div>
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

.wrapper {
  padding: 100px 0;
}

.section-h-black,
.text {
  text-align: center;
}

.text {
  width: 690px;
  margin: 40px auto 40px;
}

.reservation-form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input,
  textarea {
    width: 370px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #c7d1d6;
    padding: 15px 0 15px 30px;
    @include font($Sintony, 15px, 400, $dark-blue);
  }

  textarea {
    width: 100%;
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

  .input-wrapper {
    position: relative;
    margin: 10px 0;

    &:last-child {
      width: 100%;
    }

    i {
      position: absolute;
      left: 0;
      top: 15px;
      font-size: 18px;
    }
  }
}

.btn-reservation {
  padding: 15px 35px;
  margin-top: 35px;
}

.row {
  width: 100%;
  text-align: center;
}
</style>
