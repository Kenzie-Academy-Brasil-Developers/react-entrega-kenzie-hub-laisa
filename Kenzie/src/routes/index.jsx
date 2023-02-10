import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login/index';
import Register from '../pages/Register';

const AppRoutes = () => 
{
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
  )
}

export default AppRoutes;