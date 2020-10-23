<template>
  <aside class="side-bar">
    <div class="summary">
      <div class="summary-header">
        <h3 class="summary-title">Summary</h3>
        <p class="info">
          <span class="info-description">Subtotal</span>
          <span class="info-price">: ${{ cart.totalPrice }}</span>
        </p>
        <p class="info">
          <span class="info-description">Shipping cost</span>
          <span class="info-price">: ${{ cart.deliveryPrice }}</span>
        </p>
        <p class="info">
          <span class="info-description">Tax</span>
          <span class="info-price">: ${{ cart.tax }}</span>
        </p>
      </div>
      <div class="summary-footer">
        <p class="order-total">
          <span class="total-title">order total</span>
          <span class="total-price">: $ {{ cart.totalPrice + cart.tax }}</span>
        </p>
        <button class="btn btn-checkout">go to checkout</button>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['cart'])
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/kit.scss';

.summary {
  width: 270px;
  height: 383px;
  background-color: $pink;
  padding: 10px;
}

.summary-header,
.summary-footer {
  border: 1px dashed $white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.summary-title {
  @include font($Playfair, 22px, 700, $white);
  margin: 30px 0 20px;
}

.info {
  width: 200px;
  display: flex;
  justify-content: space-between;

  &:nth-child(3) {
    margin: 10px 0;
  }

  &:nth-child(4) {
    margin-bottom: 25px;
  }
}

.info-description,
.info-price {
  @include font($Sintony, 15px, 400, #ffdeea);
}

.order-total {
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 25px 0 35px;
}

.total-title,
.total-price {
  @include font($Sintony, 15px, 700, $white);
  text-transform: uppercase;
}

.btn-checkout {
  padding: 15px 40px;
  margin-bottom: 75px;
}
</style>
