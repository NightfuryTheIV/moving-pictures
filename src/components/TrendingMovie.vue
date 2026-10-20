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
    <div class="movie-card">
        <img :src="posterUrl(movie.poster_path, 'w342')" :alt="movie.title" class="movie-poster" />
        <h2 class="movie-title">{{ movie.title }}</h2>
        <p class="movie-description">{{ movie.producer }}</p>
    </div>
</template>

<style scoped>
img {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 6px;
  background: #222; /* shows while the image loads */
}

.movie-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    transition: transform 0.2s;
    width: 15%;
}

h2 {
    margin: 0;
    font-size: 32px;
    font-weight: bold;
}

p {
    margin: 0;
    font-size: 24px;
    color: #666;
}
</style>