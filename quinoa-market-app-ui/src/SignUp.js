import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from './axiosConfig';
import CustomNavbar from './CustomNavbar';
import './SignUpStyle.css';

function SignUp() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [photo, setPhoto] = useState('./images/profilephoto.jpg');
    const fileInputRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (successMessage) {
          const timer = setTimeout(() => {
            setSuccessMessage('');
            navigate('/');
          }, 2000);
      
          return () => clearTimeout(timer);
        }
      }, [successMessage, navigate]);

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    useEffect(() => {
        fetch(photo)
            .then((response) => response.blob())
            .then((blob) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64Photo = reader.result;
                    setPhoto(base64Photo);
                };
                reader.readAsDataURL(blob);
            })
            .catch((error) => {
                console.error('An error occurred while fetching the default photo:', error);
            });
    }, []);

    function handleClick(path) {
        navigate(path);
    }

    const handleProfilePhotoButtonClick = () => {
        fileInputRef.current.click();
    };

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Photo = e.target.result;
            setPhoto(base64Photo);
        };
        reader.readAsDataURL(file);
    };

    const handleSignUp = async (event) => {
        event.preventDefault();

        const farmerData = {
            name: name,
            surname: surname,
            password: password,
            phoneNo: phoneNo,
            address: address,
            email: email,
            profilePhoto: photo
        };
        try {
            const response = await axios.post('/api/sign-up', farmerData)
            if (response.status === 200) {
                setSuccessMessage('Successfully signed up. Navigating to login page...');
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('An error occured while signing up');
        }
    }

    return (
        <>
            <CustomNavbar />
            <Container>
                <div className={`success-message ${successMessage ? 'show' : ''}`}>{successMessage}</div>
                <div className={`error-message ${errorMessage ? 'show' : ''}`}>{errorMessage}</div>
                <Row>
                    <Col xs={12} md={2}>
                        <img
                            src={photo}
                            height="200"
                            width="230"
                            className="photo-col"
                            alt="profile photo"
                        />
                        <Button variant="secondary" className="profile-photo-button" onClick={handleProfilePhotoButtonClick}>
                            Choose Photo
                        </Button>
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handlePhotoUpload}
                        />
                    </Col>
                    <Col xs={12} md={8} className="signup-col">
                        <Row>
                            <Col xs={12} md={8}>
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