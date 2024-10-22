import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prefecture, ResasType } from '../../lib/types';

const initialState: ResasType = {
  prefectures: [],
};

export const resasSlice = createSlice({
  name: 'resasReducer',
  initialState,
  reducers: {
    loadInitialPrefectures(state, action: PayloadAction<Prefecture[]>) {
      state.prefectures = action.payload;
    },
  },
});

export const { loadInitialPrefectures } = resasSlice.actions;

export default resasSlice.reducer;
