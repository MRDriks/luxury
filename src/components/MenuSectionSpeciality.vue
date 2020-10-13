<template>
  <section class="speciality">
    <img src="@/assets/img/menu-speciality-img.jpg" alt="" />
    <div class="right-side">
      <div class="text-content">
        <h2 class="section-h-black">Speciality</h2>
        <div class="box">
          <h3>Excellent Service</h3>
          <p class="text">
            Survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div class="box">
          <h3>Free Home Delivery</h3>
          <p class="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div class="box">
          <h3>Cool Atmosphere</h3>
          <p class="text">
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.speciality {
  display: flex;

  img {
    width: 50%;
    height: 572px;
  }
}

.right-side {
  background-color: #ecf1f4;
  width: 100%;
}

.text-content {
  width: 570px;
  margin: 65px 0 0 70px;
}

.box {
  margin-top: 45px;

  h3 {
    @include font($Sintony, 15px, 700, $dark-blue);
    text-transform: uppercase;
  }

  p {
    margin-top: 20px;
  }
}
</style>
