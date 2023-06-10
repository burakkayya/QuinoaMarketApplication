import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from './axiosConfig';
import './SignUpStyle.css';

function SignUp() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const navigate = useNavigate();

    function handleClick(path) {
        navigate(path);
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        const data = {
            name: name,
            surname: surname,
            password: password,
            phoneNo: phoneNo,
            address: address,
            email: email
        };
        try {
            const response = await axios.post('/api/sign-up', data);
            if (response.status === 200) {
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            setError('An error occured while signing up!');
        }
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
                    <Col xs={12} md={8} className="signup-col">
                        <Row>
                            <Col xs={12} md={8}>
                                <h1 className="signup-header">SIGN UP</h1>
                                <p className="signup-description">
                                    Create your own market portfolio in the Quinoa Market. If you want to create a sales Profile, become a member
                                    and add your products to your portfolio. If you just want to review products, you can view popular sellers and
                                    their products without registering.
                                </p>
                                <Form className="form-container" onSubmit={handleSignUp}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <h6>NAME</h6>
                                            <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <h6>SURNAME</h6>
                                            <Form.Control type="text" placeholder="Surname" onChange={(e) => setSurname(e.target.value)} required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <h6>PHONE NUMBER</h6>
                                            <Form.Control type="phoneNum" placeholder="Phone Number" onChange={(e) => setPhoneNo(e.target.value)} required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <h6>ADDRESS</h6>
                                            <Form.Control type="address" placeholder="Address" onChange={(e) => setAddress(e.target.value)} required />
                                        </div>
                                    </div>
                                    <h6>E-MAIL</h6>
                                    <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                                    <h6>PASSWORD</h6>
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="checkbox" onChange={(e) => setAgreeTerms(e.target.checked)} />
                                        <label className="form-check-label" htmlFor="checkbox">
                                            By clicking you agree to the <a href="#">Terms and Conditions</a>
                                        </label>
                                    </div>
                                    <div className="button-container">
                                        <Button variant="secondary" className="signup-button" type='submit' disabled={!agreeTerms}>
                                            Sign Up
                                        </Button>
                                        <div className="divider"></div>
                                        <Button variant="secondary" id="continueButton"
                                            onClick={() => handleClick("/Home")}
                                        >Continue Without Member</Button>
                                    </div>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );

};
export default SignUp;