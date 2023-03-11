import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ParticleEngine from './ParticleEngine';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import pdf from '../assets/Resume2023.pdf';
import { Document, Page } from 'react-pdf';

export default function Resume() {

    const url = 'https://drive.google.com/file/d/1Zu1XjZ-PRz9qI_ii7A_cedx5zmAwW8DV/view?usp=share_link'

    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages ] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)


    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    function onDocumentSuccess({numPages}){
        setNumPages(numPages)
    }

    return(
        <div>
            <Container fluid className='resume-section'>
                <ParticleEngine />
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button
                        variant='primary'
                        href={pdf}
                        target='_blank'
                        style={{ maxWidth: '250px' }}
                    >
                        <AiOutlineDownload />
                        &nbsp; Download CV
                    </Button>
                </Row>
                <Row className='resume'>
                    <Document file={pdf} className='d-flex justify-content-center' onLoadSucess={onDocumentSuccess}>
                        <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>
            </Container>
        </div>
    )
}