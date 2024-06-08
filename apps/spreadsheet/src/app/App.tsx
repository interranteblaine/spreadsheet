// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';

import { Route, Routes, Link } from 'react-router-dom';
import Spreadsheet from './components/spreadsheet/Spreadsheet';
import { Provider } from 'react-redux';
import store from './store';
import { useEffect, useState } from 'react';
import Button from './components/button/Button';

export function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.add(`${theme}-theme`);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${newTheme}-theme`);
  };

  const initialData = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => ({
      value: '',
      isSelected: false,
      isEditing: false,
    }))
  );

  return (
    <Provider store={store}>
      <nav className={`${styles.navbar}`}>
        <h1>
          <span> Hello there, </span>
          welcome to spreadsheet 👋
        </h1>
        <Button variant="primary" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </nav>
      <main className={styles.content}>
        <Spreadsheet initialData={initialData} />
      </main>
    </Provider>
  );
}

export default App;
