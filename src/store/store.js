import React from 'react';
import globalHook from 'use-global-hook';

const initialState = {
  weather: {},
  isFetching: false,
};

const actions = {
  setWeather: (store, weather) => {
    store.setState({ weather });
  },
  setIsFetching(store, isFetching) {
    store.setState({ isFetching });
  },
};

export const useGlobal = globalHook(React, initialState, actions);
