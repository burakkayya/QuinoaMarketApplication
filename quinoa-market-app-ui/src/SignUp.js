import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './SignUpStyle.css'; // Stil dosyasını import edin
import CustomNavbar from './CustomNavbar';
import { useNavigate } from 'react-router-dom';
import { FiInfo } from "react-icons/fi";
function SignUp() {
    const navigate = useNavigate();

    function handleClick(path) {
        navigate(path);
    }
    return (
        <>
                <Container>
                    <Row>
                        <Col xs={12} md={2} className="logo-col">
                            <img
                                src="/images/logo.png"
                                width="300"
                                height="200"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Col>
                        <Col xs={12} md={10} className="signup-col">
                            <Row>
                                <Col xs={12} md={8}>
                                    <h1 className="signup-header">SIGN UP</h1>
                                    <p className="signup-description">
                                        Create your own market portfolio in the Quinoa Market. If you want to create a sales Profile, become a member
                                        and add your products to your portfolio. If you just want to review products, you can view popular sellers and
                                        their products without registering.
                                    </p>
                                    <form className="form-container">
                                        <h6>FULL NAME</h6>
                                        <Form.Control type="fullName" placeholder="Name Surname" />
                                        <h6>PASSWORD</h6>
                                        <Form.Control type="password" placeholder="Password" />
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <h6>PHONE NUMBER</h6>
                                                <Form.Control type="phoneNum" placeholder="Phone Number" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <h6>ADDRESS</h6>
                                                <Form.Control type="address" placeholder="Address" />
                                            </div>
                                        </div>
                                        <h6>E-MAIL</h6>
                                        <Form.Control type="email" placeholder="Email" />
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="checkbox" />
                                            <label className="form-check-label" htmlFor="checkbox">
                                                By clicking you agree to the <a href="#">Terms and Conditions</a>
                                            </label>
                                        </div> <div className="button-container">
                                            <Button variant="secondary" className="signup-button" onClick={() => handleClick("/")}>
                                                Sign Up
                                            </Button>
                                            <div className="info-container">
                                                <FiInfo className="info-icon" />
                                                <span className="help-text">Need a help?</span>
                                            </div>
                                        </div>
                                        <div className="divider">
                                            <span className="divider-line"></span>
                                            <span className="divider-text">OR</span>
                                            <span className="divider-line"></span>
                                        </div>
                                        <Button variant="secondary" id="continueButton"
                                            onClick={() => handleClick("/Home")}
                                        >Continue Without Member</Button>
                                    </form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
        </>
    );

};
export default SignUp;