<template>
  <section class="details">
    <div class="container">
      <div class="details-wrapper">
        <h2 class="section-h-black">Contact Details</h2>
        <div class="box">
          <div class="item">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p class="text">
              Luxury Restaurent <br />
              California Second Street 2nd floor
            </p>
          </div>
          <div class="item">
            <i class="fas fa-phone-alt"></i>
            <h3>Phone</h3>
            <p class="text">+91 855 558 659</p>
            <h3 class="email-header">Email:</h3>
            <a href="mailto:info@luxury.com" class="text email-text"
              >info@luxury.com</a
            >
          </div>
          <div class="item">
            <i class="fas fa-share-alt"></i>
            <h3>Follow us</h3>
            <SocialBar />
          </div>
        </div>
        <img src="../assets/img/contact-img.jpg" alt="" />
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

h3 {
  @include font($Sintony, 16px, 700, $dark-blue);
  text-transform: uppercase;
  margin: 20px 0 10px;
}

.item {
  i {
    font-size: 25px;
  }
}

.social {
  /deep/ .social-link {
    width: 42px;
    height: 42px;
  }
}

.details-wrapper {
  margin: 100px 0;
  position: relative;

  img {
    position: absolute;
    right: 0;
    top: 0;
    box-shadow: 8px 10px 8px grey;
    border-radius: 5px;
  }
}

.box {
  width: 740px;
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
}

.item:nth-child(1) {
  width: 195px;
}

.item:nth-child(2) {
  width: 200px;
}

.item:nth-child(3) {
  width: 140px;
}

.text {
  font-size: 16px;
}

.email-header,
.email-text {
  display: inline-block;
}

.email-text {
  margin-left: 10px;
}
</style>
