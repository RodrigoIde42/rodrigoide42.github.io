import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/nav';
import Home from './components/Home';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ScrollToTop from './utils/scrollToTop';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Router>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
