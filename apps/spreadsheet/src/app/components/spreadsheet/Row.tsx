import { useSelector } from 'react-redux';
import Cell from './Cell';
import styles from './Spreadsheet.module.css';
import { RootState } from '../../store';

interface RowProps {
  rowIndex: number;
}

function Row({ rowIndex }: RowProps) {
  const cols = useSelector(
    ({ spreadsheet: { data } }: RootState) => data[rowIndex].length
  );

  return (
    <div className={styles.row}>
      {Array.from({ length: cols }, (_, colIndex) => (
        <Cell
          key={`${rowIndex}-${colIndex}`}
          rowIndex={rowIndex}
          colIndex={colIndex}
        />
      ))}
    </div>
  );
}

export default Row;
