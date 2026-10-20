<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getMovie, posterUrl } from '@/api/tmdb'

const route = useRoute()
const movie = ref(null)

watch(
  () => route.params.id,
  async (id) => { movie.value = await getMovie(id) },
  { immediate: true }
)
</script>

<template>
  <div v-if="movie" class="movie-view">
    <div id="movie-poster">
      <h1>{{ movie.title }} ({{ movie.release_date?.slice(0, 4) }})</h1>
      <img :src="posterUrl(movie.poster_path, 'w500')" />
    </div>
    <div id="movie-desc">
      <p>{{ movie.overview }}</p>
      <div id="cast">
        <h2>Cast</h2>
        <ul>
          <li v-for="c in movie.credits.cast.slice(0, 10)" :key="c.id">
            {{ c.name }} as {{ c.character }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-view {
  display: flex;
  gap: 20px;
  flex-direction: row;
  border: 3px blue solid;
}

#movie-poster {
  flex: 1;
  text-align: center;
}

#movie-desc {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  border: 2px red solid;
  align-items: space-arouund;
}

#movie-desc p {
  text-align: left;
  width: 80%;
  margin-bottom: 20px;
  border: 3px purple solid;
}

#movie-desc h2 {
  text-align: center;
}

#cast {
  border: 3px pink solid;
}
</style>