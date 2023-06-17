import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Modal, Form, Alert } from 'react-bootstrap';
import { IoMdCreate, IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from './axiosConfig';
import UserNavbar from './UserNavbar';
import './Profile.css';

function Profile() {
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState(sessionStorage.getItem('id'));
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const uniquePredictionNames = [];

    useEffect(() => {
        setEmail(sessionStorage.getItem('email'));
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`/api/farmers/${id}`);
                const { name, surname, address, phoneNo, email, profilePhoto, products } = response.data;
                setName(name);
                setSurname(surname);
                setAddress(address);
                setPhone(phoneNo);
                setEmail(email);
                setProfilePhoto(profilePhoto);
                setProducts(products);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfileData();
    }, []);

    const handleSave = async (event) => {

        setShowModal(false);
    };

    const handlePhotoUpload = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64Photo = e.target.result;
            const croppedPhoto = base64Photo.substring(base64Photo.indexOf(',') + 1);
            setProfilePhoto(croppedPhoto);
        };
        await updateProfilePhoto(file);
        reader.readAsDataURL(file);
    };

    const updateProfilePhoto = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const response = await axios.put(`/api/farmers/update-profile-photo/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            setError('An error occured while updating profile photo');
            console.error(error);
        }
    }

    const toggleStockStatus = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => {
                if (product.id === productId) {
                    return { ...product, stockStatus: !product.stockStatus };
                }
                return product;
            })
        );
    };

    return (
        <>
            <UserNavbar />
            <Container fluid>
                <Row className="justify-content-center">
                    <Col sm={4} className="align-items-center justify-content-center">
                        <div className="profile-photo">
                            <Image id="profile-image" src={`data:image/jpg;base64,${profilePhoto}`} roundedCircle fluid style={{ width: '250px' }} />
                        </div>
                    </Col>
                    <Col sm={7} className="flex-column align-items-center">
                        <div className="profile-info">
                            <Row className="profile-header d-flex align-items-center">
                                <Col className="pl-0">
                                    <h3 style={{ marginTop: '10px' }}>Account</h3>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <IoMdCreate
                                        className="edit-icon ml-auto"
                                        size={30}
                                        onClick={() => setShowModal(true)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </Col>
                            </Row>
                            <div className="profile-details" style={{ marginTop: '20px' }}>
                                <p>
                                    <span className="label">Name:</span> {name}
                                </p>
                                <p>
                                    <span className="label">Surname:</span> {surname}
                                </p>
                                <p>
                                    <span className="label">Address:</span> {address}
                                </p>
                                <p>
                                    <span className="label">Phone:</span> {phone}
                                </p>
                                <p>
                                    <span className="label">Email:</span> {email}
                                </p>
                            </div>
                            <h3 style={{ marginTop: '30px' }}>My Products</h3>
                            <Row className="products">
                                {products.map((product) => {
                                    if (!uniquePredictionNames.includes(product.predictionName)) {
                                        uniquePredictionNames.push(product.predictionName);
                                        return (
                                            <Col sm={6} key={product.id}>
                                                <div className="product-item">
                                                    <Form.Check
                                                        type="checkbox"
                                                        id={`product-${product.id}`}
                                                        label={product.predictionName}
                                                        checked={product.stockStatus}
                                                        onChange={() => toggleStockStatus(product.id)}
                                                        custom
                                                        inline
                                                    />
                                                </div>
                                            </Col>
                                        );
                                    }
                                })}
                            </Row>
                            <Link to="/AddProduct">
                                <Button
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    Add Product
                                    <IoIosAdd size={30} style={{ marginLeft: '8px' }} />
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Surname</Form.Label>
                                <Form.Control type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Profile Photo</Form.Label>
                                <Form.Control type="file" accept="image/*" onChange={handlePhotoUpload} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container >
        </>
    );
}

export default Profile;
