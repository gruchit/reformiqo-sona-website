import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Single_BlackBol_Line from '../../assets/single_BlackBol_Line.svg';
import Upcoming_Event from '../../assets/Upcomin_Event4.jpg';
// import Upcoming_Even from '../../assets/UPcomin_event3.png';
import Upcoming_Even from '../../assets/Upcoming_Event4.jpg';
import Upcoming_Eve from '../../assets/Upcomin_Event5.jpg';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

function UpComingEv() {
    const [isSliderActive, setIsSliderActive] = useState(false);

    const events = [
        { id: 1, date: "26-28", month: "Dec", title: "CPHI PMEC New Delhi", image: Upcoming_Event },
        { id: 2, date: "26-28", month: "Dec", title: "CPHI PMEC New Delhi", image: Upcoming_Even },
        { id: 3, date: "26-28", month: "Dec", title: "CPHI PMEC New Delhi", image: Upcoming_Eve },
        // Add more events as needed
    ];

    useEffect(() => {
        AOS.init();
        const handleResize = () => {
            setIsSliderActive(window.innerWidth < 1200 || events.length > 3);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, [events.length]);

    const sliderSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='UpcomingEv'>
            <div className='UpcomingEv_text flex-column'
                data-aos="zoom-in-up"
                data-aos-offset="50"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-mirror="true"
            >
                <div className='d-flex justify-content-center'>
                    <img src={Single_BlackBol_Line} alt="" className='' />
                </div>
                <h2 className='text-center'>Upcoming Events</h2>
            </div>

            <div className='slider-container' 
                data-aos="zoom-in-up" 
                data-aos-offset="0" 
                data-aos-delay="1000" 
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
                data-aos-once="true" 
                data-aos-mirror="true"
            >
                {isSliderActive ? (
                    <Slider {...sliderSettings}>
                        {/* UpcomingEv_text */}
                        {events.map((event) => (
                            <div key={event.id} className="date_Upcominrela col-4 p-0 mt-5 d-flex justify-content-center">
                                <div className='date_Upcomin flex-column text-white'>
                                    <p className='p-0 m-0 sans_light'>{event.date}</p>
                                    <h4 className='p-0 m-0 sans_light'>{event.month}</h4>
                                </div>
                                <div className='UpcomingEv_box flex-column'>
                                    <img src={event.image} alt={event.title} />
                                    <h4 className='text-center my-xxl-3 my-xl-3 my-lg-3 my-md-3 my-sm-3 my-2'>{event.title}</h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className='container'>
                    <div className="row">
                        {events.map((event) => (
                            <div key={event.id} className="date_Upcominrela col-4 p-0 d-flex justify-content-center">
                                <div className='date_Upcomin flex-column text-white'>
                                    <p className='p-0 m-0 sans_light'>{event.date}</p>
                                    <h4 className='p-0 m-0 sans_light'>{event.month}</h4>
                                </div>
                                <div className='UpcomingEv_box flex-column'>
                                    <img src={event.image} alt={event.title} />
                                    <h4 className='text-center my-xxl-3 my-xl-3 my-lg-3 my-md-3 my-sm-3 my-2'>{event.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div> 
                )}
            </div>
        </div>
    );
}

export default UpComingEv;
