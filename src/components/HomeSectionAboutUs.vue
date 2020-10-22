<template>
  <section class="about">
    <div class="container">
      <div class="about-wrapper">
        <div class="text-content">
          <h2 class="section-h-black">About Restaurant</h2>
          <p class="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <router-link to="/luxury/chef" @click.native="scrollUp" class="btn"
            >read more</router-link
          >
          <img src="@/assets/img/award.png" alt="Award image" />
        </div>
        <div class="images-box">
          <div class="col col-1">
            <img src="@/assets/img/image-1.jpg" alt="Restaurant photo 1" />
            <img src="@/assets/img/image-2.jpg" alt="Restaurant photo 2" />
          </div>
          <div class="col col-2">
            <img src="@/assets/img/image-3.jpg" alt="Restaurant photo 3" />
            <img src="@/assets/img/image-4.jpg" alt="Restaurant photo 4" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.about-wrapper {
  display: flex;
  justify-content: space-between;
}

.text-content {
  width: 546px;
  margin-top: 125px;
  position: relative;

  p {
    margin: 40px 0 70px;
  }
  a {
    padding: 16px 35px;
  }

  img {
    position: absolute;
    right: 0px;
    bottom: 65px;
  }
}
.images-box {
  display: flex;

  .col {
    display: flex;
    flex-direction: column;

    img:first-child {
      margin-bottom: 10px;
    }
  }

  .col-1 {
    margin: 116px 10px 100px 0;
  }

  .col-2 {
    margin-top: 66px;
  }
}
</style>
