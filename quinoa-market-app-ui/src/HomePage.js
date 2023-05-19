import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage';
import CustomNavbar from './CustomNavbar';
function HomePage() {
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
      <CustomNavbar />
      <LoginPage />
    </div>
  );
}

export default HomePage;
