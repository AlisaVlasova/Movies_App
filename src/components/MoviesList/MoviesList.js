import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import * as api from '../../api';

export const MoviesList = ({
  movies = [],
  setSelectedMovie,
  setPreview,
}) => {
  const handleSelect = (selectedMovie) => {
    setSelectedMovie(selectedMovie);
    api.getSelectedMovie(selectedMovie)
      .then(movie => setPreview(movie));
  };

  return (
    <div className="movies">
      {movies
        .map(movie => (
          <div
            role="presentation"
            onClick={() => handleSelect(movie.imdbID)}
          >
            <MovieCard
              key={movie.imdbId}
              {...movie}
            />
          </div>
        ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedMovie: PropTypes.func,
  setPreview: PropTypes.func,
};

MoviesList.defaultProps = {
  setSelectedMovie: null,
  setPreview: null,
};
