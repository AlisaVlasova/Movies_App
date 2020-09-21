import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './FindMovie.scss';

import { actions, selectors } from '../../redux/store';
import { History } from '../History/History';

export const FindMovie = ({ loadMovies }) => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const dispatch = useDispatch();
  const query = useSelector(selectors.getQuery);

  useEffect(() => {
    loadMovies();
  }, [query]);

  const handleChanges = (event) => {
    dispatch(actions.setQuery(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loadMovies();
    dispatch(actions.setHistory(query));
  };

  return (
    <>
      <form
        className="find-movie"
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label className="label" htmlFor="movie-title">
            Movie title
          </label>

          <div className="control search-input">
            <input
              type="text"
              id="movie-title"
              placeholder="Enter a title to search"
              className="input"
              value={query}
              onChange={handleChanges}
            />
          </div>

          <button
            className="button is-light"
            type="button"
            onClick={() => setIsHistoryVisible(!isHistoryVisible)}
          >
            {isHistoryVisible ? `Hide ` : `Show `}
            search history
          </button>
          {isHistoryVisible
          && <History />}
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              type="submit"
              className="button is-light"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

FindMovie.propTypes = {
  loadMovies: PropTypes.func.isRequired,
};
