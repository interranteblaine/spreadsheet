// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './Spreadsheet.module.css';
import Row from '../row/Row';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setSpreadsheet } from '../../store/spreadsheetSlice';

interface SpreadsheetProps {
  initialData: RootState['spreadsheet']['data'];
}

function Spreadsheet({ initialData }: SpreadsheetProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSpreadsheet(initialData));
  }, [dispatch, initialData]);

  const rows = useSelector(
    ({ spreadsheet: { data } }: RootState) => data.length
  );

  return (
    <div>
      {Array.from({ length: rows }, (_, rowIndex) => (
        <Row key={rowIndex} rowIndex={rowIndex} />
      ))}
    </div>
  );
}

export default Spreadsheet;
