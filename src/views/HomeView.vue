<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { getTrending } from '@/api/tmdb.js'

  import FriendActivity from '@/components/FriendActivity.vue'
  import TrendingMovie from '@/components/TrendingMovie.vue'

  const trendingMovies = ref([])
  const visible = ref(5)

  const visibleMovies = computed(() => trendingMovies.value.slice(0, visible.value))
  const more = computed(() => trendingMovies.value.length > visible.value)

  function showMore() {
    visible.value += 5
  }

  onMounted(async () => {
    try {
      const response = await getTrending()
      trendingMovies.value = response.results
    } catch (error) {
      console.error('Error fetching trending movies:', error)
    }
  })

  const staticFriendActivities = [
    { id: 1, name: 'Friend 1', movie: 'Baby Driver', rating: 8, avatar: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Friend 2', movie: 'Look Back', rating: 10, avatar: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Friend 3', movie: 'Zootopia', rating: 7, avatar: 'https://via.placeholder.com/100' }
  ]

  const staticTrendingMovies = [
    { id: 1, title: 'Baby Driver', producer: 'Edgar Wright', poster: 'https://via.placeholder.com/200x300' },
    { id: 2, title: 'Look Back', producer: 'John Doe', poster: 'https://via.placeholder.com/200x300' },
    { id: 3, title: 'Zootopia', producer: 'Byron Howard', poster: 'https://via.placeholder.com/200x300' }
  ]
</script>

<template>
  <div class="home-view">
    <section class="trending-movies">
      <h1>Trending Movies</h1>
      <div class="movie-list">
        <TrendingMovie v-for="movie in visibleMovies" :key="movie.id" :movie="movie" />
      </div>

      <button>
        <span v-if="more" @click="showMore">Show More</span>
        <span v-else>No More Movies</span>
      </button>
    </section>

    <section class="friend-activity">
      <h1>Friend Activity</h1>
      <div class="activity-list">
        <FriendActivity v-for="activity in staticFriendActivities" :key="activity.id" :friendstuff="activity" />
      </div>
    </section>
  </div>
</template>

<style scoped>
  .home-view {
    width: 100%;
  }

  .movie-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
    width: 100%;
  }

  button {
    display: block;
    margin: 2rem auto 0;
  }

  * {
    font-family: 'Roboto', sans-serif;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
  }

  .activity-list {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    flex-direction: row;
  }
</style>