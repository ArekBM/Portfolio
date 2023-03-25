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
                            After working for companies such as Apple and Dyson in sales as well technical roles, I achieved several accolades including top salesman and most improved technician in a six month quarter. 
                            I felt like I accomplished what I needed to do in the retail space. Also, there were many itches retail simply couldn't scratch. Then I discovered programming. 
                            <br />
                            <br />
                            Web development allows me to express my creativity in a more satisfying way. To create with clear structure and to focus in on details in a way I've never been able to do before.
                            <br />
                            <br />
                            After over a year of study, I am ready to contribute to the world in a new way and I'm looking forward to bringing the best traits of a creative developer as well as someone who is immersed in the customer experience.
                            Over my career I have learned how to get things done, keep my cool in dire moments, work with lots of different types of people, and take initiative to pick up slack when needed. 
                            <br />
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