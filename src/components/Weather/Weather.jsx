import React from 'react';
import './Weather.css';

export const Weather = ({ temperature, weather }) => {
  const roundedTemperature = Math.round(temperature);
  return (
    <div className="weather">
      <div className="weather__temperature">{`${roundedTemperature}°C`}</div>
      <div className="weather__description">{weather}</div>
    </div>
  );
};
