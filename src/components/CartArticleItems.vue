<template>
  <article>
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
          <td class="input-td">
            <button class="btn-increment" @click="quantityIncrement(item.id)">
              <i class="fas fa-plus"></i>
            </button>
            <div class="quantity-box">
              <p class="quantity">{{ item.quantity }}</p>
            </div>
            <button class="btn-decrement" @click="quantityDecrement(item.id)">
              <i class="fas fa-minus"></i>
            </button>
          </td>
          <td>
            <p class="subtotal">$ {{ item.price * item.quantity }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['cart']),
  methods: {
    deletePosition(id) {
      this.$store.dispatch('removeFromCart', id);
    },
    quantityIncrement(id) {
      const data = {
        id,
        action: 'increment'
      };
      this.$store.dispatch('updateQuantity', data);
    },
    quantityDecrement(id) {
      const el = document.querySelector('.quantity');
      if (el.textContent !== '1') {
        const data = {
          id,
          action: 'decrement'
        };
        this.$store.dispatch('updateQuantity', data);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.products-table {
  width: 870px;
  border-collapse: collapse;

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

  .quantity-box {
    width: 60px;
    height: 40px;
    background-color: $white;
    border: 1px solid #e4e4e4;
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
.subtotal {
  @include font($Sintony, 15px, 700, $dark-blue);
  text-transform: uppercase;
}

.quantity-box {
  display: flex;
  justify-content: center;
  align-items: center;
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

.btn-increment,
.btn-decrement {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: $white;
    font-size: 13px;
  }
}

.btn-increment {
  margin-left: 17.5px;
  margin-bottom: 10px;
  background-color: #8bc34a;
}

.btn-decrement {
  margin-left: 17.5px;
  margin-top: 10px;
  background-color: #f44336;
}
</style>
