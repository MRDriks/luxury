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
        <form class="reservation-form">
          <div class="input-wrapper">
            <input type="text" placeholder="Name*" required />
            <i class="fas fa-user"></i>
          </div>
          <div class="input-wrapper">
            <input type="email" placeholder="Email Address*" required />
            <i class="fas fa-envelope"></i>
          </div>
          <div class="input-wrapper">
            <input type="tel" placeholder="Phone Number*" required />
            <i class="fas fa-mobile-alt"></i>
          </div>
          <div class="input-wrapper">
            <input type="text" placeholder="Date*" required />
            <i class="fas fa-calendar-alt"></i>
          </div>
          <div class="input-wrapper">
            <input type="text" placeholder="Time*" required />
            <i class="fas fa-clock"></i>
          </div>
          <div class="input-wrapper">
            <input type="number" placeholder="Guests*" required />
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

  input::placeholder,
  textarea::placeholder {
    @include font($Sintony, 14px, 400, #363d43);
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
