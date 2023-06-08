import React, { useState, useRef } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Container, Row, Col, Image, Button, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import CustomNavbar from './CustomNavbar';
import './AddProduct.css';

function AddProduct() {
    const [productName, setProductName] = useState('Yellow Armellilio Secaco');
    const [productDescription, setProductDescription] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.');
    const [addImage, setAddImage] = useState('./images/addimage.png');
    const [selectedStatusValue, setSelectedStatusValue] = useState('Stock Status');
    const fileInputRef = useRef(null);

    const handleDropdownSelect = (eventKey) => {
        setSelectedStatusValue(eventKey);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setAddImage(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <CustomNavbar />
            <Container fluid>
                <Row className="justify-content-around mt-5">
                    <Col sm={12} md={6} className="d-flex flex-column align-items-center">
                        <div className="profile-info">
                            <Row className="profile-header ">
                                <Col className="pl-0">
                                    <h2>{productName}</h2>
                                </Col>
                            </Row>
                            <h5 className="mt-4 mb-3">Description</h5>
                            <p className="fw-normal">{productDescription}</p>
                            <InputGroup>
                                <DropdownButton
                                    className="stockButton"
                                    as={InputGroup.Append}
                                    variant="outline-secondary"
                                    title={selectedStatusValue}
                                    id="input-group-dropdown-2"
                                    onSelect={handleDropdownSelect}
                                >
                                    <Dropdown.Item eventKey="In Stock">In Stock</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="Out of Stock">Out of Stock</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <Image src={addImage} fluid style={{ maxWidth: '100%', width: '300px' }} />

                        </div>
                        <div className="d-flex  align-items-center justify-content-center">
                            <Button id='select-image-button' variant="primary" onClick={handleButtonClick} className="mt-3">
                                <div>
                                    Select Image
                                    <BsFillArrowUpCircleFill style={{ marginLeft: '8px' }} />
                                </div>
                            </Button>
                        </div>
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                        />
                    </Col>


                </Row>
                <Row xs={6} md={6} className="d-flex flex-column align-items-center justify-content-center">
                    <div className='d-flex align-items-center justify-content-center'>
                        <Button id="add-product-button" className='text-center pt-2'>
                            Add Product
                            <IoIosAdd size={30} style={{ marginLeft: '8px' }} />
                        </Button>
                    </div>
                </Row>
            </Container >
        </>
    );
}

export default AddProduct;
