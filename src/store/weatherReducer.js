import { api } from '../api/api';

const SET_WEATHER = 'SET_WEATHER';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';

const initialState = {
  weather: {},
  isFetching: false,
  language: 'en',
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    case TOGGLE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

const setWeather = (weather) => ({ type: SET_WEATHER, payload: weather });
const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, payload: isFetching });
export const toggleLanguage = (language) => ({ type: TOGGLE_LANGUAGE, payload: language });

export const searchWeather = (city, language) => async (dispatch) => {
  dispatch(setIsFetching(true));
  const weather = await api.getWeather(city, language);
  dispatch(setWeather(weather));
  dispatch(setIsFetching(false));
};
