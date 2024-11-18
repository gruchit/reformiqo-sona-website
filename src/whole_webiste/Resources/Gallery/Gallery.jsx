import React from 'react'
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import VideoGlry from './VideoGlry'
import PhotoGallery from './PhotoGallery'

function Gallery() {
    return (
        <>
            <Top />
            <Header />
            <VideoGlry/>
            <PhotoGallery/>
            <Footer />
        </>

    )
}

export default Gallery