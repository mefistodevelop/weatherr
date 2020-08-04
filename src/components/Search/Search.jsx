import React, { useState } from 'react';
import './Search.css';
import { useDispatch } from 'react-redux';
import { searchWeather } from '../../store/weatherReducer';

export const Search = ({ language }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const placeholder = language === 'en' ? 'Search weather' : 'Искать погоду';
  const updateQuery = (e) => setQuery(e.target.value);

  const send = (e) => {
    if (e.key === 'Enter') {
      const trimmedQuery = query.trim();
      if (!trimmedQuery) return;

      dispatch(searchWeather(trimmedQuery, language));
      setQuery('');
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__bar"
        placeholder={placeholder}
        value={query}
        onChange={updateQuery}
        onKeyPress={send}
      />
      <div className="search__icon" />
    </div>
  );
};
