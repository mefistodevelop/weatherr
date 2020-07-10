import React from 'react';
import { Location } from '../Location/Location';
import { Weather } from '../Weather/Weather';

export const Content = ({ store, isWeatherDefined }) => (
  <div className="content">
    {isWeatherDefined() ? (
      <>
        <Location city={store.name} country={store.sys.country} />
        <Weather
          temperature={store.main.temp}
          weather={store.weather[0].main}
        />
      </>
    ) : (
      ''
    )}
  </div>
);
