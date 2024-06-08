import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CellData {
  value: string;
  isSelected: boolean;
  isEditing: boolean;
}

type RowData = CellData[];

type SpreadsheetData = RowData[];

interface SpreadsheetState {
  data: SpreadsheetData;
  selectedCells: Array<{ row: number; col: number }>;
  editingCell: { row: number; col: number } | null;
}

const initialState: SpreadsheetState = {
  data: [],
  selectedCells: [],
  editingCell: null,
};

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
    selectCell: (
      state,
      { payload: { row, col } }: PayloadAction<{ row: number; col: number }>
    ) => {
      state.selectedCells.push({ row, col });
      state.data[row][col].isSelected = true;
    },
    deselectCell: (
      state,
      { payload: { row, col } }: PayloadAction<{ row: number; col: number }>
    ) => {
      state.selectedCells = state.selectedCells.filter(
        (cell) => cell.row !== row && cell.col !== col
      );
      state.data[row][col].isSelected = false;
    },
    deselectAllCells: (state) => {
      state.selectedCells.forEach((cell) => {
        state.data[cell.row][cell.col].isSelected = false;
      });
      state.selectedCells = [];
    },
    startEditingCell: (
      state,
      { payload: { row, col } }: PayloadAction<{ row: number; col: number }>
    ) => {
      state.editingCell = { row, col };
      state.data[row][col].isEditing = true;
    },
    stopEditingCell: (
      state,
      { payload: { row, col } }: PayloadAction<{ row: number; col: number }>
    ) => {
      if (state.editingCell?.row === row && state.editingCell.col === col) {
        state.editingCell = null;
        state.data[row][col].isEditing = false;
      }
    },
  },
});

export const {
  setSpreadsheet,
  updateCell,
  selectCell,
  deselectAllCells,
  startEditingCell,
  stopEditingCell,
} = spreadsheetSlice.actions;
export default spreadsheetSlice.reducer;
