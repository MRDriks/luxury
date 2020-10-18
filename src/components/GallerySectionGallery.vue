<template>
  <section class="gallery">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-h-black">Our Gallery</h2>
        <div class="tabs">
          <button class="tab-link" active="true" @click="tabClick($event)">
            <i class="fas fa-camera"></i>
            All photos
          </button>
          <button class="tab-link" @click="tabClick($event)">
            <i class="fas fa-palette"></i>
            Restaurant
          </button>
          <button class="tab-link" @click="tabClick($event)">
            <i class="fas fa-utensils"></i>
            Food
          </button>
          <button class="tab-link" @click="tabClick($event)">
            <i class="fas fa-ice-cream"></i>
            Desserts
          </button>
        </div>
        <div class="images">
          <div class="row">
            <div class="col">
              <img src="@/assets/img/gallery-1.jpg" alt="Gallery photo 1" />
            </div>
            <div class="col">
              <img src="@/assets/img/gallery-2.jpg" alt="Gallery photo 2" />
            </div>
            <div class="col">
              <img src="@/assets/img/gallery-3.jpg" alt="Gallery photo 3" />
              <img src="@/assets/img/gallery-4.jpg" alt="Gallery photo 4" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img src="@/assets/img/gallery-5.jpg" alt="Gallery photo 5" />
            </div>
            <div class="col">
              <img src="@/assets/img/gallery-6.jpg" alt="Gallery photo 6" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img src="@/assets/img/gallery-9.jpg" alt="Gallery photo 7" />
              <img src="@/assets/img/gallery-10.jpg" alt="Gallery photo 8" />
            </div>
            <div class="col">
              <img src="@/assets/img/gallery-7.jpg" alt="Gallery photo 9" />
            </div>
            <div class="col">
              <img src="@/assets/img/gallery-8.jpg" alt="Gallery photo 10" />
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
    tabClick(event) {
      const elements = document.querySelectorAll('.tab-link');
      elements.forEach(item => item.removeAttribute('active'));
      event.target.setAttribute('active', 'true');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.wrapper {
  padding: 100px 0;
}

.section-h-black {
  text-align: center;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}

.tab-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include font($Playfair, 18px, 700, $dark-blue);
  padding: 0 25px;
  border-right: 1px solid #b7c1c6;
  transition-duration: 0.3s;
  background-color: transparent;

  &[active='true'] {
    color: $pink;

    i {
      color: $pink;
    }
  }

  &:last-child {
    border-right: none;
  }

  i {
    margin-bottom: 10px;
    color: $orange;
    transition-duration: 0.3s;
    font-size: 20px;
  }

  &:hover {
    color: $pink;

    i {
      color: $pink;
    }
  }
}

.row {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  &:first-child {
    margin-top: 45px;
  }
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    box-shadow: 5px 10px 15px grey;
  }
}
</style>
