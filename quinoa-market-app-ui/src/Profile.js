import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Modal, Form } from 'react-bootstrap';
import { IoMdCreate, IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import './Profile.css';
import UserNavbar from './UserNavbar';

function Profile() {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('John');
    const [surname, setSurname] = useState('Doe');
    const [address, setAddress] = useState('123 Main St');
    const [phone, setPhone] = useState('555-1234');
    const [email, setEmail] = useState('johndoe@example.com');
    const [profilePhoto, setProfilePhoto] = useState('./images/ProfilePhoto2.png');
    const [products, setProducts] = useState([
        { id: 1, name: 'Yellow Armellio Secao', inStock: true },
        { id: 2, name: 'Kankolla', inStock: false },
        { id: 3, name: 'Ilpania', inStock: true },
        { id: 4, name: 'Inia Snta Ana', inStock: true },
        { id: 5, name: 'Black Nefra Colleano', inStock: false },
        { id: 6, name: 'Hv', inStock: true },
    ]);

    const handleSave = () => {
        // Save updated profile information here
        setShowModal(false);
    };

    const handleProfilePhotoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setProfilePhoto(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const toggleStockStatus = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => {
                if (product.id === productId) {
                    return { ...product, inStock: !product.inStock };
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
                    <Col sm={4} className="d-flex align-items-center justify-content-center">
                        <div className="profile-photo">
                            <Image src={profilePhoto} roundedCircle fluid style={{ width: '250px' }} />
                        </div>
                    </Col>
                    <Col sm={7} className="d-flex flex-column align-items-center">
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
                            <Row>
                                {products.map((product) => (
                                    <Col sm={6} key={product.id}>
                                        <div className="product-item">
                                            <Form.Check
                                                type="checkbox"
                                                id={`product-${product.id}`}
                                                label={product.name}
                                                checked={product.inStock}
                                                onChange={() => toggleStockStatus(product.id)}
                                                custom
                                                inline
                                            />
                                        </div>
                                    </Col>
                                ))}
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
                                <Form.Control type="file" accept="image/*" onChange={handleProfilePhotoChange} />
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
