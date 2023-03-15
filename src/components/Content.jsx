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
                            I'm a self taught front-end web developer coming from a background of tech sales. I like learning new technologies and am constantly looking for new challenges for myself. 
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