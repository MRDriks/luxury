<template>
  <section class="head-chef">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-h-black">Head Chef</h2>
        <div class="chef-card">
          <img
            src="@/assets/img/chef-img.jpg"
            alt="Head Chef"
            class="chef-img"
          />
          <div class="info">
            <h3 class="section-h-black name">Chef. Manoj lal</h3>
            <p class="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy when
              an unknown printer.
            </p>
            <SocialBar />
            <h4 class="section-h-black expert">Expertise in</h4>
            <div class="skills">
              <span class="skill">
                <i class="fas fa-hotdog"></i>
                breakfast
              </span>
              <span class="skill">
                <i class="fas fa-pizza-slice"></i>
                starter
              </span>
              <span class="skill">
                <i class="fas fa-utensils"></i>
                lunch
              </span>
            </div>
          </div>
          <img
            class="decor-img"
            src="@/assets/img/chef-card-decor.png"
            alt="Card decoration"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialBar from '@/components/SocialBar';

export default {
  components: {
    SocialBar
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.wrapper {
  padding: 100px 0;
}

.chef-card {
  display: flex;
  position: relative;
  border: 1px solid #ebebeb;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.1);
  margin-top: 25px;
}

.chef-img {
  width: 569px;
  height: 395px;
}

.decor-img {
  position: absolute;
  right: 0;
  top: 0;
}

.info {
  width: 410px;
  padding-left: 45px;
}

.name {
  font-size: 22px;
  margin: 40px 0 20px;
}

/deep/.social {
  margin: 20px 0 40px;

  .social-link {
    width: 44px;
    height: 44px;
  }
}

.expert {
  font-size: 18px;
}

.skills {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 325px;
}

.skill {
  @include font($Sintony, 13px, 700, #5c6369);
  text-transform: uppercase;
  display: flex;
  align-items: center;

  i {
    color: $pink;
    font-size: 18px;
    margin-right: 10px;
  }
}
</style>
