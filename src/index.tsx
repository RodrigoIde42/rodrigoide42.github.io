import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Navbar/nav';
import Home from './Home';
import Resume from './Resume';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
