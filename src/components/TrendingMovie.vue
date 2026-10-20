<script setup>
    import { posterUrl } from '@/api/tmdb.js'
    const props = defineProps({
        movie: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <RouterLink :to="`/movie/${movie.id}`" class="movie-card">
        <img :src="posterUrl(movie.poster_path, 'w342')" :alt="movie.title" class="movie-poster" />
        <h2 class="movie-title">{{ movie.title }}</h2>
        <p class="movie-producer">{{ movie.release_date?.slice(0, 4) }}</p>
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
  background: #222; /* shows while the image loads */
}

h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
}

p {
    margin: 0;
    font-size: 0.85rem;
    color: #666;
}
</style>