import './App.css';
import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import NoPage from './components/NoPage';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  // let localStorageTheme = localStorage.getItem('themeMode');
  // let localValue = (localStorageTheme ? localStorageTheme : 'light');

  const [themeMode, setThemeMode] = useState('light');

  // if (themeMode === 'light') {
  //   document.body.classList.remove("bg-dark", "bg-opacity-75");
  // }
  // else {
  //   window.document.body.classList.add("bg-dark", "bg-opacity-75");
  // }

  const toggleMode = (cls) => {
    console.log(cls)
    setThemeMode(cls);
    window.document.body.classList.remove("bg-primary", "bg-danger", "bg-warning", "bg-success", "bg-info", "bg-light", "bg-dark");
    if (themeMode === 'primary') {
      window.document.body.classList.add("bg-primary");
      // localStorage.setItem('themeMode', 'primary');
      window.alert(cls);
    }
    else if (themeMode === 'danger') {
      window.document.body.classList.add("bg-danger", "bg-opacity-25");
      // localStorage.setItem('themeMode', 'danger');
      window.alert(cls);
    }
    else if (themeMode === 'warning') {
      window.document.body.classList.add("bg-warning", "bg-opacity-25");
      // localStorage.setItem('themeMode', 'warning');
      window.alert(cls);
    }
    else if (themeMode === 'success') {
      window.document.body.classList.add("bg-success", "bg-opacity-25");
      // localStorage.setItem('themeMode', 'success');
      window.alert(cls);
    }
    else if (themeMode === 'info') {
      window.document.body.classList.add("bg-info", "bg-opacity-25");
      // localStorage.setItem('themeMode', 'info');
      window.alert(cls);
    }
    else if (themeMode === 'light') {
      window.document.body.classList.add("bg-light", "bg-opacity-25");
      // localStorage.setItem('themeMode', 'info');
      window.alert(cls);
    }
    else {
      document.body.classList.add("bg-dark", "bg-opacity-75");
      // localStorage.setItem('themeMode', 'light');
      window.alert(cls);
    }
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
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to Analyze Below" mode={themeMode} />}>
        </Route>
        <Route exact path="/about" element={<About mode={themeMode} />}>
        </Route>
        <Route exact path="*" element={<NoPage mode={themeMode} />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Company Name'
}