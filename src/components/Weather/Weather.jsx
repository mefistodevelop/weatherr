import React from 'react';
import './Weather.css';

export const Weather = ({ temperature, weather }) => {
  const remove = '';
  return (
    <div className="weather">
      <div className="weather__temperature">{`${temperature}°C`}</div>
      <div className="weather__description">{weather}</div>
    </div>
  );
};
