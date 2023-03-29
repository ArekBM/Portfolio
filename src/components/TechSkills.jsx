import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiBootstrap,
    DiGithub,
    DiSass,
    DiNpm

} from 'react-icons/di';

export default function TechSkills() {
    return(
        <Row style={{ display: 'flex', justifyContent: 'center', padding: '20px', alignItems: 'center', margin: 'auto' }}>
            <Col xs={3} md={2} className='tech-icons'>
                <DiJavascript1 />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiReact />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiNodejs />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiMongodb />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiPython />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiGit />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiBootstrap />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiGithub />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiNpm />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiSass />
            </Col>
        </Row>
    )
}