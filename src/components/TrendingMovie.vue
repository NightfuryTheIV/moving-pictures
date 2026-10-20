<script setup>
import { ref, onMounted } from 'vue'
import { posterUrl, getCredits } from '@/api/tmdb.js'

const props = defineProps({
  movie: { type: Object, required: true },
})

const director = ref('')

onMounted(async () => {
  try {
    const credits = await getCredits(props.movie.id)
    director.value = credits.crew
      .filter((person) => person.job === 'Director')
      .map((person) => person.name)
      .join(', ')
  } catch (error) {
    console.error('Error fetching credits:', error)
  }
})
</script>

<template>
    <RouterLink :to="`/movie/${movie.id}`" class="movie-card">
        <img :src="posterUrl(movie.poster_path, 'w342')" :alt="movie.title" class="movie-poster" />
        <h2 class="movie-title">{{ movie.title }}</h2>
        <p class="movie-producer">{{ director }}</p>
    </RouterLink>
</template>

<style scoped>
.movie-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    transition: transform 0.2s;
    min-width: 0;
    display: block;
    text-decoration: none;
    color: inherit;
}

img {
  width: 100%;
  aspect-ratio: 2 / 3;
  display: block;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 20px;
}

h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
}

p {
    margin: 0;
    font-size: 1rem;
    color: #666;
}
</style>