import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
    const navbarStyle = {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: '#F2EEEB',
        fontFamily: 'Comfortaa, sans-serif',
        fontWeight: 'bold',
        color: '#6E592F',
        height: '120px',
        zIndex: 2,
    };

    const linkStyle = {
        display: 'block',
        margin: 'auto',
        backgroundColor: '#F2EEEB',
        padding: '10px 15px',
        borderRadius: '5px',
        width: "100%",
        textAlign: 'center',
        color: "#5E5B3E",
    };

    const dropdownLinkStyle = {
        ...linkStyle,
        backgroundColor: '#FFF',
        color: "black",
        transition: 'background-color 0.3s',
    };

    const handleDropdownHover = (event) => {
        event.target.style.backgroundColor = '#78D46A';
        event.target.style.color = "white"
    };

    const handleDropdownLeave = (event) => {
        event.target.style.backgroundColor = '#F2EEEB';
        event.target.style.color = "#5E5B3E"

    };

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
                rel="stylesheet"
            />
            <Navbar style={navbarStyle} variant="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src="/images/logo.png"
                        width="160"
                        height="110"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link
                            href="#home"
                            style={linkStyle}
                            onMouseEnter={handleDropdownHover}
                            onMouseLeave={handleDropdownLeave}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            style={linkStyle}
                            onMouseEnter={handleDropdownHover}
                            onMouseLeave={handleDropdownLeave}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#logout"
                            style={linkStyle}
                            onMouseEnter={handleDropdownHover}
                            onMouseLeave={handleDropdownLeave}
                        >
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <style jsx global>{`
                @media (max-width: 767px) {
                    .navbar-nav .nav-link {
                        display: block !important;
                    }
                    .navbar-nav .nav-item {
                        display: inline-block !important;
                        width: auto !important;
                        float: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default CustomNavbar;
