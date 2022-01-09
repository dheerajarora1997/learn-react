import './App.css';
import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [themeMode, setThemeMode] = useState('light');
  const toggleMode = () => {
    // setInterval(() => {
    //   document.title = 'Text Utils';
    // }, 2000);
    if (themeMode === 'light') {
      setThemeMode('dark');
      document.body.classList.add("bg-dark", "bg-opacity-75");
      initAlert('Dark mode has been Enabled', 'light');
      document.title = 'Text Utils - Dark Mode';
    }
    else {
      setThemeMode('light');
      document.body.classList.remove("bg-dark", "bg-opacity-75");
      initAlert('Light mode has been Enabled', 'dark')
      document.title = 'Text Utils - Light Mode'
    }
  }
  const [alert, setAlert] = useState(null);
  const initAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert('');
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={themeMode} toggleMode={toggleMode} />
        <div className="container">
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to Analyze Below" mode={themeMode} initAlert={initAlert} />}>
            </Route>
            <Route path="/about" element={<About mode={themeMode}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Company Name'
}