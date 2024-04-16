import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Admin/register/Register';
import Home from './pages/Admin/home/Dashboard';
import Login from './pages/Admin/login/Login';
import Welcome from './pages/User/welcome/Welcome';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
