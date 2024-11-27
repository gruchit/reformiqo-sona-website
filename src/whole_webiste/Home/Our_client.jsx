import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick'; // Import slick slider
import './Home.css';
import Double_bol_line from '../../assets/arrow_Left.svg';
import double_bol_line from '../../assets/double_bol_line.svg';
import User from '../../assets/User.svg';
import Star from '../../assets/star.svg';
import left_S_aro from '../../assets/left_S_aro.svg';
import Right_S_aro from '../../assets/right_S_aro.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Our_client() {
    useEffect(() => {
        AOS.init();
    }, []);
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentSlide(next),
    };
    const goToPrevious = () => sliderRef.current.slickPrev();
    const goToNext = () => sliderRef.current.slickNext();
    const totalSlides = 2;
    return (
        <div className='Our_client '>
            <div className=''>
                <div className='row'>
                    <div className='col-xxl-5 col-xl-5 p-5 col-md-12 col-sm-12'>
                        <div className='Our_client_left flex-column d-flex'>
                            <div
                                className='d-flex justify-content-end'
                                data-aos="fade-right"
                                data-aos-offset="50"
                                data-aos-delay="300"
                                data-aos-duration="3000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                                data-aos-mirror="true"
                            >
                                <img src={Double_bol_line} alt="" className='OurLeftArrow' loading='lazy'/>
                            </div>
                            <div
                                className='d-flex justify-content-center'
                                data-aos="fade-right"
                                data-aos-offset="50"
                                data-aos-delay="0"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                                data-aos-mirror="true"
                            >
                                <h1 className='d-md-none d-sm-none d-lg-none d-xxl-none d-xl-none d-none sans_bold'>What Our <br /> Clients Are <br /> Saying</h1>
                                <h1 className='d-md-block d-sm-block sans_bold'>What Our Clients Are  Saying</h1>
                            </div>

                            <div
                                className='d-flex justify-content-start'
                                data-aos="fade-up"
                                data-aos-offset="50"
                                data-aos-delay="0"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
                                data-aos-mirror="true"
                            >
                                <img src={double_bol_line} alt="" className='OurDoubleBol' loading='lazy'/>
                            </div>
                        </div>
                    </div>
                    <div className='me-auto col-xxl-7 col-xl-7 col-md-12 col-sm-12 Our_client_right p-3 p-sm-4 p-md-5 p-lg-5 p-xl-5 p-xxl-5' 
                        data-aos="fade-left"
                        data-aos-offset="50"
                        data-aos-delay="0"
                        data-aos-duration="1500"
                        easing="ease-in-out"
                        once="true"
                        mirror="true"
                    >
                        <Slider ref={sliderRef} {...settings}>
                            <div>
                                <div className='OurClientRight_top d-xxl-flex d-xl-flex d-lg-flex d-md-flex align-items-xxl-center align-items-xl-center align-items-lg-center align-items-md-center '>
                                    <img src={User} alt="" className='m-auto m-xxl-0 m-xl-0 m-lg-0 m-md-0' loading='lazy'/>
                                    <div className='mx-4 my-auto '>
                                        <h5 className='text-xl-start text-center text-xxl-start'>Ratheesh Sheth</h5>
                                        <p className='text-xl-start text-xxl-start m-0 text-center text-center text-secondary sans_light'>Procurement & Quality Head</p>
                                    </div>
                                    <img src={Star} alt="" className='m-auto m-xxl-0 m-xl-0 m-lg-0 m-md-0' loading='lazy'/>
                                </div>
                                <div className='my-5'>
                                    <p className='sans_light text-secondary showPro p-3'>
                                        “Sona Extrusion is a very courteous and prompt team.
                                        With their three decades of manufacturing experience,
                                        the aluminium collapsible tubes have been of superior quality,
                                        and they kept their commitment to delivery on time.
                                        Very happy with Sona Extrusion’s overall commitment.“
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className='OurClientRight_top d-xxl-flex d-xl-flex d-lg-flex d-md-flex align-items-xxl-center align-items-xl-center align-items-lg-center align-items-md-center'>
                                    <img src={User} alt="" className='m-auto m-xxl-0 m-xl-0 m-lg-0 m-md-0' loading='lazy'/>
                                    <div className='mx-4 my-auto'>
                                        <h5 className='text-xl-start text-xxl-start text-center'>Another Client</h5>
                                        <p className='m-0 text-secondary sans_light text-xl-start text-center text-xxl-start'>CEO, XYZ Company</p>
                                    </div>
                                    <img src={Star} alt="" className='m-auto m-xxl-0 m-xl-0 m-lg-0 m-md-0' loading='lazy'/>
                                </div>
                                <div className='my-5'>
                                    <p className='sans_light text-secondary'>
                                        "We are extremely satisfied with the level of service provided.
                                        The product quality has been excellent, and the delivery was prompt."
                                    </p>
                                </div>
                            </div>
                        </Slider>

                        <div className='addd d-flex justify-content-between align-items-center mt-auto px-5'>
                            <div className='arowOur d-flex align-items-center'>
                                {/* Left Arrow */}
                                <img
                                    src={left_S_aro}
                                    alt=""
                                    className='me-3'
                                    onClick={goToPrevious}
                                    style={{ cursor: 'pointer' }}
                                />

                                {/* Right Arrow */}
                                <img
                                    src={Right_S_aro}
                                    alt=""
                                    className='ms-3'
                                    onClick={goToNext}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>

                            <p className='sans_light text-secondary m-0'>{currentSlide + 1}/{totalSlides}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Our_client;
