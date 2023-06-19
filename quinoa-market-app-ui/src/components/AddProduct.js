import React, { useState, useRef, useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Container, Row, Col, Image, Button, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import UserNavbar from './UserNavbar';
import quinoaDatas from '../utils/QuinoaData'
import axios from "../config/axiosConfig";
import '../styles/AddProduct.css';

function AddProduct() {
    const [addImage, setAddImage] = useState('./images/addimage.png');
    const fileInputRef = useRef(null);
    const [predictedProduct, setPredictedProduct] = useState('');
    const [selectedStatusValue, setSelectedStatusValue] = useState('In Stock');
    const [productPhoto, setProductPhoto] = useState(null);
    const [info, setInfo] = useState('');
    const farmerId = sessionStorage.getItem('id');
    const [photo, setPhoto] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    const Product = ({ name, description }) => {
        return (
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        );
    };

    const handleDropdownSelect = (eventKey) => {
        setSelectedStatusValue(eventKey);
    };

    const handlePrediction = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post('/api/images/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const predictedProductName = response.data;
            setPredictedProduct(predictedProductName);
            setInfo(quinoaDatas[predictedProductName].description);
        } catch (error) {
            setErrorMessage('An error occurred while predicting the image');
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const arrayBuffer = e.target.result;
            setAddImage(arrayBuffer);
            const byteArray = new Uint8Array(arrayBuffer);
            setProductPhoto(new Blob([byteArray], { type: file.type }));
            handlePrediction(file);
        };
        reader.readAsDataURL(file);
        setPhoto(file);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleAddProduct = async () => {
        try {
            const formData = new FormData();
            formData.append('file', photo, 'productPhoto.jpg');
            const productData = {
                predictionName: predictedProduct,
                stockStatus: selectedStatusValue === 'In Stock',
                farmerId: farmerId,
                info: info,
            };
            formData.append('product', JSON.stringify(productData));
            const response = await axios.post('/api/products/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSuccessMessage('Product added successfully');
        } catch (error) {
            setErrorMessage('An error occurred while adding the product');
        }
    };

    return (
        <>
            <UserNavbar />
            <Container fluid>
                <div className={`success-message ${successMessage ? 'show' : ''}`}>{successMessage}</div>
                <div className={`error-message ${errorMessage ? 'show' : ''}`}>{errorMessage}</div>
                <Row className="justify-content-center mt-5">
                    <Col sm={6} md={6} xs={6} className="d-flex flex-column align-items-center">
                        <div className="profile-info">
                            <Row className="profile-header ">
                                <Col className="pl-0">
                                    {predictedProduct ? predictedProduct && (
                                        <h2>{quinoaDatas[predictedProduct].name}</h2>): <h2>Quinoa Type Head</h2>
                                    }
                                </Col>
                            </Row>
                            <h5 className="mt-4 mb-3">Description</h5>
                            {predictedProduct?predictedProduct && (
                                <p className="fw-normal">{quinoaDatas[predictedProduct].description}</p>):                            <p> Select and upload the photo of your products. The artificial intelligence model determines which type the product belongs to and fills in the necessary information. </p>
                            }
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
                    <Col sm={6} md={6} xs={6} className="d-flex flex-column align-items-center justify-content-center">
                        <div className="nter">
                            <Image src={addImage} fluid style={{ maxWidth: '100%', width: '300px' }} />
                        </div>
                        <div className="">
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
                        <Button id="add-product-button" className='text-center pt-2' onClick={handleAddProduct}>
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
