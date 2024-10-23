import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prefecture, ResasType, Population } from '../../lib/types';
import { ageOptions } from '../../lib/constants';

const initialState: ResasType = {
  prefectures: [],
  selectedLists: [],
  age: ageOptions[0],
  loading: false,
};

export const resasSlice = createSlice({
  name: 'resasReducer',
  initialState,
  reducers: {
    loadInitialPrefectures(state, action: PayloadAction<Prefecture[]>) {
      state.prefectures = action.payload;
      state.loading = false;
    },
    selectPrefecture(state, action: PayloadAction<Population>) {
      state.selectedLists.push(action.payload);
      state.loading = false;
    },
    removePrefecture(state, action: PayloadAction<number>) {
      const selected = state.selectedLists.filter(
        (item: Population) => item.prefCode === action.payload
      );
      const index = state.selectedLists.indexOf(selected[0]);
      state.selectedLists.splice(index, 1);
      state.loading = false;
    },
    filterByAge(state, action: PayloadAction<string>) {
      state.age = action.payload;
      state.loading = false;
    },
    startLoading(state) {
      state.loading = true;
    },
  },
});

export const {
  loadInitialPrefectures,
  selectPrefecture,
  removePrefecture,
  filterByAge,
  startLoading,
} = resasSlice.actions;

export default resasSlice.reducer;
