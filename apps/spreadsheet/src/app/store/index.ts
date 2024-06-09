import { configureStore } from '@reduxjs/toolkit';
import spreadsheetSlice from './spreadsheetSlice';
import themeSlice from './themeSlice';

const store = configureStore({
  reducer: {
    spreadsheet: spreadsheetSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
