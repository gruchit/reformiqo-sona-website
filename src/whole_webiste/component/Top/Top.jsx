import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaPhoneAlt } from 'react-icons/fa';
import { LuMail, LuMails } from 'react-icons/lu';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Top.css';

function Top() {
    const [isSliderView, setIsSliderView] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        AOS.init({ duration: 1500, once: true });

        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 1200) {
                setIsSliderView(true);
                setSlidesToShow(width < 768 ? 1 : 2); 
            } else {
                setIsSliderView(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    };

    const socialIcons = [
        <AiOutlineYoutube className="text-white fs-5"/>,
        <FaFacebookF className="text-white fs-5" />,
        <FaLinkedinIn className="text-white fs-5" />,
        <FaInstagram className="text-white fs-5" />,
    ];

    const navItems = [
        { icon: <LuMails className="text-white fs-5" />, text: 'Contact@sonaextrusion.com' },
        { icon: <LuMail className="text-white fs-5" />, text: 'D&B DUNS® NUMBER - 91-802-7368' },
        { icon: <FaPhoneAlt className="text-white fs-5" />, text: 'Contact@sonaextrusion.com' },
    ];
    return (
        <div className="containers topofwebs mt-sm-3 mt-md-3 mt-lg-3">
            {isSliderView ? (
                <Slider {...sliderSettings}>
                    {navItems.map((item, index) => (
                        <div key={index} className="slider-item d-flex align-items-center justify-content-center">
                            <div className="nav-icon d-flex justify-content-center align-items-center">
                                {item.icon}
                            </div>
                            <p className="m-0 ms-3">{item.text}</p>
                        </div>
                    ))}
                    <div className="slider-item d-flex align-items-center justify-content-center">
                        <div className="header-right d-flex justify-content-evenly w-100 ps-xl-5">
                            {socialIcons.map((icon, index) => (
                                <div key={index} className="nav-icon-round d-flex justify-content-center align-items-center">
                                    <a  className='d-inline-block'>{icon}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </Slider>
            ) : (
                <div className="nav-top d-flex align-items-center" data-aos="fade-up">
                    <div className="header-left d-flex align-items-center justify-content-between w-75">
                        {navItems.map((item, index) => (
                            <div key={index} className="header-item d-flex align-items-center">
                                <div className="nav-icon d-flex justify-content-center align-items-center">
                                    {item.icon}
                                </div>
                                <p className="m-0 ms-3">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="header-right d-flex justify-content-evenly w-25 ps-5">
                        {socialIcons.map((icon, index) => (
                            <div key={index} className="nav-icon-round d-flex justify-content-center align-items-center">
                                <a >{icon}</a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* <hr data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000" className="mt-sm-3 mt-md-3 mt-lg-3 d-sm-none d-md-none d-lg-none d-xl-none" /> */}
        </div>
    );
}

export default Top;
