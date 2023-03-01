import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import BuildA from '../assets/BuildA.png';
import ParticleEngine from './ParticleEngine';
import PhotoCapsule from '../assets/PhotoCapsule.png';

export default function Projects() {
    return(
        <Container fluid className='project-section'>
            <ParticleEngine />
            <Container>
                <h1 className='project-heading'>
                    My Recent <strong className='purple'>Projects </strong>
                </h1>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={BuildA}
                            title='Build-A-Resume'
                            description='React based application to help build and design your résumé that updates in realtime. Supports image uploads and generates a PDF which you can print and download.'
                            ghLink='https://github.com/ArekBM/ResumeBuilder'
                            demoLink='http://stupendous-dasik-d8337d.netlify.app/'
                        />
                    </Col>
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={PhotoCapsule}
                            title='PhotoCapsule'
                            description='A game that tests your knowledge of history and pop culture through the lens of a camera. Built an API that reads from a folder location and creates and writes to a JSON object. Built with React and vanilla Javascript.'
                            ghLink='https://github.com/ArekBM/PhotoCapsule'
                            demoLink='https://scintillating-melba-98a2d4.netlify.app/'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}