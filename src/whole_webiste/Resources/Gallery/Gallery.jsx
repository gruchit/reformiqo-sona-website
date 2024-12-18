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
                <title>Sona Extrusion Gallery - Explore Our Projects & Events</title>
                <meta name="description" content="Sona Extrusion Gallery showcases our achievements, projects, and memorable moments. Discover our story through visuals." />
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