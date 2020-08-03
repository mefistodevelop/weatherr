import React from 'react';
import { Location } from '../Location/Location';
import { Weather } from '../Weather/Weather';

export const Content = ({ store }) => {
  const weather = {
    main: store.weather[0].main,
    description: store.weather[0].description,
  };

  const temperature = {
    real: Math.round(store.main.temp),
    feelsLike: Math.round(store.main.feels_like),
  };

  const wind = Math.round(store.wind.speed);

  return (
    <div className="content">
      <Location city={store.name} country={store.sys.country} />
      <Weather temperature={temperature} weather={weather} wind={wind} />
    </div>
  );
};
