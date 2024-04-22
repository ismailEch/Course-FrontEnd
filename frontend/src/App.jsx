import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Admin/register/Register';
import Login from './pages/Admin/login/Login';
import Welcome from './pages/User/welcome/Welcome';
import Dashboard from './pages/Admin/home/Dashboard';
import Users from './pages/Admin/Users/Users';
import Teachers from './pages/Admin/Teachers/Teachers';
import Plan from './pages/Admin/Plan/Plan';
import Categories from './pages/Admin/Categories/Categories';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* admin routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/teachers" element={<Teachers />} />
        <Route path="/admin/plans" element={<Plan />} />
        <Route path="/admin/categories" element={<Categories />} />

      </Routes>
    </BrowserRouter>            
  );
};

export default App;
