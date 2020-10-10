// initial state
const state = () => ({
  positions: [],
  menu: [],
  positionsByCategory: [],
  allPositionsCounter: 0,
  sortingState: 'rate',
  category: 'all',
  pagination: {
    currentPage: 1,
    totalPages: 0,
    perPage: 6,
    startIndex: 0,
    endIndex: 6
  },
  viewModel: 'grid'
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
  setTotalPages(state, pages) {
    state.pagination.totalPages = pages;
  },
  setStartIndex(state, index) {
    state.pagination.startIndex = index;
  },
  setEndIndex(state, index) {
    state.pagination.endIndex = index;
  },
  setCurrentPage(state, page) {
    state.pagination.currentPage = page;
  },
  setViewModel(state, vm) {
    state.viewModel = vm;
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
        context.commit('setPositionsByCategory', data[category]);
        this.dispatch('countPositions', category);
        this.dispatch('countTotalPages');
        this.dispatch('sortByRate', data[category]);
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
    } else if (sorting_state === 'rate') {
      this.dispatch('sortByRate', data);
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
  sortByRate(context, data) {
    const result = data.sort((a, b) => b.rate - a.rate);
    context.commit('setPositionsByCategory', result);
  },
  sortingStateChange(context, value) {
    context.commit('setSortingState', value);
  },
  setCategory(context, category) {
    context.commit('setCategory', category);
  },
  countTotalPages(context) {
    const result = Math.ceil(
      context.state.allPositionsCounter / context.state.pagination.perPage
    );
    context.commit('setTotalPages', result);
  },
  nextPage(context) {
    const start = context.state.pagination.endIndex;
    const end =
      context.state.pagination.endIndex + context.state.pagination.perPage;
    const page = context.state.pagination.currentPage + 1;
    context.commit('setEndIndex', end);
    context.commit('setStartIndex', start);
    context.commit('setCurrentPage', page);
  },
  prevPage(context) {
    const start =
      context.state.pagination.startIndex - context.state.pagination.perPage;
    const end = context.state.pagination.startIndex;
    const page = context.state.pagination.currentPage - 1;
    context.commit('setEndIndex', end);
    context.commit('setStartIndex', start);
    context.commit('setCurrentPage', page);
  },
  setPage(context, page) {
    context.commit('setEndIndex', page.endIndex);
    context.commit('setStartIndex', page.startIndex);
    context.commit('setCurrentPage', page.number);
  },
  setViewModel(context, vm) {
    context.commit('setViewModel', vm);
  }
};

export default {
  state,
  mutations,
  actions
};
