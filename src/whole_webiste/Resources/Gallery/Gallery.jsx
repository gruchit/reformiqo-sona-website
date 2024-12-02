import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import VideoGlry from './VideoGlry'
import PhotoGallery from './PhotoGallery'
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';
function Gallery() {
    return (
        <>
            <Helmet>
                <title> Gallery | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
            </Helmet>
            <Top />
            <Header />
            <Focus type="Gallery" />
            <VideoGlry />
            <PhotoGallery />
            <Footer />
        </>

    )
}

export default Gallery