import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import UserNavbar from './UserNavbar';
import axios from './axiosConfig';
import './Profile.css';

function PopularSellersProfile() {
    const { id } = useParams();
    const [popularSeller, setPopularSeller] = useState(null);
    const email = sessionStorage.getItem('email');

    useEffect(() => {
        axios.get(`/api/farmers/${id}`)
            .then(response => {
                setPopularSeller(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    if (!popularSeller) {
        return <div>Loading...</div>;
    }

    const productsChunks = [];
    for (let i = 0; i < popularSeller.products.length; i += 3) {
        const chunk = popularSeller.products.slice(i, i + 3);
        productsChunks.push(chunk);
    }

    return (
        <>
            {email ? <UserNavbar /> : <CustomNavbar />}
            <Container fluid>
                <Row className="justify-content-center">
                    <Col sm={4} className="d-flex align-items-center justify-content-center">
                        <div className="profile-photo">
                            <Image src={`data:image/jpg;base64,${popularSeller.profilePhoto}`} roundedCircle fluid style={{ width: '250px' }} />
                        </div>
                    </Col>
                    <Col sm={7} className="d-flex flex-column align-items-center">
                        <div className="profile-info">
                            <Row className="profile-header d-flex align-items-center">
                                <Col className="pl-0">
                                    <h3 style={{ marginTop: '10px' }} className='fs-2'>{popularSeller.name} {popularSeller.surname}</h3>
                                </Col>
                            </Row>
                            <div className="profile-details" style={{ marginTop: '20px' }}>
                                <p>
                                    <span className="label fs-6">Address:</span> {popularSeller.address}
                                </p>
                                <p>
                                    <span className="label fs-6">Phone:</span> {popularSeller.phoneNo}
                                </p>
                                <p>
                                    <span className="label fs-6">Email:</span> {popularSeller.email}
                                </p>
                            </div>
                            <h3 style={{ marginTop: '30px' }} className='fs-2'>Products</h3>
                            {productsChunks.map((chunk, index) => (
                                <Row key={index}>
                                    {chunk.map((product) => (
                                        <Col sm={6} key={product.id}>
                                            <div className="product-item">
                                                <Form.Check
                                                    type="checkbox"
                                                    id={`product-${product.id}`}
                                                    label={product.predictionName}
                                                    checked = {true}
                                                    onChange={() => { }}
                                                    custom
                                                    inline
                                                />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PopularSellersProfile;
