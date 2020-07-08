import React, { useState } from 'react';
import './Search.css';

export const Search = () => {
  const [query, setQuery] = useState('');

  const updateQuery = (e) => setQuery(e.target.value);
  const send = (e) => {
    if (e.key === 'Enter') {
      console.log(`Query "${query}" is sent`);
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
