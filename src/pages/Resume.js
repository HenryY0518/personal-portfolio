import React from 'react';
import { Document, Page, pdfjs} from 'react-pdf'
import resume from '../assets/pdf/resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    return (
        <div className='pdf'>
            <Document 
            file={resume}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    )
}

export default Resume