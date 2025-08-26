import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import VideoGlry from './VideoGlry'
import PhotoGallery from './PhotoGallery'
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';

function Gallery() {
    
    const Category_Name = "Gallery";
    const Category_URL = "https://sonaextrusion.com/Resources/Gallery";
    const Category_Description = "Sona Extrusion Gallery showcases our achievements, projects, and memorable moments. Discover our story through visuals.";

    const schema = `{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "${Category_Name}",
    "url": "${Category_URL}",
    "description": "${Category_Description}"
  }`;
    return (
        <>
            <Helmet>
                <title>Sona Extrusion Gallery - Explore Our Projects & Events</title>
                <meta name="description" content={Category_Description} />
                <script type="application/ld+json">
                    {schema}
                </script>
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