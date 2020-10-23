<template>
  <section class="product-cart">
    <div class="container">
      <div class="wrapper">
        <h2 class="section-h-black">Product Cart</h2>
        <table class="products-table">
          <thead>
            <tr>
              <td class="section-h-black">Item</td>
              <td class="section-h-black">Price</td>
              <td class="section-h-black">Qty</td>
              <td class="section-h-black">Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.order" :key="item.id">
              <td>
                <img class="item-img" :src="item.image" alt="Position image" />
                <p class="title">{{ item.title }}</p>
                <button class="btn-delete" @click="deletePosition(item.id)">
                  <i class="fas fa-times"></i>
                </button>
              </td>
              <td>
                <p class="price">$ {{ item.price }}</p>
              </td>
              <td>
                <input type="number" v-model="quantity" />
              </td>
              <td>
                <p class="subtotal">$ {{ item.price * quantity }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      quantity: 1
    };
  },
  computed: mapState(['cart']),
  methods: {
    deletePosition(id) {
      this.$store.dispatch('removeFromCart', id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.wrapper {
  padding: 100px 0;
}

.products-table {
  width: 870px;
  border-collapse: collapse;
  margin-top: 30px;

  td:nth-child(1) {
    width: 400px;
    position: relative;
  }

  td:nth-child(2) {
    width: 140px;
  }

  td:nth-child(3) {
    width: 160px;
  }

  td:nth-child(4) {
    width: 170px;
  }

  td {
    border-bottom: 1px solid #e4e4e4;
  }

  .section-h-black {
    font-size: 22px;
  }

  thead {
    td {
      padding-bottom: 10px;
    }
  }

  tbody {
    td {
      padding: 20px 0;

      &:first-child {
        display: flex;
        align-items: center;
      }
    }
  }

  input {
    width: 60px;
    height: 40px;
    background-color: $white;
    border: 1px solid #e4e4e4;
    text-align: center;
  }
}

.item-img {
  width: 115px;
  height: 115px;
  position: relative;
}

.title,
.price,
.quantity,
.subtotal,
input {
  @include font($Sintony, 15px, 700, $dark-blue);
  text-transform: uppercase;
}

.title {
  margin-left: 25px;
}

.btn-delete {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #fd4d36;
  position: absolute;
  top: 5px;
  left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: $white;
  }
}
</style>
