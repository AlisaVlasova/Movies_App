import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  movies: [],
  page: 1,
  query: '',
  searchResults: 0,
  history: [],
};

export const selectors = {
  getMovies: state => state.movies,
  getPage: state => state.page,
  getQuery: state => state.query,
  getSearchResults: state => state.searchResults,
  getHistory: state => state.history,
};

const SET_MOVIES = 'SET_MOVIES';
const SELECT_PAGE = 'SELECT_PAGE';
const SET_QUERY = 'SET_QUERY';
const SET_HISTORY = 'SET_HISTORY';
const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const actions = {
  setMovies: movies => ({
    type: SET_MOVIES,
    movies,
  }),
  selectPage: page => ({
    type: SELECT_PAGE,
    page,
  }),
  setQuery: query => ({
    type: SET_QUERY,
    query,
  }),
  setHistory: query => ({
    type: SET_HISTORY,
    query,
  }),
  setSearchResults: searchResults => ({
    type: SET_SEARCH_RESULTS,
    searchResults,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };

    case SELECT_PAGE:
      return {
        ...state,
        page: action.page,
      };

    case SET_QUERY:
      return {
        ...state,
        query: action.query,
      };

    case SET_HISTORY:
      return {
        ...state,
        history: [...state.history, action.query],
      };

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.searchResults,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
