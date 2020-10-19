<template>
  <section class="events">
    <div class="container">
      <div class="wrapper">
        <div class="event" v-for="i in 4" :key="i">
          <div class="back-layout">
            <div class="date">
              <p class="day">08</p>
              <p class="month">nov</p>
              <p class="year">2020</p>
            </div>
          </div>
          <img
            class="event-img"
            src="@/assets/img/event-img.jpg"
            alt="Event image"
          />
          <div class="text-content">
            <h2 class="section-h-black title">Event Heading Here</h2>
            <span class="section-h-black time">
              <i class="far fa-clock"></i>
              7.00 pm - 10.00 pm
            </span>
            <p class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <button class="btn btn-details">View event details</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.wrapper {
  padding: 20px 0 100px;
}

.title {
  margin: 20px 0 15px;
}

.event {
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
}

.event-img {
  width: 579px;
  height: 340px;
  box-shadow: 0 10px 20px 0px grey;
}

.text-content {
  width: 400px;
}

.back-layout {
  width: 87px;
  height: 102px;
  background-color: $orange;
  padding: 4px;
}

.date {
  border: 1px solid $white;
  padding: 10px 18px;
  width: 100%;
  height: 100%;

  .day,
  .month,
  .year {
    @include font($Sintony, 15px, 700, $white);
    text-align: center;
    text-transform: uppercase;
  }

  .month {
    margin: 8px 0 5px;
  }

  .day {
    font-size: 32px;
  }
}

.time {
  font-size: 22px;

  i {
    color: $orange;
    font-size: 18px;
  }
}

.text {
  margin: 25px 0 50px;
}

.btn-details {
  background-color: #ffeac5;
  color: #d38a0c;
  padding: 15px 25px;
}
</style>
