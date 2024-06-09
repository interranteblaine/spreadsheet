import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setThemeMode: (
      state,
      { payload: { mode } }: PayloadAction<{ mode: ThemeMode }>
    ) => {
      state.mode = mode;
    },
  },
});

export const { toggleThemeMode, setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
