import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import PopularSellers from './components/PopularSellers';
import Profile from './components/Profile';
import About from './components/About';
import AddProduct from './components/AddProduct';
import SignUp from './components/SignUp';
import PopularSellersProfile from './components/PopularSellersProfile';

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
