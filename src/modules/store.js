import { createStore } from 'vuex';

import movies from './movies';

const store = createStore({
  modules: {
    movies,
    friends,
  },
});

export default store;