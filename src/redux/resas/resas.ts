import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prefecture, ResasType, Population } from '../../lib/types';

const initialState: ResasType = {
  prefectures: [],
  selectedLists: [],
};

export const resasSlice = createSlice({
  name: 'resasReducer',
  initialState,
  reducers: {
    loadInitialPrefectures(state, action: PayloadAction<Prefecture[]>) {
      state.prefectures = action.payload;
    },
    selectPrefecture(state, action: PayloadAction<Population>) {
      state.selectedLists.push(action.payload);
    },
    removePrefecture(state, action: PayloadAction<number>) {
      const selected = state.selectedLists.filter(
        (item: Population) => item.prefCode === action.payload
      );
      const index = state.selectedLists.indexOf(selected[0]);
      state.selectedLists.splice(index, 1);
    },
  },
});

export const { loadInitialPrefectures, selectPrefecture, removePrefecture } =
  resasSlice.actions;

export default resasSlice.reducer;
