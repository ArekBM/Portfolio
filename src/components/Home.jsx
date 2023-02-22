import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typing from './Typing';
import Content from './Content';
import ParticleEngine from './ParticleEngine';

export default function Home() {
    return (
        <section>
            <Container fluid className='home-section' id='home'>
                <ParticleEngine />
                <Container className='home-content'>
                    <Row>
                        <Col md={7} className='home-header'>
                            <h1 style={{ paddingBottom: 15 }} className='heading'>
                            Hello there! {" "}
                            <span className='wave' role='img'>
                                👋🏾
                            </span>
                            </h1>

                            <h1 className='heading-name'>
                                My name is 
                                <strong className='main-name'> Eric Miyake</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: 'left' }}>
                                <Typing />
                            </div>
                        </Col>

                    </Row>
                    <Content />
                </Container>
            </Container>
        </section>
    )
}