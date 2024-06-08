import { useDispatch, useSelector } from 'react-redux';
import styles from './Cell.module.css';
import React from 'react';
import { RootState } from '../../store';
import { toggleSelectCell, updateCell } from '../../store/spreadsheetSlice';

interface CellProps {
  rowIndex: number;
  colIndex: number;
}

function Cell({ rowIndex, colIndex }: CellProps) {
  const dispatch = useDispatch();
  const cell = useSelector(
    ({ spreadsheet: { data } }: RootState) => data[rowIndex][colIndex]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCell({ row: rowIndex, col: colIndex, value: e.target.value })
    );
  };

  const handleSelect = () => {
    dispatch(toggleSelectCell({ row: rowIndex, col: colIndex }));
  };

  console.log(`${rowIndex}-${colIndex} renders`);

  return (
    <input
      type="text"
      value={cell.value}
      onChange={handleChange}
      onClick={handleSelect}
      className={`${styles.input} ${
        cell.isSelected ? styles.selected : styles.unselected
      }`}
    />
  );
}

export default Cell;
