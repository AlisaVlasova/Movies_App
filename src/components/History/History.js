import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './History.scss';

import { actions, selectors } from '../../redux/store';

export const History = () => {
  const dispatch = useDispatch();
  const history = useSelector(selectors.getHistory);

  return (
    <ul className="history__list">
      {history.map(item => (
        <li
          className="history__item"
          role="presentation"
          key={item}
          onClick={() => dispatch(actions.setQuery(item))}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
