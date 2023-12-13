import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ParticleEngine from './ParticleEngine';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import pdf from '../assets/sweRes.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Resume() {

    const url = 'https://raw.githubusercontent.com/ArekBM/Portfolio/master/src/assets/sweRes.pdf';

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
                <Row style={{ justifyContent: 'center', position: 'relative', paddingBottom: '50px' }}>
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
                    <Document file={url} className='d-flex justify-content-center' onLoadSucess={onDocumentSuccess} onLoadError={console.error} >
                        <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>
            </Container>
        </div>
    )
}