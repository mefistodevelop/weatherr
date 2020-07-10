import React from 'react';
import globalHook from 'use-global-hook';

const initialState = {
  weather: {},
  isFetching: false,
  language: 'en',
};

const actions = {
  setWeather: (store, weather) => {
    store.setState({ weather });
  },
  setIsFetching(store, isFetching) {
    store.setState({ isFetching });
  },
  toggleLang(store, language) {
    store.setState({ language });
  },
};

export const useGlobal = globalHook(React, initialState, actions);
