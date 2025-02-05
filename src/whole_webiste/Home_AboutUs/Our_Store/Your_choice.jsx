import React, { useEffect, useState } from "react";
import './Sona_About.css';
import Arrow_Left from '../../../assets/arrow_Left.svg'
import Bot_bol_3 from '../../../assets/bot_bol_3.png'
import Idea_white from '../../../assets/idea_white.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
function Your_choice() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    return (
        <>
            <div className="Your_choice">
                <div className="flex-column">
                    <div className="Your_choice_leftArrow">
                        <img src={Arrow_Left} alt="" loading='lazy'
                            data-aos="fade-right"
                            data-aos-duration="1300"

                        />
                    </div>
                    <div className="YourChoice_Details"
                        data-aos="zoom-in-up"
                        data-aos-offset="200"
                        // data-aos-delay="1000"
                        data-aos-duration="500"
                    >
                        <h1 className="text-center sans_bold">
                            We're Your Choice for Aluminum Collapsible <br />
                            Tubes, Containers and Aluminum Bottles / Flasks
                        </h1>
                        <p className="text-center text-secondary sans_light p-3">With over three decades of experience, Sona Extrusion have made a mark as the pioneer of aluminum collapsible tubes, containers and  aluminum bottles/flasks. Our focus has always been on quality, innovation and customer satisfaction. We have developed a reputation for creating products that are of the highest calibre, dependable and customizable to suit the various industries requirements.</p>
                    </div>
                    <div className='YourChoice_Btn d-flex justify-content-center mb-5'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-duration="500"
                    >
                        <Link to="/Aluminum-Products/Flasks-And-Bottles/" className="text-decoration-none ">
                            <button type="button" className='AboutSonaExBtn '>Learn More</button>
                        </Link>
                    </div>
                    <div className='YAboutSonaEx_tubes d-flex justify-content-center'
                        data-aos="zoom-in"
                        data-aos-duration="500"
                    >
                        <div className='d-flex justify-content-start align-items-center'>
                            <span className='d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block'>
                                <img src={Bot_bol_3} alt="" className='YAboutSonaExtubesImg' loading='lazy' />
                            </span>
                        </div>
                        <div className='YourChoice_tubes_box  d-lg-flex d-xl-flex d-xxl-flex align-items-start'>
                            <div className=''>
                                <img src={Idea_white} alt="" loading='lazy'
                                    data-aos="zoom-in"
                                    data-aos-offset="200"
                                    data-aos-duration="500"
                                />
                            </div>
                            <div className='flex-column text-white p-3'>
                                <h3 className='sans_bold'>500 Mn Tubestubes</h3>
                                <p className='sans_light m-0'>By leveraging advanced technology, hiring highly skilled professionals and engaging sustainable production practices, Sona Extrusion is one of the leading manufacturers of aluminum packaging solutions. We produce 500 million collapsible tubes annually, establishing ourselves as one of the country's most sought-after packaging companies. Our high-quality, multipurpose collapsible tubes are versatile and easy to use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Your_choice
