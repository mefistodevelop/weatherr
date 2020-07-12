import React, { useEffect } from 'react';
import './App.css';
import { Search } from './components/Search/Search';
import { useGlobal } from './store/store';
import Spinner from './components/Spinner/Spinner';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { api } from './api/api';

function App() {
  const [globalState, globalActions] = useGlobal();

  const isWeatherDefined = () => {
    if (Object.keys(globalState.weather).length !== 0) {
      return true;
    }
    return false;
  };

  const defineClassname = () => {
    if (!isWeatherDefined()) return '';

    let className = '';
    const weather = globalState.weather.weather[0].main.toLowerCase();
    const temperature = Math.round(globalState.weather.main.temp);

    if (weather === 'rain') className = weather;
    if (temperature >= 28) className = 'hot';
    if (temperature <= 5) className = 'cold';

    return className;
  };

  const updateWeather = async () => {
    if (globalState.weather.name) {
      globalActions.setIsFetching(true);

      const newWeather = await api.getWeather(globalState.weather.name, globalState.language);
      globalActions.setWeather(newWeather);

      globalActions.setIsFetching(false);
    }
  };

  useEffect(() => {
    updateWeather();
  }, [globalState.language]);

  return (
    <div className={`App ${defineClassname()}`}>
      <Header
        language={globalState.language}
        toggleLang={globalActions.toggleLang}
      />
      <div className="App__wrapper">
        <Search
          setWeather={globalActions.setWeather}
          setIsFetching={globalActions.setIsFetching}
          language={globalState.language}
        />

        {globalState.isFetching
          ? <Spinner size={100} />
          : (
            <Content store={globalState.weather} isWeatherDefined={isWeatherDefined} />
          )}
      </div>
    </div>
  );
}

export default App;
