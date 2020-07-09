import React from 'react';
import './App.css';
import { Search } from './components/Search/Search';
import { useGlobal } from './store/store';
import { Location } from './components/Location/Location';
import { Weather } from './components/Weather/Weather';

function App() {
  const [globalState, globalActions] = useGlobal();

  function isWeatherDefined() {
    if (Object.keys(globalState.weather).length !== 0) {
      return true;
    }
    return false;
  }

  function defineClassname() {
    if (!isWeatherDefined()) return;

    const weather = globalState.weather.weather[0].main.toLowerCase();
    const temperature = globalState.weather.main.temp;

    if (weather === 'rain') return weather;
    if (Math.round(temperature) > 28) return 'hot';
    if (Math.round(temperature) < 5) return 'cold';
  }

  return (
    <div className={`App ${defineClassname()}`}>
      <div className="App__wrapper">
        <Search setWeather={globalActions.setWeather} />

        {isWeatherDefined() ? (
          <>
            <Location city={globalState.weather.name} country={globalState.weather.sys.country} />
            <Weather
              temperature={globalState.weather.main.temp}
              weather={globalState.weather.weather[0].main}
            />
          </>
        ) : ''}
      </div>
    </div>
  );
}

export default App;
