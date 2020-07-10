import React from 'react';
import './App.css';
import { Search } from './components/Search/Search';
import { useGlobal } from './store/store';
import Spinner from './components/Spinner/Spinner';
import { Content } from './components/Content/Content';

function App() {
  const [globalState, globalActions] = useGlobal();

  function isWeatherDefined() {
    if (Object.keys(globalState.weather).length !== 0) {
      return true;
    }
    return false;
  }

  function defineClassname() {
    if (!isWeatherDefined()) return '';

    let className = '';
    const weather = globalState.weather.weather[0].main.toLowerCase();
    const temperature = Math.round(globalState.weather.main.temp);

    if (weather === 'rain') className = weather;
    if (temperature >= 28) className = 'hot';
    if (temperature <= 5) className = 'cold';

    return className;
  }

  function toggleLanguage() {
    if (globalState.language === 'en') {
      globalActions.toggleLang('ru');
    } else {
      globalActions.toggleLang('en');
    }
    console.log(globalState.language);
  }

  return (
    <div className={`App ${defineClassname()}`}>
      <div className="App__wrapper">
        <Search
          setWeather={globalActions.setWeather}
          setIsFetching={globalActions.setIsFetching}
          language={globalState.language}
        />

        <button type="button" onClick={toggleLanguage}>{globalState.language}</button>

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
