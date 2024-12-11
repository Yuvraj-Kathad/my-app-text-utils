import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", 'success');
      // document.title = "TextUtils - Dark Mode"
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", 'success');
      // document.title = "TextUtils - Light Mode"
    }
    // setInterval(() => {
    //   document.title = 'TextUtils is Amazing Functanalitiy!'
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install TextUtils now!'
    // }, 1500);
  };

  return (
    <> 
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils" />

        <Alert alert={alert} />

        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter your text below" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>  
      </Router>
    </>
  );
}

export default App;
