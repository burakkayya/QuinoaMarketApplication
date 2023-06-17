import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage';
import CustomNavbar from './CustomNavbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import PopularSellers from './PopularSellers';
import Profile from './Profile';
import About from './About';
import AddProduct from './AddProduct';
import SignUp from './SignUp';
import PopularSellersProfile from './PopularSellersProfile';

function App() {
  return (
    <div className="Home">
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Populars" element={<PopularSellers />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/About" element={<About />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/PopularSellerProfile/:id" element={<PopularSellersProfile />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
