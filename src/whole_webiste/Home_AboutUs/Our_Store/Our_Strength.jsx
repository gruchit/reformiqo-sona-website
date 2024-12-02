import { useState, useEffect } from 'react';
import './Sona_About.css'
import Arrow_Left from '../../../assets/arrow_Left.svg'
import Double_bol_line from '../../../assets/double_bol_line.svg'
import Cosmetic1 from '../../../assets/Cosmetic1.svg'
import Industrial1 from '../../../assets/Industrial1.svg'
import Nutraceuticals from '../../../assets/Nutraceuticals.svg'
import Pharmaceutical1 from '../../../assets/Pharmaceutical1.svg'
import AOS from 'aos';



function Our_Strength() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className='Our_Strength'>
                <div className='flex-column'>
                    <div className='Our_Strength_images'>
                        <img src={Arrow_Left} alt="" className='left_arwOurSt' loading='lazy'
                            data-aos="fade-right"
                            data-aos-offset="50"
                            data-aos-duration="1000"
                            easing="ease-in-out"
                        />
                        <img src={Double_bol_line} alt="" srcset="" className='DoubleBolLine_Our' loading='lazy'
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            easing="ease-in-out"
                        />
                    </div>
                    <div className='Our_Strength_details'
                        data-aos="zoom-in-up"
                        data-aos-offset="50"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        easing="ease-in-out"
                        once="true"
                        mirror="true"
                    >
                        <h1 className='sans_bold text-center'>Our Strength</h1>
                        <p className='sans_light text-center text-secondary'>Our Formula for success: Precision manufacturing, quality assurance and
                            state-of-the-art technology.</p>
                    </div>
                    <div className='Our_Strength_cards_details'>
                        <div className='row d-flex justify-content-center'
                            data-aos="fade-up"
                            data-aos-offset="50"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            easing="ease-in-out"
                            once="true"
                            mirror="true"
                        >
                            <div className='col-xl-3 col-lg-4 col-md-6 mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 d-flex justify-content-center'>
                                <div className='Our_Strength_cards flex-column '>

                                    <img src={Pharmaceutical1} alt="" loading='lazy' />
                                    <h5 className='sans_Medium'>Efficient and Effective Technology</h5>
                                    <p className='sans_light text-secondary'>We manufacture using state-of-the-art machinery and technology making it possible for us to efficiently & effectively produce quality aluminium packaging solutions.</p>


                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 mt-5 mt-sm-5 mt-md-0 mt-lg-5 mt-xl-5 mt-xxl-5 d-flex justify-content-center'>
                                <div className='Our_Strength_cards flex-column '>

                                    <img src={Cosmetic1} alt="" loading='lazy' />
                                    <h5 className='sans_Medium'>Rigorous Quality Control</h5>
                                    <p className='sans_light text-secondary'>With a strict quality control procedure in place, we make sure that our products adhere to high standards of quality, giving customers dependable and consistent products.</p>


                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0 d-flex justify-content-center'>
                                <div className='Our_Strength_cards flex-column '>

                                    <img src={Nutraceuticals} alt="" loading='lazy' />
                                    <h5 className='sans_Medium'>Customized Solutions</h5>
                                    <p className='sans_light text-secondary'>We place a high value on comprehending the specific needs and developing custom solutions, ensuring products that are on par with or better than client’s expectations.</p>


                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6 mt-5 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5 mt-xxl-5 d-flex justify-content-center '>
                                <div className='Our_Strength_cards flex-column '>

                                    <img src={Industrial1} alt="" loading='lazy' />
                                    <h5 className='sans_Medium'>Green Practices</h5>
                                    <p className='sans_light text-secondary'>We are dedicated to using eco-friendly procedures and lessen our carbon footprint and advance sustainability and putting into practice energy-saving techniques.</p>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Our_Strength
