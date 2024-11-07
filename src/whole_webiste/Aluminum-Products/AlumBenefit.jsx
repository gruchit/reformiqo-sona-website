import React from 'react';
import Single_BlackBol_Line from '../../assets/single_BlackBol_Line.svg';
import Arrow from '../../assets/arrow.svg';
import { FaArrowRightLong } from 'react-icons/fa6';
import './Alum.css';

function AlumBenefit() {
    return (
        <>
            <div className='AlumBenefit'>
                <div className='flex-column'>
                    <div className='AlumBenefit_Img d-flex justify-content-center'>
                        <img src={Single_BlackBol_Line} alt="Line Decoration" />
                    </div>
                    <div className='AlumBenefit_ditals'>
                        <h2 className="text-center sans_light">Aluminium Benefits</h2>
                        <p className="text-center sans_light">
                            Aluminum tubes are a popular packaging option for leading industries because
                            they offer several <br /> advantages over other materials. Aluminum tubes are a great packaging option:
                        </p>
                    </div>
                </div>
            </div>
            <div className='AlumBenefitDown d-flex'>
                <img src={Arrow} alt="" srcset="" />
                <div className='AlumBenefitTabs flex-column me-auto'>
                    <div className='d-flex my-2 ms-4'>
                        <div className='d-flex align-items-center me-2'>
                            <span><FaArrowRightLong className='AlumBenefitTabsIcon fs-5' /></span>
                        </div>
                        <div>
                            <h4 className='mb-0 sans_light '>Durable</h4>
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
                            <h4 className='mb-0 sans_light'>Non-reactive</h4>
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
                            <h4 className='mb-0 sans_light'>Airtight</h4>
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
                            <h4 className='mb-0 sans_light'>Recyclable</h4>
                            <p className='sans_light text-secondary'>
                                Aluminum is 100% recyclable, which makes it an eco-friendly choice for packaging products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AlumBenefit;
