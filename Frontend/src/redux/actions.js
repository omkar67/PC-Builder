import { createAction } from '@reduxjs/toolkit';

export const setCPU = createAction('components/setCPU', (value) => {
  return {
    payload: value,
  };
});

export const setGPU = createAction('components/setGPU', (value) => {
  return {
    payload: value,
  };
});
export const setMOBO = createAction('components/setMOBO', (value) => {
    return {
      payload: value,
    };
  });
  export const setCase = createAction('components/setCase', (value) => {
    return {
      payload: value,
    };
  });
  export const setRAM = createAction('components/setRAM', (value) => {
    return {
      payload: value,
    };
  });
  export const setStorage = createAction('components/setStore', (value) => {
    return {
      payload: value,
    };
  });
  export const setPSU = createAction('components/setPSU', (value) => {
    return {
      payload: value,
    };
  });

// Define similar actions for the other state variables
