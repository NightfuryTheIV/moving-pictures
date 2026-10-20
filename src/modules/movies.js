export const movies = {
  namespaced: true,
  state: () => ({
    movies: [],
  }),

  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    addMovie(state, movie) {
      state.movies.push(movie);
    }
  }
}