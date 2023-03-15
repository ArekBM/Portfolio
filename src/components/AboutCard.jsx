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
                    Apart from coding I'm an avid chess player and have been documenting my journey to reach a title in the sport. Commenting on my thought process during games and tips to help lower rated players learn as well. 
                </blockquote>
            </Card.Body>
        </Card>
    )
}