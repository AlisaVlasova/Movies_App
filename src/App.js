import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';
import { Preview } from './components/Preview/Preview';
import { Pagination } from './components/Pagination/Pagination';

import * as api from './api';
import { actions, selectors } from './redux/store';

export const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [preview, setPreview] = useState(null);

  const dispatch = useDispatch();
  const movies = useSelector(selectors.getMovies);
  const page = useSelector(selectors.getPage);
  const query = useSelector(selectors.getQuery);
  const searchResults = useSelector(selectors.getSearchResults);

  const loadMovies = () => {
    api.getMovies(query, page)
      .then((moviesFromServer) => {
        dispatch(actions.setMovies(moviesFromServer.Search));
        dispatch(actions.setSearchResults(moviesFromServer.totalResults));
      });
  };

  useEffect(() => {
    if (localStorage.getItem('saved_query')) {
      dispatch(actions.setQuery(
        JSON.parse(localStorage.getItem('saved_query')),
      ));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('saved_query', JSON.stringify(query));
  }, [query]);

  useEffect(() => {
    loadMovies();

    dispatch(actions.selectPage(page));
  }, [page]);

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList
          movies={movies}
          setSelectedMovie={setSelectedMovie}
          setPreview={setPreview}
        />
      </div>
      <div className="sidebar">
        <FindMovie
          movies={movies}
          loadMovies={loadMovies}
          searchResults={searchResults}
          titleQuery={query}
        />
        {!selectedMovie || (
          <div className="container">
            <h2 className="title">Preview</h2>
            <Preview {...preview} />
          </div>
        )}
      </div>
      <Pagination
        total={searchResults}
        titleQuery={query}
        loadMovies={loadMovies}
      />
    </div>
  );
};
