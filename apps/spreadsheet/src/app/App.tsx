// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';

import { Route, Routes, Link } from 'react-router-dom';
import Spreadsheet from './components/spreadsheet/Spreadsheet';
import Button from './components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { toggleThemeMode } from './store/themeSlice';
import { useEffect } from 'react';

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${theme.mode}-theme`);
  }, [theme.mode]);

  const handleToggle = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <Button variant="primary" onClick={handleToggle}>
      {theme.mode === 'light' ? 'Dark' : 'Light'} Theme
    </Button>
  );
}

export function App() {
  const initialData = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => ({
      value: '',
      isSelected: false,
      isEditing: false,
    }))
  );

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>
          <span> Hello there, </span>
          welcome to spreadsheet 👋
        </h1>
        <nav className={styles.nav}>
          <ThemeSwitcher />
        </nav>
      </header>
      <main className={styles.main}>
        <Spreadsheet initialData={initialData} />
      </main>
    </div>
  );
}

export default App;
