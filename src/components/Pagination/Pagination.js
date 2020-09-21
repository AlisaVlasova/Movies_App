import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Pagination.scss';

import { selectors, actions } from '../../redux/store';

export const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectors.getPage);
  const searchResults = useSelector(selectors.getSearchResults);

  const totalPages = Math.ceil(searchResults / 10);

  const handlePage = (pageNum) => {
    dispatch(actions.selectPage(pageNum));
  };

  return !searchResults || (
    <div className="pagination">
      <button
        className="button is-light"
        type="button"
        onClick={() => handlePage(page - 1)}
        disabled={page === 1}
      >
        {`<`}
      </button>
      <span>
        {` ${page} / ${totalPages} `}
      </span>
      <button
        className="button is-light"
        type="button"
        onClick={() => handlePage(page + 1)}
        disabled={page === totalPages || searchResults < 10}
      >
        {`>`}
      </button>
    </div>
  );
};
