import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const UserNavbar = () => {
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
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F2EEEB',
        padding: '10px 15px',
        borderRadius: '5px',
        textAlign: 'center',
        color: '#5E5B3E',
        textDecoration: 'none',
        transition: 'background-color 0.3s, color 0.3s',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    const activeLinkStyle = {
        backgroundColor: '#78D46A',
        color: 'white',
    };

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const location = useLocation();

    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleLogout = () => {
        sessionStorage.clear();
        handleLinkClick('/');
    }
    const handleLinkHover = (event) => {
        if (
            event.target.style.backgroundColor !== activeLinkStyle.backgroundColor &&
            event.target.getAttribute('data-isactive') !== 'true'
        ) {
            event.target.style.backgroundColor = '#78D46A';
            event.target.style.color = 'white';
        }
    };

    const handleLinkLeave = (event) => {
        if (
            event.target.style.backgroundColor !== activeLinkStyle.backgroundColor &&
            event.target.getAttribute('data-isactive') !== 'true'
        ) {
            event.target.style.backgroundColor = '#F2EEEB';
            event.target.style.color = '#5E5B3E';
        }
    };

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
                rel="stylesheet"
            />
            <Navbar style={navbarStyle} variant="light" expand="lg">
                <Navbar.Brand>
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
                        <Link
                            to="/Home"
                            style={
                                activeLink === '/Home'
                                    ? { ...linkStyle, ...activeLinkStyle }
                                    : linkStyle
                            }
                            onMouseEnter={handleLinkHover}
                            onMouseLeave={handleLinkLeave}
                            onClick={() => handleLinkClick('/Home')}
                            data-isactive={activeLink === '/Home'}
                        >
                            Home
                        </Link>
                        <Link
                            to="/Populars"
                            style={
                                activeLink === '/Populars' || activeLink.includes('/PopularSellerProfile')
                                    ? { ...linkStyle, ...activeLinkStyle }
                                    : linkStyle
                            }
                            onMouseEnter={handleLinkHover}
                            onMouseLeave={handleLinkLeave}
                            onClick={() => handleLinkClick('/Populars')}
                            data-isactive={activeLink === '/Populars'}
                        >
                            Popular Sellers
                        </Link>
                        <Link
                            to="/Profile"
                            style={
                                activeLink === '/Profile' || activeLink === '/AddProduct'
                                  ? { ...linkStyle, ...activeLinkStyle }
                                  : linkStyle
                            }
                            onMouseEnter={handleLinkHover}
                            onMouseLeave={handleLinkLeave}
                            onClick={() => handleLinkClick('/Profile')}
                            data-isactive={activeLink === '/Profile'}
                        >
                            Profile
                        </Link>
                        <Link
                            to="/About"
                            style={
                                activeLink === '/About'
                                    ? { ...linkStyle, ...activeLinkStyle }
                                    : linkStyle
                            }
                            onMouseEnter={handleLinkHover}
                            onMouseLeave={handleLinkLeave}
                            onClick={() => handleLinkClick('/About')}
                            data-isactive={activeLink === '/About'}
                        >
                            About
                        </Link>
                        <Link
                            to="/"
                            style={
                                activeLink === '/'
                                    ? { ...linkStyle, ...activeLinkStyle }
                                    : linkStyle
                            }
                            onMouseEnter={handleLinkHover}
                            onMouseLeave={handleLinkLeave}
                            onClick={() => handleLogout()}
                            data-isactive={activeLink === '/'}
                        >
                            Logout
                        </Link>
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

export default UserNavbar;
