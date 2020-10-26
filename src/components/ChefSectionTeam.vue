<template>
  <section class="chef-team">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-h-black">Chef Team</h2>
        <div class="cards">
          <div class="card" v-for="i in 8" :key="i">
            <img
              class="member-img"
              src="@/assets/img/member-photo.jpg"
              alt="Team member photo"
            />
            <div class="text-block">
              <h3 class="title">Cheff. james dico copy</h3>
            </div>
            <button @click="moreInfo($event)" class="btn-member"></button>
            <div class="more-info">
              <h3 class="title">Cheff. james dico copy</h3>
              <p class="description text">
                Survived not only five centuries, but also the leap into
                electronic typesetting
              </p>
              <div class="social">
                <a class="link" href="#" @click.prevent>
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="link" href="#" @click.prevent>
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="link" href="#" @click.prevent>
                  <i class="fab fa-google"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    moreInfo(event) {
      event.target.classList.toggle('active');
      event.target.offsetParent.classList.toggle('active');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.chef-team {
  background-color: #edf1f3;
}

.wrapper {
  padding: 100px 0;
}

.card {
  width: 270px;
  border: 1px solid #ebebeb;
  box-shadow: 0px 24px 19px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: 60px;
  background-color: #fff;

  &.active {
    .more-info {
      transform: rotateX(0deg);
    }
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.member-img {
  width: 100%;
  height: 262px;
}

.title {
  text-transform: uppercase;
  @include font($Sintony, 15px, 700, $dark-blue);
  text-align: center;
  margin: 20px 0 50px;
}

.btn-member {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: $orange;
  color: $white;
  position: absolute;
  bottom: -21.5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: background-color ease 0.3s;

  &::before,
  &::after {
    content: '';
    width: 14px;
    height: 2px;
    background-color: $white;
    display: inline-block;
    position: absolute;
    transition: all ease 0.3s;
  }

  &::after {
    transform: rotate(90deg);
  }

  &.active {
    background-color: $dark-blue;
  }

  &.active {
    &::after {
      transform: rotate(180deg);
    }
  }
}

.more-info {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fe5e98;
  z-index: 1;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  transform-origin: top center;
  transform: rotateX(90deg);

  .title {
    color: $white;
    margin: 60px 0 20px;
  }

  .description {
    color: $white;
    text-align: center;
    width: 190px;
    margin: 0 auto;
  }

  .social {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .link {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid $white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    transition: background-color ease 0.3s;

    i {
      color: $white;
      font-size: 18px;
      transition: color ease 0.3s;
    }

    &:hover {
      background-color: #fff;

      i {
        color: $dark-blue;
      }
    }
  }
}
</style>
