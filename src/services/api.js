// good practice to keep the api in diffrerent files

const API_KEY = "7a9cd2a23b5b108504b93f436bd2c3b3"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data.results)
  return data.results
}
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  // learn how to use url better
  const data = await response.json();
  console.log("here from api")
  console.log(data.results)
  return data.results
}