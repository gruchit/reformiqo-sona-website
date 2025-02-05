import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { FaPhoneAlt } from 'react-icons/fa';
import { LuMail, LuMails } from 'react-icons/lu';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Top.css';

function Top() {
    const [isSliderView, setIsSliderView] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        AOS.init({ duration: 600, once: false });

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
        { iconss: <AiOutlineYoutube className="text-white d-iniline-block  fs-4" />, linkRedirect: 'https://www.youtube.com/@sonaextrusion2116'},
        { iconss: <FaFacebookF className="text-white  fs-4 d-iniline-block" />, linkRedirect: 'https://www.facebook.com/sonaextrusion/'},
        { iconss: <FaLinkedinIn className="text-white fs-4 d-iniline-block" />, linkRedirect: 'https://in.linkedin.com/company/sonaextrusion'},
        { iconss: <FaInstagram className="text-white fs-4 d-iniline-block" />, linkRedirect: 'https://www.instagram.com/sonaepl'}
    ];

    const navItems = [
        { icon: <LuMails className="text-white fs-5" />, text: 'Contact@sonaextrusion.com', linkRedirect: 'mailto:contact@sonaextrusion.com' },
        { icon: <LuMail className="text-white fs-5" />, text: 'D&B DUNS® NUMBER-91-802-7368', linkRedirect: '' },
        { icon: <FaPhoneAlt className="text-white fs-5" />, text: '+91 9227663451', linkRedirect: 'tel:+919227663451' },
    ];
    return (
        <div className="containers topofwebs my-sm-2 my-md-2 my-lg-2">
            {isSliderView ? (
                <div className='d-xl-none d-xxl-none d-block'>
                    <Slider {...sliderSettings}>
                        {navItems.map((item, index) => (
                            <div key={index} className="slider-item d-flex align-items-center justify-content-center">
                                <div className="nav-icon cursurePoint d-flex justify-content-center align-items-center">
                                    {item.icon}
                                </div>
                                {item.linkRedirect ? (
                                        <a
                                            href={item.linkRedirect}
                                            className="text-decoration-none cursurePoint m-0 ms-3 text-black"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <a
                                            className="text-decoration-none cursurePoint m-0 ms-3 text-black"
                                            onClick={(e) => e.preventDefault()} 
                                        >
                                            {item.text}
                                        </a>
                                    )}
                                
                            </div>
                        ))}
                        <div className="slider-item d-flex align-items-center justify-content-center">
                            <div className="header-right d-flex justify-content-evenly w-100 ps-xl-5">
                                {socialIcons.map((icon, index) => (
                                    <div key={index} className="nav-icon-round d-flex justify-content-center align-items-center">
                                        <a href={icon.linkRedirect} className='d-iniline-block cursurePoint' target="_blank">{icon.iconss}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Slider>
                </div>
            ) : (
                <div className='d-xl-block d-xxl-block d-none'>
                    <div className="nav-top d-flex align-items-center  " data-aos="fade-down">
                        <div className="header-left d-flex align-items-center justify-content-between w-75">
                            {navItems.map((item, index) => (
                                <div key={index} className="header-item d-flex align-items-center">
                                    <div className="nav-icon cursurePoint d-flex justify-content-center align-items-center">
                                        {item.icon}
                                    </div>
                                    {item.linkRedirect ? (
                                        <a
                                            href={item.linkRedirect}
                                            className="text-decoration-none cursurePoint m-0 ms-3 text-black"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <a
                                            className="text-decoration-none cursurePoint m-0 ms-3 text-black"
                                            onClick={(e) => e.preventDefault()} 
                                        >
                                            {item.text}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="header-right d-flex justify-content-evenly w-25 ps-5">
                            {socialIcons.map((icon, index) => (
                                <div key={index} className="nav-icon-round d-flex justify-content-center align-items-center">
                                    <a href={icon.linkRedirect} className='d-iniline-block cursurePoint' target="_blank">{icon.iconss}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Top;
