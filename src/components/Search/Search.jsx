import React, { useState } from 'react';
import './Search.css';
import { api } from '../../api/api';

export const Search = ({ setWeather }) => {
  const [query, setQuery] = useState('');

  const updateQuery = (e) => setQuery(e.target.value);
  const send = async (e) => {
    if (e.key === 'Enter') {
      const weather = await api.getWeather(query);
      setWeather(weather);
      setQuery('');
    }
  };
  return (
    <div className="search">
      <input
        type="text"
        className="search__bar"
        placeholder="Search..."
        value={query}
        onChange={updateQuery}
        onKeyPress={send}
      />
    </div>
  );
};
