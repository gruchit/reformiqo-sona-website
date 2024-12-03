import React from 'react'
import Single_BlackBol_Line from '../../assets/single_BlackBol_Line.svg';
import Arrow from '../../assets/arrow.svg';
import { FaArrowRightLong } from 'react-icons/fa6';
import './Laminated.css'
import AOS from 'aos';
import { useEffect } from 'react';
function WhyPartner() {
    useEffect(() => {
        AOS.init({
            once: true, // Prevent animations from replaying
        });
    }, []);
    return (
        <>
            <div className='WhyPartner'>
                <div className='flex-column'>
                    <div className='WhyPartner_Img d-flex justify-content-center'>
                        <img src={Single_BlackBol_Line} alt="Line Decoration" loading='lazy'/>
                    </div>
                    <div className='WhyPartner_ditals' data-aos="zoom-in-up" data-aos-offset="100">
                        <h1 className="text-center sans_bold">Why Partner with Us?</h1>
                        <p className="text-center sans_light text-secondary">
                            Aluminum tubes are a popular packaging option for leading industries because
                            they offer several advantages over other materials.
                            Aluminum tubes are a great packaging option:
                        </p>
                    </div>
                </div>
            </div>
            <div className='WhyPartnerDown d-flex'>
                <img src={Arrow} alt="" srcset="" loading='lazy' data-aos="fade-left"/>
                <div className='WhyPartnerTabs flex-column me-auto' data-aos="fade-right">
                    <div className='d-flex my-2 ms-4'>
                        <div className='d-flex align-items-center me-2'>
                            <span><FaArrowRightLong className='AlumBenefitTabsIcon fs-5' /></span>
                        </div>
                        <div>
                            <h5 className='mb-0 sans_Medium '>Exceptional Quality:</h5>
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
                            <h5 className='mb-0 sans_Medium'>Custom Solutions:</h5>
                            <p className='sans_light text-secondary'>
                                Our use of advanced technology and certified processes ensures products of the highest quality.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex my-2 ms-4'>
                        <div className='d-flex align-items-center me-2'>
                            <span><FaArrowRightLong className='AlumBenefitTabsIcon fs-5' /></span>
                        </div>
                        <div>
                            <h5 className='mb-0 sans_Medium'>Tailored Solutions for Every Sector:</h5>
                            <p className='sans_light text-secondary'>
                                Our flexible design and printing options allow you to create distinctive packaging that aligns with your brand’s identity.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex my-2 ms-4'>
                        <div className='d-flex align-items-center me-2'>
                            <span><FaArrowRightLong className='AlumBenefitTabsIcon fs-5' /></span>
                        </div>
                        <div>
                            <h5 className='mb-0 sans_Medium'>Competitive Pricing and Value:</h5>
                            <p className='sans_light text-secondary'>
                                Whether you’re in the cosmetics, pharmaceuticals, or food industry, our laminated tubes are designed to meet the diverse requirements of various sectors. We offer targeted solutions that cater to the specific needs of each industry, ensuring that your packaging performs optimally in its intended application.
                            </p>
                        </div>
                    </div>
                    <div className='d-flex my-2 ms-4'>
                        <div className='d-flex align-items-center me-2'>
                            <span><FaArrowRightLong className='AlumBenefitTabsIcon fs-5' /></span>
                        </div>
                        <div>
                            <h5 className='mb-0 sans_Medium'>Reliable Delivery:</h5>
                            <p className='sans_light text-secondary'>
                            Timely delivery is crucial to your business operations. We pride ourselves on our ability to meet deadlines and ensure that your orders are fulfilled promptly and accurately. Our efficient logistics and production processes are designed to deliver your packaging solutions on time, every time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyPartner