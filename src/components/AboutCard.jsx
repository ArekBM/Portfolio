import React from 'react';
import Card from 'react-bootstrap/Card';

export default function AboutCard() {
    
    return (
        <Card className='quote-card-view'>
            <Card.Body>
                <blockquote className='blockquote mb-0'>
                    <p style={{ textAlign: 'justify' }}>
                        Hi everyone, my name is <span className='purple'>Eric Miyake </span>
                        from <span className='purple'> San Francisco, CA. </span>
                    </p>
                    <br />
                    <br />
                    Apart from coding I'm an avid chess player and am always up for a challenge.
                </blockquote>
            </Card.Body>
        </Card>
    )
}