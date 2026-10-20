<script setup>
  import { ref, onMounted } from 'vue'
  import { getTrending } from '@/api/tmdb.js'

  const trendingMovies = ref([])

  onMounted(async () => {
    try {
      const response = await getTrending()
      trendingMovies.value = response.results
    } catch (error) {
      console.error('Error fetching trending movies:', error)
    }
  })
</script>

<template>
  <div class="profile-view">
    <h1>Profile</h1>
    <section class="trending-movies">
      <h2>Trending Movies</h2>
      <div class="movie-list">
        <div v-for="movie in trendingMovies" :key="movie.id" class="movie-item">
          <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" :alt="movie.title" />
          <p>{{ movie.title }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .profile-view {
    width: 100%;
  }

  .movie-list {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
  }

  .movie-item {
    margin-right: 1rem;
    text-align: center;
  }

  .movie-item img {
    width: 150px;
    height: auto;
    border-radius: 8px;
  }
</style>