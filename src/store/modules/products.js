// initial state
const state = () => ({
  positions: [],
  menu: [],
  positionsCounter: 0
});

// mutations
const mutations = {
  setPositions(state, positions) {
    state.positions = positions;
  },
  setMenu(state, menu) {
    state.menu = menu;
  },
  setCountedPositions(state, counter) {
    state.positionsCounter = counter;
  }
};

//actions
const actions = {
  fetchPositions(context) {
    fetch('https://demo5851419.mockable.io/positions')
      .then(res => res.json())
      .then(data => {
        context.commit('setPositions', data);
        this.dispatch('countPositions', 'all');
      });
  },
  fetchMenu(context) {
    fetch('https://demo5851419.mockable.io/menu')
      .then(res => res.json())
      .then(data => {
        context.commit('setMenu', data);
      });
  },
  countPositions(context, category) {
    const result = context.state.positions[category].length;
    context.commit('setCountedPositions', result);
  }
};

// getters
const getters = {
  sortByPrice(state) {
    const result = state.positions.all.sort((a, b) => a.price - b.price);
    return result;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
