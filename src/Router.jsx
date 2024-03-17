import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} /> 
        {/* <Route path="*" element={<Login/>} />  */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
