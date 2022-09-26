/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prevUrl: '',
  curUrl: '',
};

const urlPathSlice = createSlice({
  name: 'urlPath',
  initialState,
  reducers: {
    setPath: (state, { payload }) => {
      state.prevUrl = state.curUrl;
      state.curUrl = payload;
    },
  },
});

export default urlPathSlice.reducer;
export const { setPath } = urlPathSlice.actions;
