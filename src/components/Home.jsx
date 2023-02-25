import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typing from './Typing';
import Content from './Content';
import ParticleEngine from './ParticleEngine';
import insert from '../assets/insert.png';

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
                                <strong className='main-name'> <span className='purple'>Eric Miyake</span></strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: 'left' }}>
                                <Typing />
                            </div>

                            <Col md={5} style={{ paddingBottom: 20 }}>
                                <img
                                    src={insert}
                                    style={{ maxHeight: '450px' }}
                                />
                            </Col>
                        </Col>

                    </Row>
                    <Content />
                </Container>
            </Container>
        </section>
    )
}