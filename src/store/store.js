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
};

export const useGlobal = globalHook(React, initialState, actions);
