<script setup>
    const props = defineProps({
        movie: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="movie-card">
        <img :src="movie.poster" :alt="movie.title" class="movie-poster" />
        <h2 class="movie-title">{{ movie.title }}</h2>
        <p class="movie-description">{{ movie.producer }}</p>
    </div>
</template>

<style scoped>
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