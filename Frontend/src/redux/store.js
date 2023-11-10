import { configureStore } from '@reduxjs/toolkit';
import componentsReducer from './reducers';

const store = configureStore({
  reducer: {
    components: componentsReducer,
    // Add other reducers if you have them
  },
});

export default store;
