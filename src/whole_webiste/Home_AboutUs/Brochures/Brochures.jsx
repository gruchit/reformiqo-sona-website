import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Brochures.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import pdf from '../../../assets/PdfFile.pdf'; // Path to your PDF file

import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Pages = React.forwardRef((props, ref) => (
  <div className="demoPage" ref={ref}>
    <p>{props.children}</p>
    <p>Page number: {props.number}</p>
  </div>
));
Pages.displayName = 'Pages';

function Flipbook() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="brocherSet ">
      <h1 className=" text-black text-center font-bold ">Sona Brocher</h1>
      <div className='container'>
          <div className=''>
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error}
            >
              {numPages && (
                <HTMLFlipBook width={300} height={500} mobileScrollSupport={false} showCover={true} className='Book'>
                  <Pages key={0} number={1}>
                    <Page
                      // height={00}
                      pageNumber={1}
                      width={300}
                      height={500}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                    <p>Page 1 of {numPages}</p>
                  </Pages>


                  {[...Array(numPages - 2).keys()].map((pNum) => (
                    <Pages key={pNum + 1} number={pNum + 2}>
                      <Page
                        pageNumber={pNum + 2}
                        width={300} 
                        height={500}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                      />
                      <p>Page {pNum + 2} of {numPages}</p>
                    </Pages>
                  ))}


                  <Pages key={numPages - 1} number={numPages}>
                    <Page
                      pageNumber={numPages}
                      width={300}
                       height={500}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                    <p>Page {numPages} of {numPages}</p>
                  </Pages>
                </HTMLFlipBook>
              )}
            </Document>
          </div>
      </div>
    </div>
  );
}

export default Flipbook;
