import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import BuildA from '../Assets/BuildA.png';
import ParticleEngine from './ParticleEngine';

export default function Projects() {
    return(
        <Container fluid className='project-section'>
            <ParticleEngine />
            <Container>
                <h1 className='project-heading'>
                    My Recent <strong className='purple'>Works </strong>
                </h1>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={BuildA}
                            title='Build-A-Resume'
                            description='React based application to help build and design your résumé that updates in realtime. Supports image uploads and generates a PDF which you can print and download.'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}