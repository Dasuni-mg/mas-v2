import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home1 from './components/Home1';
import Login from './components/Login';
import Support from './components/Support';
import Tours from './components/Tours';
import Users from './components/Users';
import CreateShedule from './components/CreateShedule';
import Analytics from './components/Analytics';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
      <Route path="tours" element={<Home1 />} />
      <Route path="createshedule" element={<CreateShedule />} />
      <Route path="login" element={<Login />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="meetings" element={<Tours />} />
      <Route path="support" element={<Support />} />
      <Route path="users" element={<Users />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
