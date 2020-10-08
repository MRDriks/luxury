// initial state
const state = () => ({
  positions: [],
  menu: [],
  positionsByCategory: [],
  defaultPositions: [],
  allPositionsCounter: 0,
  sortingState: 'default',
  category: 'all'
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
    state.allPositionsCounter = counter;
  },
  setPositionsByCategory(state, positions) {
    state.positionsByCategory = positions;
  },
  setSortingState(state, value) {
    state.sortingState = value;
  },
  setCategory(state, category) {
    state.category = category;
  },
  setDefaultPositions(state, positions) {
    state.defaultPositions = positions;
  }
};

//actions
const actions = {
  fetchPositions(context) {
    fetch('https://demo5851419.mockable.io/positions')
      .then(res => res.json())
      .then(data => {
        const category = context.state.category;
        context.commit('setPositions', data);
        context.commit('setDefaultPositions', data);
        context.commit('setPositionsByCategory', data[category]);
        this.dispatch('countPositions', category);
      });
  },
  fetchMenu(context) {
    fetch('https://demo5851419.mockable.io/menu')
      .then(res => res.json())
      .then(data => {
        context.commit('setMenu', data);
      });
  },
  countPositions(context) {
    const category = context.state.category;
    const result = context.state.positions[category].length;
    context.commit('setCountedPositions', result);
  },
  getPositionsByCategory(context) {
    const category = context.state.category;
    const data = context.state.positions[category];
    const sorting_state = context.state.sortingState;

    if (sorting_state === 'price-low') {
      this.dispatch('sortByLowPrice', data);
    } else if (sorting_state === 'price-high') {
      this.dispatch('sortByHighPrice', data);
    } else if (sorting_state === 'default') {
      // this.dispatch('fetchPositions')
    }
  },
  sortByHighPrice(context, data) {
    const result = data.sort((a, b) => b.price - a.price);
    context.commit('setPositionsByCategory', result);
  },
  sortByLowPrice(context, data) {
    const result = data.sort((a, b) => a.price - b.price);
    context.commit('setPositionsByCategory', result);
  },
  sortingStateChange(context, value) {
    context.commit('setSortingState', value);
  },
  setCategory(context, category) {
    context.commit('setCategory', category);
  }
};

export default {
  state,
  mutations,
  actions
};
