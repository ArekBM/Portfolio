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
    DiPostgresql,
    DiSass,
    DiNpm

} from 'react-icons/di';
import { SiVite, SiSqlite, SiTailwindcss, SiTypescript } from 'react-icons/si';

export default function TechSkills() {
    return(
        <Row style={{ justifyContent: 'center', padding: '20px', alignItems: 'center', margin: 'auto' }}>
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
                <DiPostgresql />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiPython />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <SiTypescript />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiBootstrap />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <SiVite />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <DiNpm />
            </Col>
            <Col xs={3} md={2} className='tech-icons'>
                <SiTailwindcss />
            </Col>
        </Row>
    )
}