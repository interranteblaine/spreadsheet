import { useDispatch, useSelector } from 'react-redux';
import styles from './Spreadsheet.module.css';
import React, { useRef } from 'react';
import { RootState } from '../../store';
import {
  deselectAllCells,
  selectCell,
  startEditingCell,
  stopEditingCell,
  updateCell,
} from '../../store/spreadsheetSlice';

interface CellProps {
  rowIndex: number;
  colIndex: number;
}

function Cell({ rowIndex, colIndex }: CellProps) {
  const dispatch = useDispatch();
  const cell = useSelector(
    ({ spreadsheet: { data } }: RootState) => data[rowIndex][colIndex]
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCell({ row: rowIndex, col: colIndex, value: e.target.value })
    );
  };

  const handleClick = () => {
    dispatch(deselectAllCells());
    dispatch(selectCell({ row: rowIndex, col: colIndex }));
  };

  const handleDoubleClick = () => {
    dispatch(startEditingCell({ row: rowIndex, col: colIndex }));
  };

  const handleBlur = () => {
    dispatch(stopEditingCell({ row: rowIndex, col: colIndex }));
  };

  let className = styles.td;
  if (cell.isEditing) className += ` ${styles.editing}`;
  if (cell.isSelected) className += ` ${styles.selected}`;

  return (
    <td
      className={className}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <input
        ref={inputRef}
        type="text"
        value={cell.value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={className}
        readOnly={!cell.isEditing}
      />
    </td>
  );
}

export default Cell;
