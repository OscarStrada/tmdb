const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const language = "en-US";
const queries = `api_key=${API_KEY}&language=${language}`;

export const endpoints = {
  trendingMovies: `${API_BASE_URL}/trending/movie/day?${queries}`,
  upcomingMovies: `${API_BASE_URL}/movie/upcoming?${queries}`,
  topRatedMovies: `${API_BASE_URL}/movie/top_rated?${queries}`,
  popularMovies: `${API_BASE_URL}/movie/popular?${queries}`,
};
