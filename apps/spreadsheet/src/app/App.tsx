// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';

import { Route, Routes, Link } from 'react-router-dom';
import Spreadsheet from './components/spreadsheet/Spreadsheet';
import { Provider } from 'react-redux';
import store from './store';

export function App() {
  const initialData = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => ({ value: '', isSelected: false }))
  );

  return (
    <Provider store={store}>
      <div>
        <h1>
          <span> Hello there, </span>
          welcome to spreadsheet 👋
        </h1>
        <Spreadsheet initialData={initialData} />
      </div>
    </Provider>
  );
}

export default App;
