import React from 'react'
import StateArt from '../../../assets/StateArt.svg'
import Arrow from '../../../assets/arrow.svg'
import './pharm.css'

function Our_Solutions() {
    return (
        <>
            <div className='Our_Solutions'>
                <div className='container-xxl'>
                    <div className='OurSoluTxt'>
                        <h2 className='sans_light text-center pb-5 mb-5'>Our Solutions & Benefits</h2>
                    </div>
                    <img src={Arrow} alt="" className='OurSoluLftArw' />
                    <div className='OurSoluCards'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-4  col-lg-4 col-md-6   mt-lg-0'>
                                <div className=' d-flex justify-content-center'>
                                    <div className='OurSoluCard  flex-column  mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0'>
                                        <img src={StateArt} alt="" className='OurSoluImg' />
                                        <div className='mt-5'>
                                            <h5 className='sans_Light'>State-of-the-art manufacturing facility</h5>
                                            <p className='text-secondary sans_Light m-0'>We are a customer-centric company committed to offering our loyal pharmaceutical customers a cutting-edge manufacturing facility that makes High quality aluminium packaging solution using cutting-edge technology and equipment. Our committed team of engineers and technicians makes sure that each product that is released onto the market is up to the highest standards of reliability and quality. Our tubes are preferred because they are chemically stable and provide protection against contamination, oxidation, evaporation, and microbial growth.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6  mt-lg-0'>
                                <div className=' d-flex justify-content-center'>
                                    <div className='OurSoluCard   flex-column  mt-5 mt-sm-5 mt-md-0 mt-lg-5 mt-xl-5 mt-xxl-5'>
                                        <img src={StateArt} alt="" className='OurSoluImg' />
                                        <div className='mt-5'>
                                            <h5 className='sans_Light'>Customizable solutions</h5>
                                            <p className='text-secondary sans_Light m-0'>We are committed to providing adaptable solutions to satisfy the requirements of pharmaceutical companies. By tailoring the services to the specific needs of the clients, we are able to provide cost-effective solutions that increase efficiency and optimise production capabilities. In order to create custom packaging solutions that satisfy each customer's specific needs—including tube size and printing—SONA EXTRUSION works closely with them. From the outset, SONA EXTRUSION strives to understand their customers’ individual requirements and ensure that the design and production processes are aligned with them.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6  mt-lg-0'>
                                <div className=' d-flex justify-content-center'>
                                    <div className='OurSoluCard  flex-column  mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0'>
                                        <img src={StateArt} alt="" className='OurSoluImg' />
                                        <div className='mt-5'>
                                            <h5 className='sans_Light'>Regulatory Compliances</h5>
                                            <p className='text-secondary sans_Light m-0'>We at Sona Extrusions have sacramentals as our core value and hence all our products must adhere to the strictest regulatory requirements for them to be sold. We understand that pharmaceutical is an industry that requires absolute precision and attention to detail. And hence all our products undergo rigorous testing and certification before they can be released in the market. The business follows stringent quality control procedures to guarantee that all of its products comply with all necessary rules and regulations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Our_Solutions