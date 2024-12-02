import React from 'react';
import ProductCapMarket from '../../../assets/productCapMarket.svg';
import Arrow_Left from '../../../assets/arrow_Left.svg';
import IndustriesMarket from '../../../assets/IndustriesMarket.svg';
import Certifications from '../../../assets/CertificationsWithout.svg';
import './Alum.css'
import AOS from 'aos';
import { useEffect } from 'react';
function AluMarketLed() {
    useEffect(() => {
        AOS.init({
            once: true, // Prevent animations from replaying
        });
    }, []);
    return (
        <>
            <div className='AluMarketLed'>
                <div className='flex-column'>
                    <div className='AluMarketLed_img'>
                        <img src={Arrow_Left} alt="" className='AluMarketLed_imgArrow' loading='lazy' data-aos="fade-right" data-aos-offset="300"/>
                    </div>
                    <div className='AluMarketLedDetail'
                        data-aos="zoom-in-up"
                        data-aos-offset="300"
                    >
                        <h1 className='text-center sans_bold my-4'>Market Leaders</h1>
                        <p className='text-center text-secondary'>Sona Extrusion Pvt. Ltd. is one of the leading manufacturers of aluminium collapsible tubes and containers in India, duly ISO 15378:2017 (GMP) Certified – SGS (Primary Packaging materials for Medicinal Products) & ISO 9001:2015 Certified – TUV & US DMF Registered Company.</p>
                    </div>
                    <div className='AluMarketLedCards'>
                        <div className='container-xxl'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-xl-4  col-lg-4 col-md-6  mt-lg-0  d-flex justify-content-center' >
                                    <div className='d-flex justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0' data-aos="zoom-in">
                                        <div className='marketCards  flex-column'>
                                            <div>
                                                <img src={ProductCapMarket} alt="" loading='lazy' />
                                            </div>
                                            <div className='marketCardsTXT'>
                                                <h4 className='sans_Medium'>Production Capacity</h4>
                                                <p className='sans_light text-secondary'>We, at Sona Extrusion, are proud to have the best production capacity due to our significant investments in cutting-edge technology, a skilled workforce, and effective processes. These investments have given us an advantage over our competitors and enabled us to consistently deliver high-quality aluminium aluminium packaging solutions in large quantities.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4  col-lg-4 col-md-6  mt-lg-0 d-flex justify-content-center'>
                                    <div className='d-flex justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-5 mt-xl-5 mt-xxl-5' data-aos="zoom-in">
                                        <div className='marketCards flex-column'>
                                            <div>
                                                <img src={IndustriesMarket} alt="" loading='lazy' />
                                            </div>
                                            <div className='marketCardsTXT'>
                                                <h4 className='sans_Medium'>Industry We Serve</h4>
                                                <p className='sans_light text-secondary'>We, at Sona Extrusion, having a rich experience of more than three decades to back us and hence we are in a very strong position to serve business across the globe. We have served business across various verticals like Pharmaceutical, Agrochemical, Personal Healthcare, Nutraceutical, Automotive and Cosmetic to name a few.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4  col-lg-4 col-md-6  mt-lg-0 d-flex justify-content-center'>
                                    <div className='d-flex justify-content-center mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0' data-aos="zoom-in">
                                        <div className='marketCards flex-column'>
                                            <div>
                                                <img src={Certifications} alt="" loading='lazy' />
                                            </div>
                                            <div className='marketCardsTXT'>
                                                <h4 className='sans_Medium'>Certifications</h4>
                                                <p className='sans_light text-secondary'>We, at Sona Extrusions have received various certifications from reputable organizations to prove to our clients that we are a dependable partner in achieving their goals and objectives. We have demonstrated our commitment to offering goods and services that exceed expectations by obtaining these certifications.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AluMarketLed;
