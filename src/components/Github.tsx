import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { Row } from 'react-bootstrap'

export default function GitHub(){
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '10px'}}>
            <h1 className='project-Heading' style={{ paddingBottom: '20px' }}>
                Github <strong className='purple'>Activity</strong>
            </h1>
            <GitHubCalendar 
                username='ArekBM'
                blockSize={15}
                blockMargin={5}
                fontSize={16}
                theme={{'light': [
                    '#ffffff',
                    '#5cbbeb',
                    '#1b9ada',
                    '#1681b6',
                    '#105a7f'
                ]}}
            />
        </Row>
    )
}