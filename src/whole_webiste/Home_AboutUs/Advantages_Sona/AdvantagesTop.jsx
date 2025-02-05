import React from 'react'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import AdvaLeft from '../../../assets/advaLeft1.svg'
import Youtube from '../../../assets/Youtube.svg'
import './AdvantSona.css'
import 'aos/dist/aos.css';

function AdvantagesTop() {
    useEffect(() => {
        AOS.init();
    }, []);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1400);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1400);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div className='AdvantagesTop'>
                <div className={isLargeScreen ? "container-xxl" : ""}>
                    <div className="row">
                        <div className='col-xl-6 col-lg-12 d-flex justify-content-center p-0 m-0'>
                            <div className='AdvTopLeft d-flex justify-content-center'
                            data-aos="fade-right"
                            data-aos-duration="600"
                            >
                                <img src={AdvaLeft} alt="" className='AdvTopLeftTruck' loading='lazy'/>
                                <img src={Youtube} alt="" className='AdvTopYoutube ' loading='lazy'/>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-12 d-flex justify-content-center align-items-center pe-xxl-5 pe-xl-5 mt-5 mt-lg-5 mt-md-5 mt-xxl-0 mt-xl-0'>
                            <div className='AdvTopright  text-xl-start'
                            data-aos="zoom-out-left"
                            data-aos-duration="600"
                            >
                                <h3 className='mb-2 sans_Medium SonaTxtColor '>Welcome to Your Advantage</h3>
                                <h1 className='mb-4 sans_bold'>Our Guarantee is the Commitment to Deliver Innovative Products </h1>
                                <p className='sans_light text-xxl-start text-xl-start text-lg-center text-xxl-start text-md-center text-secondary'>Sona Extrusion Pvt. Ltd. is one of the leading manufacturers of aluminum collapsible tubes and containers in India, duly ISO 15378:2017 (GMP) Certified – SGS (Primary Packaging materials for Pharmaceutical Products) & ISO 9001:2015 Certified – TUV & US DMF Registered Company.</p>
                                <ul className='sans_bold flex-column ms-auto'>
                                    <li className='pb-2'>High-quality products</li>
                                    <li className='pb-2'>Timely delivery</li>
                                    <li className='pb-2'>Competitive pricing</li>
                                    <li className='pb-2'>Excellent customer service</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvantagesTop