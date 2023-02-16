import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '9fae0fdf266213c68361ca578a95b948',
  },
});

// Cписок найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

export const getMovies = async (page = 1) => {
  const { data } = await instance.get('/trending/movie/day', {
    params: {
      page,
      language: 'en-US',
    },
  });

  return data;
};

// Запит повної інформації про фільм для сторінки кінофільму.

export const getInfoMovie = async id => {
  const { data } = await instance.get(`/movie/${id}`, {
    params: {
      language: 'en-US',
    },
  });

  return data;
};

// Запит інформації про акторський склад для сторінки кінофільму.
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export const getInfoActors = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`, {
    params: {
      language: 'en-US',
    },
  });

  return data;
};

// Запит оглядів для сторінки кінофільму.
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export const getReviewMovies = async (id, page = 1) => {
  const { data } = await instance.get(`/movie/${id}/reviews`, {
    params: {
      language: 'en-US',
      page,
    },
  });

  return data;
};

// Пошук фільму за ключовим словом на сторінці фільмів.
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export const getKeywordMovies = async (query, page = 1) => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
      language: 'en-US',
      page,
      include_adult: false,
    },
  });

  return data;
};
