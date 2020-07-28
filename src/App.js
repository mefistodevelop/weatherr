import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Search } from './components/Search/Search';
import Spinner from './components/Spinner/Spinner';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { searchWeather } from './store/weatherReducer';

function App() {
  const weatherState = useSelector((state) => state.weather);
  const isFetching = useSelector((state) => state.isFetching);
  const language = useSelector((state) => state.language);
  const currentCity = useSelector((state) => state.weather.name);
  const dispatch = useDispatch();

  const isWeatherDefined = () => {
    if (Object.keys(weatherState).length !== 0) {
      return true;
    }
    return false;
  };

  const defineClassname = () => {
    if (!isWeatherDefined()) return '';

    let className = '';
    const weatherStatus = weatherState.weather[0].main.toLowerCase();
    const temperature = Math.round(weatherState.main.temp);

    if (weatherStatus === 'rain' || weatherStatus === 'clouds') className = weatherStatus;

    if (temperature >= 28) {
      className = 'hot';
    } else if (temperature <= 5) {
      className = 'cold';
    }

    return className;
  };

  const updateWeather = () => {
    if (currentCity) dispatch(searchWeather(currentCity, language));
  };

  useEffect(() => {
    updateWeather();
    // eslint-disable-next-line
  }, [language]);

  return (
    <div className={`App ${defineClassname()}`}>
      <Header language={language} />
      <div className="App__wrapper">
        <Search language={language} />

        {isFetching
          ? <Spinner size={100} />
          : (
            <Content store={weatherState} isWeatherDefined={isWeatherDefined} />
          )}
      </div>
    </div>
  );
}

export default App;
