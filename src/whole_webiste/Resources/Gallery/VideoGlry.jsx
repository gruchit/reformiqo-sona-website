import React from 'react'
import './Gallery.css'
import Single_BlackBol_Line from '../../../assets/single_BlackBol_Line.svg';
import LeftArrow from '../../../assets/arrow_Left.svg';


function VideoGlry() {
    return (
        <>
            <div className='VideoGlry'>
                <div className='container-xxl p-0 '>
                    <div className='VideoGlryTxt flex-column'>
                        <img src={LeftArrow} alt="" srcset="" className='VdoLftarw' loading='lazy'/>
                        <div className='d-flex justify-content-center'>
                            <img src={Single_BlackBol_Line} alt="" className='VideoGlryTxtImg' loading='lazy'/>
                        </div>
                        <h1 className='text-center sans_bold'>Video Gallery</h1>
                    </div>
                    <div className='VideoGlryBody'>
                        <div className='row d-flex justify-content-center'>
                            <div className='mt-5 col-lg-4 col-md-6 col-sm-12   d-flex justify-content-center'>
                                <div className='VideoGlryCard'>
                                    <iframe
                                        className="VideoIframe"
                                        src="https://www.youtube.com/embed/iAhyelpV03s"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className='mt-5 col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center'>
                                <div className='VideoGlryCard'>
                                    <iframe
                                        className="VideoIframe"
                                        src="https://www.youtube.com/embed/bXUVWk_r79w"
                                        title="How It&#39;s Made - Aluminium Packaging Tubes"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className='mt-5 col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center'>
                                <div className='VideoGlryCard'>
                                    <iframe
                                        className="VideoIframe"
                                        src="https://www.youtube.com/embed/iAhyelpV03s"
                                        title="Sona Extrusion Covid-19 Precautions"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VideoGlry