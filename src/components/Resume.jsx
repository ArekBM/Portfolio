import React from 'react';
import {Container} from 'react-bootstrap';
import ParticleEngine from './ParticleEngine'

export default function Resume() {
    return(
        <div>
            <Container fluid className='resume-section'>
                <ParticleEngine />
            </Container>
        </div>
    )
}