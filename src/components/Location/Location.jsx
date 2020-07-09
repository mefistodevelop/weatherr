import React from 'react';
import './Location.css';

export const Location = ({ city, country }) => {
  const r = '';
  return (
    <div className="location">
      <span className="location__name">{`${city}, ${country}`}</span>
    </div>
  );
};
