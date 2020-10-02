<template>
  <section class="reserve">  
    <div class="container">
      <div class="reserve-wrapper">
        <h2 class="section-h-black">Reserve your table</h2>
        <div class="content">
          <img src="@/assets/img/reserve-img.jpg" alt="Restaurant image">
          <form class="reservation-form">
            <div class="form-body">
              <div class="input-wrapper">
                <input type="text" placeholder="Name*" required>
                <i class="fas fa-user"></i>
              </div>
              <div class="input-wrapper">
                <input type="text" placeholder="Date*" required>
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="input-wrapper">
                <input type="text" placeholder="Time*" required>
                <i class="fas fa-clock"></i>
              </div>
              <div class="input-wrapper">
                <input type="email" placeholder="Email Address*" required>
                <i class="fas fa-envelope"></i>
              </div>
              <div class="input-wrapper">
                <input type="number" placeholder="Guests*" required>
                <i class="fas fa-users"></i>
              </div>
              <div class="input-wrapper">
                <input type="tel" placeholder="Phone Number*" required>
                <i class="fas fa-mobile-alt"></i>
              </div>
            </div>
            <div class="form-footer">
              <button href="#" class="btn">Make reservation</button>
              <p class="delivery-text">
                You can also call 
                <br>
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

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/templates.scss';
@import '@/assets/scss/mixins.scss';

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
    margin-top: 38px;
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
      margin: 5px 0 5px;
      @include font($Sintony, 15px, 400, $dark-blue);
    }

    input::placeholder {
      @include font($Sintony, 14px, 400, #363d43);
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