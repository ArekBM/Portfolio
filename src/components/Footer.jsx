import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    AiFillGithub
} from 'react-icons/ai';

export default function Footer() {
    let date = new Date()
    let year = date.getFullYear();

    return (
        <Container fluid className='footer'>
            <Row>
                <Col md='4' className='footer-copyright'>
                    <h3>Color scheme by <span className='purple'>Soph</span></h3>
                </Col>
                <Col md='4' className='footer-copyright'>
                    {/* <h3>Copyright © {year}</h3> */}
                </Col>
                <Col md='4' className='footer-body'>
                    <ul className='footer-icons'>
                        <li className='icon'>
                            <a
                                href='https://github.com/ArekBM'
                                style={{ color: 'white' }}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}