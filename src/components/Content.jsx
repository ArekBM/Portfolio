import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';

export default function Content() {
    return (
        <Container fluid className='home-about-section' id='about'>
            <Container>
                <Row>
                    <Col md={8} className='home-about-description'>
                        <h1 style={{ fontSize: '2.6em' }}>
                            A <span className='purple'>Little</span> about me...
                        </h1>
                        <p className='home-about-body'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <br />
                            <br />The technologies I've been working with recently are
                            <i>
                                <b className='purple'> Javascript, Python, React, and Node.js</b>
                            </i>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}