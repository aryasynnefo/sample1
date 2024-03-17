// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import AppRouter from './Router';
const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/home" element={<Home />} /> 
    //   </Routes>
    // </Router>
    <AppRouter/>
  );
};

export default App;
