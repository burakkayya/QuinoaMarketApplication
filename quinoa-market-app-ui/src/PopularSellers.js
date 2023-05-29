import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoIosArrowForward } from 'react-icons/io'; // Importing the arrow icon
import CustomNavbar from './CustomNavbar';
import './PopularSellers.css';

function PopularSellers() {
    return (
        <>
            <CustomNavbar />
            <Container className='header'>
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
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <div className="circle-image">
                                <Card.Img variant="top" src="./images/ProfilePhoto.avif" />
                            </div>
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'Poppins, sans-serif' }}>Alex Guerrero</Card.Title>
                                <Card.Link className="card-link">
                                    Learn More
                                    <IoIosArrowForward style={{ marginLeft: '5px', verticalAlign: 'middle' }} size={18} />
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default PopularSellers;
