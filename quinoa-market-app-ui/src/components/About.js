import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillPersonCheckFill, BsPencilFill, BsFileImageFill, BsUiChecks, BsFillPeopleFill } from 'react-icons/bs';
import CustomNavbar from './CustomNavbar';
import '../styles/About.css';

function About() {
    return (
        <>
            <CustomNavbar />
            <Container fluid className="mt-5">
                <Row className='justify-content-center items-center '>
                    <Col sm={5} className='text-center'>
                        <h3> Add the freshest and best quality seeds to your portfolio!</h3>
                    </Col>
                </Row>
                <Row className='justify-content-center items-center '>
                    <Col sm={7} className='text-center'>
                        <p className='text-secondary pt-3'> Create your own market portfolio in the Quinoa Market. If you want to create a sales profile, became a member and add your products to your portfolio. If you just want to review products, you can view popular sellers and their products without registering!</p>
                    </Col>
                </Row>
                <Row className="justify-content-center  pt-5" >
                    <Col sm={2} className=" text-center icon-column d-flex align-items-center justify-content-center">
                        <div className="icon-div">
                            <BsFillPersonCheckFill className="icon" />
                        </div>
                        <div>
                            <p className='pt-2 '>Sign Up</p>
                        </div>
                    </Col>
                    <Col sm={2} className=" text-center icon-column d-flex align-items-center justify-content-center">
                        <div className="icon-div">
                            <BsPencilFill className="icon" />
                        </div>
                        <div>
                            <p className='pt-2' >Customize Your Profile</p>
                        </div>
                    </Col>
                    <Col sm={3} className=" text-center icon-column d-flex align-items-center justify-content-center ">
                        <div className="icon-div">
                            <BsFileImageFill className="icon" />
                        </div>
                        <div>
                            <p className='pt-2' >Add product image for classification</p>
                        </div>
                    </Col>
                    <Col sm={2} className=" pt-3 text-center icon-column d-flex align-items-center justify-content-center">
                        <div className="icon-div">
                            <BsUiChecks className="icon" />
                        </div>
                        <div>
                            <p className='pt-2'>Check & Organize products</p>
                        </div>
                    </Col>
                    <Col sm={2} className=" text-center icon-column d-flex align-items-center justify-content-center">
                        <div className="icon-div">
                            <BsFillPeopleFill className="icon" />
                        </div>
                        <div>
                            <p className='pt-2'>Discover popular sellers</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default About;
