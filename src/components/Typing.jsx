import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Typing() {
    return(
        <Typewriter
            options={{
                strings: [
                    'Software Engineer',
                    'Designer',
                    'Animator'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}