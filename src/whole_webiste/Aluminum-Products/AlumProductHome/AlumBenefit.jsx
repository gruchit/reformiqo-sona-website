import React from 'react';
import Single_BlackBol_Line from '../../../assets/single_BlackBol_Line.svg';
import Arrow from '../../../assets/arrow.svg';
import { FaArrowRightLong } from 'react-icons/fa6';
import './Alum.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
function AlumBenefit() {
    useEffect(() => {
        AOS.init({
            once: true, // Prevent animations from replaying
        });
    }, []);
    return (
        <>
            <div className='AlumBenefit'>
                <div className='flex-column'>
                    <div className='AlumBenefit_Img d-flex justify-content-center'>
                        <img src={Single_BlackBol_Line} alt="Line Decoration" loading='lazy'/>
                    </div>
                    <div className='AlumBenefit_ditals container'
                    data-aos="zoom-in-up"
                    data-aos-offset="300"
                    data-aos-duration="500"
                    >
                        <h1 className="text-center sans_bold">Aluminum Benefits</h1>
                        <p className="text-center text-secondary sans_light">
                            Aluminum tubes are a popular packaging option for leading industries because
                            they offer several  advantages over other materials. Aluminum tubes are a great packaging option:
                        </p>
                    </div>
                </div>
            </div>
            <div className='AlumBenefitDown d-flex' >
                <img src={Arrow} alt=""  loading='lazy' data-aos="fade-left" data-aos-duration="800"/>
                <div className='d-flex justify-content-start' data-aos="fade-right" data-aos-duration="500" >
                    <div className='AlumBenefitTabs flex-column'>
                        <div className='d-flex my-2 ms-4'>
                            <div className='d-flex align-items-center me-2'>
                                <span><FaArrowRightLong className='AlumBenefitTabsIcon fs-5' /></span>
                            </div>
                            <div>
                                <h4 className='mb-0 sans_Medium '>Durable</h4>
                                <p className='sans_light text-secondary'>
                                    Aluminum is a durable material that can withstand harsh environmental conditions, making it ideal for products that need to be shipped or stored for a long time.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex my-2 ms-4'>
                            <div className='d-flex align-items-center me-2'>
                                <span><FaArrowRightLong className='AlumBenefitTabsIcon fs-5' /></span>
                            </div>
                            <div>
                                <h4 className='mb-0 sans_Medium'>Non-reactive</h4>
                                <p className='sans_light text-secondary'>
                                    Aluminum is a non-reactive metal that does not react with most chemicals, making it a safe and reliable choice for packaging products.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex my-2 ms-4'>
                            <div className='d-flex align-items-center me-2'>
                                <span><FaArrowRightLong className='AlumBenefitTabsIcon fs-5' /></span>
                            </div>
                            <div>
                                <h4 className='mb-0 sans_Medium'>Airtight</h4>
                                <p className='sans_light text-secondary'>
                                    Aluminum tubes can be made airtight, which helps to preserve the quality of the products inside and extend their shelf life.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex my-2 ms-4'>
                            <div className='d-flex align-items-center me-2'>
                                <span><FaArrowRightLong className='AlumBenefitTabsIcon fs-5' /></span>
                            </div>
                            <div>
                                <h4 className='mb-0 sans_Medium'>Recyclable</h4>
                                <p className='sans_light text-secondary'>
                                    Aluminum is 100% recyclable, which makes it an eco-friendly choice for packaging products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AlumBenefit;
