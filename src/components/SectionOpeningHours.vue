<template>
  <section class="opening-hours">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-h-black">Opening Hours</h2>
        <div class="block">
          <div class="box">
            <p class="day">Monday to Friday</p>
            <p class="time">10am - 10pm</p>
          </div>
          <div class="box">
            <p class="day">Saturday to Sunday</p>
            <p class="time">09am - 11pm</p>
          </div>
        </div>
      </div>
      <img
        class="decor-img"
        src="@/assets/img/decor-pasta.png"
        alt="Food decoration"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.wrapper {
  width: 810px;
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container {
  position: relative;
}

.block {
  display: flex;
}

.box:first-child {
  margin-right: 60px;
}

.day {
  @include font($Playfair, 20px, 400, #373844);
  font-style: italic;
}

.time {
  @include font($Playfair, 30px, 700, $orange);
}

.decor-img {
  width: 210px;
  height: 210px;
  position: absolute;
  right: 0;
  top: -40px;
}
</style>
