import React from 'react';
import './Weather.css';

export const Weather = ({ temperature, weather, wind }) => {
  const getSign = (temp) => {
    let sign = '';
    if (temp > 0) {
      sign = '+';
    } else if (temp < 0) {
      sign = '-';
    }
    return sign;
  };

  const getIconClass = () => {
    const mainWeather = weather.main.toLowerCase();
    switch (mainWeather) {
      case 'clouds':
        return 'icon-cloud';
      case 'rain':
        return 'icon-rainy';
      case 'snow':
        return 'icon-snowy';
      default:
        return 'icon-sun';
    }
  };

  return (
    <div className="weather">
      <div className="weather__info">
        {`${getSign(temperature.real)}${temperature.real}°C`}
        <div className="weather__description">{weather.description}</div>
        <div className="weather__description">
          {`feels like ${getSign(temperature.feelsLike)}${
            temperature.feelsLike
          }°C`}
        </div>
        <div className="weather__description">{`wind ${wind} m/s`}</div>
      </div>
      <div className="weather__icon">
        <span className={getIconClass()} />
      </div>
    </div>
  );
};
