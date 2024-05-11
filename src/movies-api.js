import axios from "axios";

const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTAwN2Y0ZDAxNTgzMWQ4Mjg3NmMwNjlmNTViNjVkOSIsInN1YiI6IjY2M2Q1NDI5NzYwMTE1MmZhYjBlYmI0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k_E3m8pYOjhrvbHqyFf9KRUnIuhNF3sn0CiJwHN3zzc";

axios.defaults.baseURL = "https://api.themoviedb.org";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${apiToken}`;
  return config;
});

export const getMovies = async () => {
  const response = await axios.get("3/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

export const getMoviesSearch = async (searchQuery) => {
  const response = await axios.get("3/search/movie", {
    params: {
      query: searchQuery,
      language: "en-US",
      
    },
  });
  return response.data.results;
};

export const getMovieId = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

export const getMovieIdCredits = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

export const getMovieIdReviews = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
      
    },
  });
  return response.data;
};