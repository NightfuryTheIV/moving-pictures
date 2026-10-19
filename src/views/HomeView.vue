<script setup>
  import Friendactivity from '@/components/Friendactivity.vue'
  import TrendingMovie from '@/components/TrendingMovie.vue'

  const trendingMovies = [
    { id: 1, title: 'Baby Driver', producer: 'Edgar Wright', poster: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Zootopia', producer: 'Byron Howard, Rich Moore', poster: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Look Back', producer: 'Kiyotaka Oshiyama', poster: 'https://via.placeholder.com/150' }
  ]

  const friendActivities = [
    { id: 1, name: 'Friend 1', movie: 'Baby Driver', rating: 8, avatar: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Friend 2', movie: 'Look Back', rating: 10, avatar: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Friend 3', movie: 'Zootopia', rating: 7, avatar: 'https://via.placeholder.com/100' }
  ]
</script>

<template>
  <div class="home-view">
    <section class="trending-movies">
      <h1>Trending Movies</h1>
      <div class="movie-list">
        <TrendingMovie v-for="movie in trendingMovies" :key="movie.id" :movie="movie" />
      </div>
    </section>

    <section class="friend-activity">
      <h1>Friend Activity</h1>
      <div class="activity-list">
        <Friendactivity v-for="activity in friendActivities" :key="activity.id" :friendstuff="activity" />
      </div>
    </section>
  </div>
</template>

<style scoped>
  .home-view {
    width: 100%;
  }

  * {
    font-family: 'Roboto', sans-serif;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
  }

  .movie-list, .activity-list {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>