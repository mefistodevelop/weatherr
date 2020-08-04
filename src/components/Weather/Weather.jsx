import React from 'react';
import './Weather.css';
import { useSelector } from 'react-redux';

export const Weather = ({ temperature, weather, wind }) => {
  const language = useSelector((state) => state.language);

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

  const locals = {
    feelsLike: {
      en: 'feels like',
      ru: 'ощущается как',
    },
    wind: {
      en: 'wind',
      ru: 'ветер',
    },
    speedUnits: {
      en: 'm/s',
      ru: 'м/с',
    },
  };

  return (
    <div className="weather">
      <div className="weather__info">
        {`${getSign(temperature.real)}${temperature.real}°C`}
        <div className="weather__description">{weather.description}</div>
        <div className="weather__description">
          {`${locals.feelsLike[language]} ${getSign(temperature.feelsLike)}${
            temperature.feelsLike
          }°C`}
        </div>
        <div className="weather__description">
          {`${locals.wind[language]} ${wind} ${locals.speedUnits[language]}`}
        </div>
      </div>
      <div className="weather__icon">
        <span className={getIconClass()} />
      </div>
    </div>
  );
};
