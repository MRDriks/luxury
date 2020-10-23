const state = () => ({
  counter: 0,
  order: [],
  totalPrice: 0,
  allPositions: []
});

const mutations = {
  setAllPositions(state, data) {
    state.allPositions = data;
  },
  addPosition(state, data) {
    state.order.push(data);
  },
  removePosition(state, id) {
    state.order = state.order.filter(item => {
      return item.id !== id;
    });
  },
  setCounter(state, data) {
    state.counter = data;
  },
  setTotalPrice(state, data) {
    state.totalPrice = data;
  }
};

const actions = {
  fetchAllPositions(context) {
    fetch('https://demo5851419.mockable.io/positions/all')
      .then(res => res.json())
      .then(data => {
        context.commit('setAllPositions', data);
      });
  },
  addToCart(context, id) {
    const allPositions = context.state.allPositions;
    const result = allPositions.filter(item => {
      return item.id == id;
    });
    result[0].quantity = 1;
    const quantityOfPositions = context.state.order.length + 1;
    context.commit('setCounter', quantityOfPositions);
    context.commit('addPosition', result[0]);
    this.dispatch('countTotalPrice');
  },
  removeFromCart(context, positionId) {
    const quantityOfPositions = context.state.order.length - 1;
    context.commit('setCounter', quantityOfPositions);
    context.commit('removePosition', positionId);
    this.dispatch('countTotalPrice');
  },
  countTotalPrice(context) {
    let totalPrice = 0;
    context.state.order.forEach(item => {
      totalPrice += parseFloat(item.price);
    });
    context.commit('setTotalPrice', totalPrice);
  }
};

export default {
  state,
  mutations,
  actions
};
