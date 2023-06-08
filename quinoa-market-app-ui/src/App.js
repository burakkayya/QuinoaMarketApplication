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
function App() {
  const [loading, setLoading] = useState(true);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/images/13', {
          responseType: 'arraybuffer'
        });

        const base64String = btoa(
          new Uint8Array(response.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        const imageUrl = `data:image/jpeg;base64,${base64String}`;
        setImageData(imageUrl);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchImage();
  }, []);

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
          </Routes>
        </Router>
      </React.StrictMode>

    </div>
  );
}

export default App;
