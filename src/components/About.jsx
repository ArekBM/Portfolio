import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutCard from './AboutCard';
import TechSkills from './TechSkills';
import ParticleEngine from './ParticleEngine';

export default function About() {
    return(
        <Container fluid className='about-section'>
            <ParticleEngine />
            <Container>
                <Row style={{ justifyContent: 'center', padding: '10px' }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: 'center',
                            paddingTop: '30px',
                            paddingBottom: '50px'
                        }}
                    >
                        <h1 style={{ fontSize: '2.1em', paddingBottom: '20px'}}>
                            About Me
                        </h1>
                        <AboutCard />
                    </Col>
                    <Col 
                        md={5}
                        style={{ paddingTop: '120px', paddingBottom: '50px' }}
                        className='about-img'
                    >
                        Image
                    </Col>
                </Row>
                <h1 className='projet-heading'>
                    Professional <strong className='purple'>Skills </strong>
                </h1>

                <TechSkills />
                
            </Container>
        </Container>
    )
}