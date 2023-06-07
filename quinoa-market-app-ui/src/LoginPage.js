import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './LoginPageStyle.css'; // Stil dosyasını import edin
import CustomNavbar from './CustomNavbar';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();
    function handleClick(path) {
        navigate(path);
    }

     function login(){

     }

    return (
        <>
            <CustomNavbar />
            <div className='body'> 
            <div id='loginCollaps' className='d-flex justify-content-evenly '>
                <div className="login-page">
                    <div className="login-page-box">
                        <Container className="100vh">
                            <Row className="justify-content-center align-items-center h-100">
                                <Col xs={12} sm={8} md={6} lg={8}>
                                    <Form>
                                        <h2 id='SeedHeader' className="mb-6">SEED</h2>
                                        <h2 id='MarketHeader' className="mb-6">MARKET</h2>
                                        <p id='slogan'>Add the freshest and best quality seeds to your portfolio! </p>

                                        <Form.Control type="email" placeholder="Enter email" />

                                        <Form.Control type="password" placeholder="Password" />

                                        <Button variant="secondary" className="mr-4" type="submit">
                                            Sign In
                                        </Button>
                                        <Button variant="secondary" className="mr-4">
                                            Sign Up
                                        </Button>
                                        <div className="divider">
                                            <span className="divider-line"></span>
                                            <span className="divider-text">OR</span>
                                            <span className="divider-line"></span>
                                        </div>
                                        <Button variant="secondary" id="continueButton"
                                            onClick={() => handleClick("Home")}
                                        >Continue Without Member</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                <div className='right-image'>
                    <img
                        src="/images/quinoa.avif"
                        width="750"
                        height="500"
                        className="d-inline-block align-top"
                        alt="Quinoa"
                        style={{
                            marginLeft: '-10%',
                            borderRadius: '20%',
                            position: 'relative',
                            top: '30px',
                            filter: 'brightness(50%)',// Solgunluk efekti uygulanıyor
                            boxShadow: '10px 4px 8px rgba(0, 0, 0.5, 0.5)', // Gölge efekti uygulanıyor
                        }}
                    />
                </div>
            </div>
            </div>
        </>

    );
};

export default LoginPage;
