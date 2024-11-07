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
import 'aos/dist/aos.css'; // Import AOS styles

function Our_client() {
    useEffect(() => {
        AOS.init();
    }, []);

    // Use a ref to control the slider programmatically
    const sliderRef = useRef(null);
    
    // State to track the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
    };

    // Handlers for the left and right arrow clicks
    const goToPrevious = () => sliderRef.current.slickPrev();
    const goToNext = () => sliderRef.current.slickNext();

    // Total number of slides
    const totalSlides = 2; // Update this value based on the number of slides you have

    return (
        <div className='Our_client'>
            <div className='row'>
                <div className='col-5 p-5'>
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
                            <img src={Double_bol_line} alt="" className='OurLeftArrow' />
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
                            <h1>What Our <br /> Clients Are <br /> Saying</h1>
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
                            <img src={double_bol_line} alt="" className='OurDoubleBol' />
                        </div>
                    </div>
                </div>

                {/* Right Section with Slick Slider */}
                <div className='col-7 Our_client_right p-5'
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
                            <div className='OurClientRight_top d-flex align-items-center'>
                                <img src={User} alt="" />
                                <div className='mx-4 my-auto'>
                                    <h5>Ratheesh Sheth</h5>
                                    <p className='m-0 text-secondary sans_light'>Procurement & Quality Head</p>
                                </div>
                                <img src={Star} alt="" />
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

                        {/* Add more slides here */}
                        <div>
                            <div className='OurClientRight_top d-flex align-items-center'>
                                <img src={User} alt="" />
                                <div className='mx-4 my-auto'>
                                    <h5>Another Client</h5>
                                    <p className='m-0 text-secondary sans_light'>CEO, XYZ Company</p>
                                </div>
                                <img src={Star} alt="" />
                            </div>
                            <div className='my-5'>
                                <p className='sans_light text-secondary'>
                                    "We are extremely satisfied with the level of service provided. 
                                    The product quality has been excellent, and the delivery was prompt."
                                </p>
                            </div>
                        </div>
                    </Slider>

                    <div className='addd d-flex justify-content-between align-items-center mt-auto'>
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
                        {/* Update the count display to show the current slide index and total slides */}
                        <p className='sans_light text-secondary m-0'>{currentSlide + 1}/{totalSlides}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Our_client;
