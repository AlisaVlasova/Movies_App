const OMDB_API = 'https://www.omdbapi.com/?apikey=65c1586c&';

export const getMovies = (title, page) => (
  fetch(`${OMDB_API}s=${title}&page=${page}`)
    .then(response => response.json())
);

export const getSelectedMovie = selectedMovie => (
  fetch(`${OMDB_API}i=${selectedMovie}`)
    .then(response => response.json())
);
