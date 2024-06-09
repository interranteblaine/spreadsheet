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
    <tr className={styles.tr}>
      {Array.from({ length: cols }, (_, colIndex) => (
        <Cell
          key={`${rowIndex}-${colIndex}`}
          rowIndex={rowIndex}
          colIndex={colIndex}
        />
      ))}
    </tr>
  );
}

export default Row;
