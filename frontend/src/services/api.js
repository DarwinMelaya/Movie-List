const API_KEY = 'beaa189b7b76687207f1a54cf2c58b77'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}

// New functions for categories
export const getMovieCategories = async () => {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    const data = await response.json()
    return data.genres
}

export const getMoviesByCategory = async (categoryId) => {
    const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${categoryId}`)
    const data = await response.json()
    return data.results
}