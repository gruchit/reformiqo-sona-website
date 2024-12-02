import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Brochures.css';
import Top from '../../component/Top/Top';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Focus from '../../Home/Focus';
import Helmet  from 'react-helmet';
function Brochures() {
  const bookRef = useRef();

  return (
    <>
      <Helmet>
        <title>Brochures | Sona Extrusion</title>
        <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
        <meta name="keywords" content="company, products, services, home, business" />
      </Helmet>
      <Top />
      <Header />
      <Focus type="Brochure" />
      <div className="brochure-container">
        <HTMLFlipBook
          width={300}
          height={200}
          size="stretch"
          minWidth={300}
          maxWidth={600}
          minHeight={400}
          maxHeight={200}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={false}
          ref={bookRef}
        >
          <div className="page cover">Cover Page</div>
          <div className="page">Page 1</div>
          <div className="page">Page 2</div>
          <div className="page back-cover">Back Cover</div>
        </HTMLFlipBook>
      </div>
      <Footer />
    </>
  );
}

export default Brochures;
