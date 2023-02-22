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
                            Coming from a background in tech sales, I worked at companies such as 
                            Apple and Dyson focused on the costumer experience.
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