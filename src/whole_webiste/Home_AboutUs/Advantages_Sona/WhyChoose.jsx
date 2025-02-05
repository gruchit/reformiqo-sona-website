import React from 'react'
import './AdvantSona.css'
import Double_bol_line from '../../../assets/double_bol_line.svg'
import Arrow from '../../../assets/arrow.svg'
import { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyChoose() {
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
            <div className='WhyChooseOver'>
                <div className='WhyChoose'>
                    <img src={Double_bol_line} alt=""  className='WhyDoted' loading='lazy'


                    />
                    <div className={isLargeScreen ? "container-xxl" : ""}
                        data-aos="zoom-in-up"
                        data-aos-offset="200"
                        data-aos-duration="500"
                        data-aos-once="true"
                        mirror="true"
                    >
                        <h3 className='SonaTxtColor text-center mb-4 sans_Medium'>Why Choose Us</h3>
                        <h1 className='text-center sans_bold mb-4'>We Manufacture With Responsibility </h1>
                        <p className='text-center sans_light text-secondary mb-4'>Sona Extrusion’s reputation for quality, dependability, and timeliness is why we are the trusted partners for various businesses, both nationally and internationally. Our customers receive consistently high-quality products thanks to our company’s commitment to strict quality control procedures.</p>
                    </div>
                </div>
                <div className='WhyChooseTXT '>
                    <img src={Arrow} alt=""  className='WhyArrow' loading='lazy'
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-duration="500"
                        easing="ease-in-out"

                    />
                    <div className={isLargeScreen ? "container-xl" : ""}>
                        <div className='d-flex justify-content-center'>
                            <ul className=' list-unstyled sans_bold'>
                                <li className='py-2'><FaCheck className='WhyIcon fs-6 me-4'
                                    data-aos="zoom-in"
                                    data-aos-offset="200"
                                    data-aos-duration="500"/>
                                <a className='text-black text-decoration-none'
                                    data-aos="fade-in"
                                    data-aos-offset="200"
                                    data-aos-duration="600">
                                    Leading Manufacturer of Aluminum Collapsible Tubes, Containers, Bottles and Flasks</a></li>
                                <li className='py-2'><FaCheck className='WhyIcon fs-6 me-4'
                                    data-aos="zoom-in"
                                    data-aos-offset="200"
                                    data-aos-duration="500"/>
                                <a className='text-black text-decoration-none'
                                    data-aos="fade-in"
                                    data-aos-offset="200"
                                    data-aos-duration="600">
                                One of the Largest Single Roof Production Capacity in India</a></li>
                                <li className='py-2'><FaCheck className='WhyIcon fs-6 me-4'
                                    data-aos="zoom-in"
                                    data-aos-offset="200"
                                    data-aos-duration="500"
                                    />
                                <a className='text-black text-decoration-none'
                                    data-aos="fade-in"
                                    data-aos-offset="200"
                                    data-aos-duration="600">
                                Manufacturing Capacity of 500 Mn Tubes & 50 Mn Flasks/Containers per annum</a></li>
                            </ul>
                        </div>
                        <p className='text-center text-secondary sans_light'
                            data-aos="fade-in"
                            data-aos-offset="200"
                            data-aos-duration="600"
                        >We are delivering premium quality products meeting the ever-changing requirements of our elite customers in the markets of Canada, U.S.A., U.K., Spain, Sweden, Russia, India, Sri Lanka, Singapore, Malaysia, Australia, Nigeria, Jordan, Ethiopia, South Africa, and many more.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose