import './App.css';
import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import NoPage from './components/NoPage';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const modeContrast = {
  primary: 'dark',
  warning: 'dark',
  success: 'dark',
  danger: 'dark',
  info: 'dark',
  light: 'dark',
  dark: 'light',
  secondary: 'light',
}

function App() {

  let localStorageTheme = localStorage.getItem('themeMode');
  let localValue = (localStorageTheme ? localStorageTheme : 'light');

  const [themeMode, setThemeMode] = useState(localValue);

  const modeOpacity = {
    primary: '25',
    warning: '25',
    success: '25',
    danger: '25',
    info: '25',
    light: '10',
    dark: '75',
    secondary: '75',
  }

  if (themeMode === 'light') {
    localStorage.setItem('themeMode', 'light');
  }
  else {
    localStorage.setItem('themeMode', themeMode);
    window.document.body.className = '';
    window.document.body.classList.add(`bg-opacity-${modeOpacity[themeMode]}`, "bg-" + themeMode);
  }


  const toggleMode = (cls) => {
    setThemeMode(cls);
    window.document.body.className = '';
    window.document.body.classList.add(`bg-opacity-${modeOpacity[cls]}`, "bg-" + cls);
  }
  const [alert, setAlert] = useState(null);
  const initAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={themeMode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to Analyze Below" mode={themeMode} modeContrast={modeContrast} />}>
        </Route>
        <Route exact path="/about" element={<About mode={themeMode} modeContrast={modeContrast} />}>
        </Route>
        <Route exact path="*" element={<NoPage mode={themeMode} modeContrast={modeContrast} />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string,
}
