<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="row">
          <nav class="navigation">
            <h2>Navigation</h2>
            <ul>
              <li>
                <router-link @click.native="scrollUp" to="/luxury"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link @click.native="scrollUp" to="/luxury/menu"
                  >Menu</router-link
                >
              </li>
              <li>
                <router-link @click.native="scrollUp" to="/luxury/gallery"
                  >Gallery</router-link
                >
              </li>
              <li>
                <router-link @click.native="scrollUp" to="/luxury/chef"
                  >Chef</router-link
                >
              </li>
              <li>
                <router-link @click.native="scrollUp" to="/luxury/events"
                  >Events</router-link
                >
              </li>
              <li>
                <router-link @click.native="scrollUp" to="/luxury/shop"
                  >Shop</router-link
                >
              </li>
              <li>
                <router-link @click.native="scrollUp" to="/luxury/contact"
                  >Contact</router-link
                >
              </li>
            </ul>
          </nav>
          <div class="news-letter">
            <h2>News letter</h2>
            <form class="news-letter-form" @submit.prevent>
              <label for="email_field"
                >Enter your email address and subscribe daily newsletter</label
              >
              <div class="send-email">
                <input
                  type="email"
                  id="email_field"
                  placeholder="Email Address"
                  required
                />
                <button class="btn">subscribe</button>
              </div>
            </form>
            <SocialBar />
          </div>
          <div class="app">
            <h2>Our app available</h2>
            <a href="#" class="store-link apple-store" @click.prevent>
              <img src="../assets/img/icons/apple.png" alt="App Store" />
              <p>Available on the <span>App Store</span></p>
            </a>
            <a href="#" class="store-link google-play" @click.prevent>
              <img
                src="../assets/img/icons/google-play.png"
                alt="Google Play"
              />
              <p>Get it on <span>Google Play</span></p>
            </a>
          </div>
        </div>
        <div class="rights">
          <p>
            2020 &copy; <a href="/luxury">Luxury restaurant</a>, all rights
            reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialBar from '@/components/SocialBar';

export default {
  components: {
    SocialBar
  },
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

<style lang="scss">
@import '@/assets/scss/kit.scss';

.footer {
  background-color: $dark-grey;
  padding: 102px 0 70px;

  h2 {
    @include font($Playfair, 24px, 700, $white);
  }

  ul {
    margin-top: 38px;

    li {
      margin-bottom: 18px;

      &:last-child {
        margin-bottom: 0;
      }

      a:hover {
        transition: color ease 0.3s;
        color: #ededed;
      }
    }
  }

  a,
  label {
    @include font($Sintony, 14px, 400, $light-grey);
  }

  .row {
    display: flex;
    justify-content: space-between;
  }
}

.send-email {
  display: flex;
  margin: 20px 0 37px;
}

.news-letter-form {
  display: flex;
  flex-direction: column;
  margin-top: 38px;

  input {
    width: 311px;
    height: 51px;
    border: 2px solid #52535e;
    background-color: transparent;
    @include font($Sintony, 14px, 400, $white);
    border-radius: 4px;
    background: url('../assets/img/icons/email.png') no-repeat 13px 18px;
    padding-left: 48px;
    margin-right: 9px;

    &::placeholder {
      @include font($Sintony, 14px, 400, $white);
    }
  }

  button {
    width: 149px;
    height: 51px;
  }
}

.store-link {
  width: 219px;
  height: 61px;
  background-color: #52535e;
  display: flex;
  align-items: center;
  border-radius: 4px;

  img {
    margin: 0 20px;
    transition: transform 0.5s;
  }

  p {
    @include font($Sintony, 11px, 400, #edf1f3);
    width: 100px;
    line-height: 20px;
    transition: margin-left 0.5s;
  }

  span {
    font-size: 17px;
  }

  &:hover {
    img {
      transform: rotateX(360deg);
    }

    p {
      margin-left: 15px;
    }
  }
}

.apple-store {
  margin: 38px 0 12px;
}

.rights {
  @include font($Sintony, 13px, 400, #adb2b7);
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;

  &::before,
  &::after {
    content: '';
    width: 30%;
    height: 1px;
    background-color: #52535e;
  }

  a {
    color: $white;
  }

  p {
    width: 380px;
    margin: 0 30px;
  }
}
</style>
