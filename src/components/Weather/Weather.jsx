import React from 'react';
import './Weather.css';

export const Weather = ({ temperature, weather }) => {
  const roundedTemperature = Math.round(temperature);
  const getSign = (temp) => {
    let sign = '';
    if (temp > 0) {
      sign = '+';
    } else if (temp < 0) {
      sign = '-';
    }
    return sign;
  };

  const tempSign = getSign(roundedTemperature);

  return (
    <div className="weather">
      <div className="weather__temperature">{`${tempSign}${roundedTemperature}°C`}</div>
      <div className="weather__description">{weather}</div>
    </div>
  );
};
