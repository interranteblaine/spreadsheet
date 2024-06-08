import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CellData {
  value: string;
  isSelected: boolean;
}

type RowData = CellData[];

type SpreadsheetData = RowData[];

interface SpreadsheetState {
  data: SpreadsheetData;
}

const initialState: SpreadsheetState = { data: [] };

const spreadsheetSlice = createSlice({
  name: 'spreadsheet',
  initialState,
  reducers: {
    setSpreadsheet: (state, { payload }: PayloadAction<SpreadsheetData>) => {
      state.data = payload;
    },
    updateCell: (
      state,
      {
        payload: { row, col, value },
      }: PayloadAction<{ row: number; col: number; value: string }>
    ) => {
      state.data[row][col].value = value;
    },
    toggleSelectCell: (
      state,
      { payload: { row, col } }: PayloadAction<{ row: number; col: number }>
    ) => {
      state.data[row][col].isSelected = !state.data[row][col].isSelected;
    },
  },
});

export const { setSpreadsheet, updateCell, toggleSelectCell } =
  spreadsheetSlice.actions;
export default spreadsheetSlice.reducer;
