import React, { useEffect, useState } from "react";
import CustomNavbar from "./CustomNavbar";
import Card from 'react-bootstrap/Card';
import './HomePage.css';
import axios from "./axiosConfig";
import UserNavbar from "./UserNavbar";

function HomePage() {
    const [products, setProducts] = useState([]);
    const email = sessionStorage.getItem('email');
    
    useEffect(() => {
        axios.get("/api/products/home-products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);
    
    return (
        <>
            {email ? <UserNavbar /> : <CustomNavbar />}
            <div className="container">
                {Array.from({ length: Math.ceil(products.length / 3) }).map((_, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {products.slice(rowIndex * 3, rowIndex * 3 + 3).map((product) => (
                            <div key={product.id} className="col-xs-12 col-md-4">
                                <Card>
                                    <div className="circle-image">
                                        <Card.Img
                                            variant="top"
                                            src={`data:image/jpg;base64,${product.productPhoto}`}
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{product.predictionName}</Card.Title>
                                        <Card.Text>{product.info}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}
export default HomePage;