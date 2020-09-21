import React from 'react';
import PropTypes from 'prop-types';

import './Preview.scss';

export const Preview = (
  {
    Title,
    Poster,
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Language,
    Plot,
    Production,
    Released,
    Runtime,
    Writer,
    imdbRating,
    imdbVotes,
  },
) => (Title && Poster && Plot ? (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={Poster}
          alt="Film logo"
        />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="images/imdb-logo.jpeg"
              alt="imdb"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-8">{Title}</p>
        </div>
      </div>

      <div className="content">
        <p>
          <strong>Actors: </strong>
          {Actors}
        </p>
        <p>
          <strong>Awards: </strong>
          {Awards}
        </p>
        <p>
          <strong>Country: </strong>
          {Country}
          {` `}
          <strong>Language: </strong>
          {Language}
        </p>
        <p>
          <strong>Director: </strong>
          {Director}
          {` `}
          <strong>Writer: </strong>
          {Writer}
        </p>
        <p>
          <strong>Genre: </strong>
          {Genre}
        </p>
        <p>
          <strong>Production: </strong>
          {Production}
        </p>
        <p>
          <strong>Runtime: </strong>
          {Runtime}
        </p>
        <p>
          <strong>Released: </strong>
          {Released}
        </p>
        <p>
          <strong>imdbRating: </strong>
          {imdbRating}
          {` `}
          <strong>imdbVotes: </strong>
          {imdbVotes}
        </p>
        <p>
          <strong>Description: </strong>
          {Plot}
        </p>
      </div>
    </div>
  </div>
) : (
  <p>Loading...</p>
));

Preview.propTypes = {
  Title: PropTypes.string.isRequired,
  Poster: PropTypes.string,
  Actors: PropTypes.string,
  Awards: PropTypes.string,
  Country: PropTypes.string,
  Director: PropTypes.string,
  Genre: PropTypes.string,
  Language: PropTypes.string,
  Plot: PropTypes.string,
  Production: PropTypes.string,
  Released: PropTypes.string,
  Runtime: PropTypes.string,
  Writer: PropTypes.string,
  imdbRating: PropTypes.string,
  imdbVotes: PropTypes.string,
};

Preview.defaultProps = {
  Poster: '',
  Actors: '',
  Awards: '',
  Country: '',
  Director: '',
  Genre: '',
  Language: '',
  Plot: '',
  Production: '',
  Released: '',
  Runtime: '',
  Writer: '',
  imdbRating: '',
  imdbVotes: '',
};
