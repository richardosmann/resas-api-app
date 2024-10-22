import { configureStore } from '@reduxjs/toolkit';
import resasReducer from './resas/resas';

export const store = configureStore({
  reducer: {
    resas: resasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
