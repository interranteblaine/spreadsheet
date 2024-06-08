import { configureStore } from '@reduxjs/toolkit';
import spreadsheetSlice from './spreadsheetSlice';

const store = configureStore({
  reducer: {
    spreadsheet: spreadsheetSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
