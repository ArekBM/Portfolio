import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import BuildA from '../assets/BuildA.png';
import ParticleEngine from './ParticleEngine';
import PhotoCapsule from '../assets/PhotoCapsule.png';
import KitchenSink from '../assets/KitchenSink.jpg'

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
                            description='React based application to help build and design your résumé that updates in realtime. Supports image uploads and generates a PDF which you can print and download. I used this to build my current résumé. '
                            ghLink='https://github.com/ArekBM/ResumeBuilder'
                            demoLink='http://stupendous-dasik-d8337d.netlify.app/'
                        />
                    </Col>
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={PhotoCapsule}
                            title='PhotoCapsule'
                            description='A game where you are presented with a series of intriguing photos from different eras and your goal is to guess which year it was taken. Written with React and Javascript. I setup an API with MongoDB which will insert and store scores and a leaderboard that calls and displays the top 10 of the day.'
                            ghLink='https://github.com/ArekBM/PhotoCapsule'
                            demoLink='https://scintillating-melba-98a2d4.netlify.app/'
                        />
                    </Col>
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={KitchenSink}
                            title='KitchenSink'
                            description='A social network site built in Django which supports creating users, posts, likes, unlikes and edits. Built with python, Bootstrap, vanilla Javascript and HTML.'
                            ghLink='https://github.com/ArekBM/KitchenSink'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}