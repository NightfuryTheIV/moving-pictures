const BASE_URL = 'https://api.themoviedb.org/3'
export const IMG_URL = 'https://image.tmdb.org/t/p'

const creditsCache = new Map()

export async function getCredits(id) {
  if (creditsCache.has(id)) return creditsCache.get(id)
  const data = await request(`/movie/${id}/credits`)
  creditsCache.set(id, data)
  return data
}

async function request(path, params = {}) {
  const query = new URLSearchParams({ language: 'en-US', ...params })
  const res = await fetch(`${BASE_URL}${path}?${query}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  })
  if (!res.ok) throw new Error(`TMDB error: ${res.status}`)
  return res.json()
}

export const getTrending = () => request('/trending/movie/week')
export const searchMovies = (query, page = 1) =>
  request('/search/movie', { query, page })
export const getMovie = (id) =>
  request(`/movie/${id}`, { append_to_response: 'credits,videos,similar' })

export const posterUrl = (path, size = 'w500') =>
  path ? `${IMG_URL}/${size}${path}` : '/placeholder.png'