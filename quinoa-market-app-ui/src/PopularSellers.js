import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoIosArrowForward } from 'react-icons/io';
import CustomNavbar from './CustomNavbar';
import UserNavbar from './UserNavbar';
import './PopularSellers.css';
import axios from './axiosConfig';

function PopularSellers() {
    const [topSellers, setTopSellers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const email = sessionStorage.getItem('email');
    
    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    useEffect(() => {
        axios.get('/api/farmers/getTopFarmersWithMostProducts')
            .then(response => {
                const sellers = response.data.map(seller => ({
                    ...seller,
                }));
                setTopSellers(sellers);
            })
            .catch(error => {
               setErrorMessage("An error occured while receiving popular sellers");
            });
    }, []);

    return (
        <>
            {email ? <UserNavbar /> : <CustomNavbar />}
            <Container className='header'>
                <div className={`error-message ${errorMessage ? 'show' : ''}`}>{errorMessage}</div>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 className="title-line" style={{ fontFamily: 'Poppins, sans-serif' }}>TOP SELLERS</h1>
                    </Col>
                    <Col xs lg="5">
                        <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Reach out to the most popular quinoa growers and view their profile and contact the seller for the seeds you need!
                        </p>
                    </Col>
                </Row>
            </Container>

            <Row xs={1} md={3} className="g-4">
                {topSellers.map(seller => (
                    <Col key={seller.id}>
                        <Card>
                            <div className="circle-image">
                                <Card.Img variant="top" src={`data:image/jpg;base64,${seller.profilePhoto}`} />
                            </div>
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'Poppins, sans-serif' }}>{seller.name} {seller.surname}</Card.Title>
                                <Link to={`/PopularSellerProfile/${seller.id}`} className="card-link">
                                    Learn More
                                    <IoIosArrowForward style={{ marginLeft: '5px', verticalAlign: 'middle' }} size={18} />
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default PopularSellers;
