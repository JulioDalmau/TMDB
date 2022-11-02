const apiKey = "74e635f0cb9a9009c27713729fb60b93";

const requests = {
  requestMoviePopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  requestMovieTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  requestMovieUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  requestTvPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
  requestTvTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`,
  requestTvLatest: `https://api.themoviedb.org/3/tv/latest?api_key=${apiKey}&language=en-US`,
};

export default requests;
