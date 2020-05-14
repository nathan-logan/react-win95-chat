import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import UserProvider from './providers/UserProvider';

import HomePage from './views/HomePage';
import Login from './views/Login';
import Register from './views/Register';

import './assets/scss/main.scss';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
