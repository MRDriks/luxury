<template>
  <section class="reserve">
    <div class="container">
      <div class="reserve-wrapper">
        <h2 class="section-h-black">Reserve your table</h2>
        <div class="content">
          <img src="@/assets/img/reserve-img.jpg" alt="Restaurant image" />
          <form class="reservation-form" @submit.prevent>
            <div class="form-body">
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
                <label for="time">Time*</label>
                <i class="fas fa-clock"></i>
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
                <label for="email">Email Address*</label>
                <i class="fas fa-envelope"></i>
              </div>
              <div class="input-wrapper">
                <input
                  @blur="inputOnBlur($event)"
                  @focus="inputOnFocus($event)"
                  type="number"
                  id="guests"
                  min="0"
                  max="50"
                  required
                  autocomplete="off"
                />
                <label for="guests">Guests*</label>
                <i class="fas fa-users"></i>
              </div>
              <div class="input-wrapper">
                <input
                  @blur="inputOnBlur($event)"
                  @focus="inputOnFocus($event)"
                  type="tel"
                  id="phone"
                  min="8"
                  max="15"
                  pattern="[0-9]{8,15}"
                  required
                  autocomplete="off"
                />
                <label for="phone">Phone Number*</label>
                <i class="fas fa-mobile-alt"></i>
              </div>
            </div>
            <div class="form-footer">
              <button href="#" class="btn">Make reservation</button>
              <p class="delivery-text">
                You can also call
                <br />
                <span>for a reservation</span>
              </p>
              <a href="tel:1077000005" class="tel">1-007 000 005</a>
            </div>
          </form>
        </div>
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

.reserve {
  background-color: #edf1f3;
}

.reserve-wrapper {
  padding: 100px 0;

  h2 {
    text-align: center;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
  }

  img {
    box-shadow: 2px 2px 10px #000;
    width: 559px;
    height: 334px;
  }
}

.reservation-form {
  width: 575px;

  .form-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    input {
      width: 270px;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #c7d1d6;
      padding: 15px 20px 15px 0;
      margin: 5px 0 20px;
      @include font($Sintony, 15px, 400, $dark-blue);
      transition: border-bottom ease 0.3s;
    }

    label {
      @include font($Sintony, 14px, 400, #363d43);
      transition: all ease 0.5s;
    }

    input:focus {
      border-bottom: 1px solid $orange;

      & + label {
        top: -10px;
      }
    }

    label {
      position: absolute;
      top: 35%;
      left: 0;
    }
  }

  .input-wrapper {
    position: relative;

    i {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
    }
  }

  .form-footer {
    display: flex;
    align-items: center;
    margin-top: 40px;
  }

  .btn {
    padding: 16px 30px;
  }

  .delivery-text {
    border-right: 1px solid #e1e1e1;
    padding: 0 15px 0 40px;
    font-size: 13px;
  }

  .tel {
    margin-left: 18px;
    font-size: 24px;
  }
}
</style>
