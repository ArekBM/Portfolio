import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Typing() {
    return(
        <Typewriter
            options={{
                strings: [
                    'Software Engineer',
                    'Front End Developer',
                    'Something Clever',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}