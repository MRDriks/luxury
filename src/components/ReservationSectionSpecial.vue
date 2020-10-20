<template>
  <section class="special">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-h-black">Special Reservation</h2>
        <div class="box">
          <div class="item" v-for="i in 3" :key="i">
            <img
              class="item-img"
              src="https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <div class="info">
              <h3 class="section-h-black item-h">Private Dinning</h3>
              <p class="text">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.special {
  background-color: #edf1f3;
}

.wrapper {
  padding: 100px 0;
}

.box {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.item {
  width: 370px;
  background-color: #fff;
  box-shadow: 0 0 20px 0 grey;
}

.item-img {
  width: 100%;
  height: 210px;
}

.info {
  width: 300px;
  padding: 30px 0 40px 35px;
}

.section-h-black {
  text-align: center;
}

.item-h {
  font-size: 26px;
  margin-bottom: 20px;
  text-align: left;
}
</style>
