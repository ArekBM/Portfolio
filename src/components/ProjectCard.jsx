import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

export default function ProjectCard(props) {
    return (
        <Card className='project-card-view'>
            <Card.Img variant='top' src={props.imgPath} alt='card-img'/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                    {props.description}
                </Card.Text>
                <Button 
                    variant='primary'
                    href={props.ghLink}
                    target='_blank'
                    style={{ marginLeft: '10px' }}
                >
                    <AiFillGithub /> &nbsp;
                    {'Github'}
                </Button>
                <Button
                    variant='primary'
                    href={props.demoLink}
                    target='_blank'
                    style={{ marginLeft: '10px' }}
                >
                    <CgWebsite /> &nbsp;
                    {'Demo'}
                </Button>
            </Card.Body>
        </Card>
    )
}