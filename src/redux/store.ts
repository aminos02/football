import { configureStore } from '@reduxjs/toolkit';
import clubsReducer from './slices/clubsSlice';

export const store = configureStore({
  reducer: {
    clubs: clubsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
