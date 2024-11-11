import React from 'react';
import ProductCapMarket from '../../../assets/productCapMarket.svg';
import Arrow_Left from '../../../assets/arrow_Left.svg';
import IndustriesMarket from '../../../assets/IndustriesMarket.svg';
import Certifications from '../../../assets/CertificationsWithout.svg';

import './Alum.css'

function AluMarketLed() {
    return (
        <>
            <div className='AluMarketLed'>
                <div className='flex-column'>
                    <div className='AluMarketLed_img'>
                        <img src={Arrow_Left} alt="" className='AluMarketLed_imgArrow' />
                    </div>
                    <div className='AluMarketLedDetail'>
                        <h2 className='text-center my-4'>Market Leaders</h2>
                        <p className='text-center'>Sona Extrusion Pvt. Ltd. is one of the leading manufacturers of aluminium collapsible tubes and containers in India, duly ISO 15378:2017 (GMP) Certified – SGS (Primary Packaging materials for Medicinal Products) & ISO 9001:2015 Certified – TUV & US DMF Registered Company.</p>
                    </div>
                    <div className='AluMarketLedCards'>
                        <div className='row'>
                            <div className='col-4  '>
                                <div className='d-flex justify-content-center'>
                                    <div className='marketCards flex-column'>
                                        <div>
                                            <img src={ProductCapMarket} alt="" />
                                        </div>
                                        <div className='marketCardsTXT'>
                                            <h5 className='sans_light'>Production Capacity</h5>
                                            <p className='sans_light'>We, at Sona Extrusion, are proud to have the best production capacity due to our significant investments in cutting-edge technology, a skilled workforce, and effective processes. These investments have given us an advantage over our competitors and enabled us to consistently deliver high-quality aluminium packaging solutions in large quantities.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 mt-5'>
                                <div className='d-flex justify-content-center'>
                                    <div className='marketCards flex-column'>
                                        <div>
                                            <img src={IndustriesMarket} alt="" />
                                        </div>
                                        <div className='marketCardsTXT'>
                                            <h5 className='sans_light'>Industry We Serve</h5>
                                            <p className='sans_light'>We, at Sona Extrusion, having a rich experience of more than three decades to back us and hence we are in a very strong position to serve business across the globe. We have served business across various verticals like Pharmaceutical, Agrochemical, Personal Healthcare, Nutraceutical, Automotive and Cosmetic to name a few.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4  '>
                                <div className='d-flex justify-content-center'>
                                    <div className='marketCards flex-column'>
                                        <div>
                                            <img src={Certifications} alt="" />
                                        </div>
                                        <div className='marketCardsTXT'>
                                            <h5 className='sans_light'>Certifications</h5>
                                            <p className='sans_light'>We, at Sona Extrusions have received various certifications from reputable organizations to prove to our clients that we are a dependable partner in achieving their goals and objectives. We have demonstrated our commitment to offering goods and services that exceed expectations by obtaining these certifications.</p>
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
