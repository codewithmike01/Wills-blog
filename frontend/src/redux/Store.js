import { configureStore } from '@reduxjs/toolkit';
import urlPathSlice from './features/urlPathSlice';

const store = configureStore({
  reducer: {
    urlPath: urlPathSlice,
  },
});

export default store;
