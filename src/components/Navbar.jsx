import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CgFileDocument } from 'react-icons/cg';
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser
} from 'react-icons/ai';
import { GrContactInfo } from 'react-icons/gr';


export default function NavBar() {
    const [expand, updateExpand] = useState(false);
    const [navColor, updateNavbar] = useState(false);

    function scrollHandler() {
        if(window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }
    window.addEventListener('scroll', scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed='top'
            expand='md'
            className={navColor ? 'sticky' : 'navbar'}
        >
            <Container>
                <Navbar.Brand href='/' className='d-flex'>
                    <h1 className='purple'><span className='em'>Em.</span></h1>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls='responsive-navbar-nav'
                    onClick={() => {
                        updateExpand(expand ? false : 'expanded');
                    }}
                >
                 <span></span> 
                 <span></span>  
                 <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto' defaultActiveKey='#home'>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/' onClick={() => updateExpand(false)}>
                                <AiOutlineHome style={{ marginBottom: '2px' }} /> {' '}
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to='/about'
                                onClick={() => updateExpand(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to='/project'
                                onClick={() => updateExpand(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: '2px' }} /> {' '}
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to='/resume'
                                onClick={() => updateExpand(false)}
                            >
                                <CgFileDocument
                                    style={{ marginBottom: '2px' }} /> {' '}
                                Resume
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <div className='nav-link'>
                                <AiFillStar
                                    style={{ marginBottom: '2px', color: 'white' }}  /> {' '}
                                <a href='mailto:eric.bmiyake@gmail.com' className='contact' >
                                    Contact
                                </a>
                            </div>
                        </Nav.Item>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

