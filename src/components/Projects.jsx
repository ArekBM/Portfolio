import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import BuildA from '../assets/BuildA.png';
import ParticleEngine from './ParticleEngine';
import PhotoCapsule from '../assets/PhotoCapsule.png';
import KitchenSink from '../assets/KitchenSink.jpg'
import folder from '../assets/folder.png';
import thumbnail from '../assets/thumbnail.png';
import portfolio2 from '../assets/contact-illustration.svg'

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
                            imgPath={portfolio2}
                            title='Portfolio 2.0'
                            description='Built in React and supports EmailJS and multiple new animations.'
                            ghLink='https://github.com/ArekBM/Portfolio-2.0'
                            demoLink='https://playful-marigold-f29c28.netlify.app/'
                        />
                    </Col>
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={thumbnail}
                            title='Thumbnail Generator'
                            description='T3 fullstack project which utilizes Next.js, TypeScript, Tailwind, tRPC and NextAuth.js. Uses AI to generate an thumbnail based on a prompt you input. Hosted on AWS services and integrated with Stripe.'
                            ghLink='https://github.com/ArekBM/thumbnailgen'
                            demoLink='https://main.d2nibnnfhe4wtq.amplifyapp.com/'
                        />
                    </Col>
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
                            description='A web based game where you are presented with a series of intriguing photos from different eras and your goal is to guess which year it was taken. Written with React and Javascript and hosted on netlify. I setup an API with MongoDB which will insert and store scores and a leaderboard that calls and displays the top 10 of the day.'
                            ghLink='https://github.com/ArekBM/PhotoCapsule'
                            demoLink='https://scintillating-melba-98a2d4.netlify.app/'
                        />
                    </Col>
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={KitchenSink}
                            title='KitchenSink'
                            description='Full stack twitter clone website built in Django and uses sqlite3. Supports profile pages with image uploads, likes, posts and edits. Hosted on Railway and written in vanilla Javascript, HTML and Python.'
                            ghLink='https://github.com/ArekBM/KitchenSink'
                            demoLink='https://django-server-production-550b.up.railway.app/'
                        />
                    </Col>
                    <Col md={4} className='project-card'>
                        <ProjectCard
                            imgPath={folder}
                            title='MinesweeperAI'
                            description='A minesweeper AI built in python using propisitional logic to determine mines and safe squares and marks accordingly. '
                            ghLink='https://github.com/ArekBM/minesweeperAI'
                            demoLink=''
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}