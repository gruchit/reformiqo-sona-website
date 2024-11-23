import React from 'react'
import Truck from '../../assets/truck2.svg'
import AOS from 'aos';
import { useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

function AboutSonaEx() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>

            <div className='AboutSonaEx'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-xl-6  col-lg-12 p-0 m-0'>
                            <div className='abSona_left  d-flex justify-content-center'>
                                <img src={Truck} alt="" srcset=""
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="200"
                                    data-aos-offset="0"
                                    data-aos-duration="1000"
                                />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-12 mt-5 d-flex justify-content-center p-0 m-0'>
                            {/* <div className='absone_right  text-lg-center px-xl-4 py-xl-0 text-xl-start p-lg-5 p-md-5 p-sm-5 ' */}
                            <div className='absone_right text-center text-xl-start'
                                data-aos="zoom-out-left"
                                data-aos-offset="0"
                                data-aos-delay="200"
                                data-aos-duration="1000">
                                <h3 className='mb-4 sans_Medium'>About Sona Extrusion</h3>
                                <h1 className='sans_bold'>Efficiently Crafting The Future: Innovating  effective Engineering</h1>
                                <p className='sans_light text-secondary text-lg-center text-xl-start '>We, Sona Extrusions, a leading manufacturer of aluminium collapsible tubes, containers and aluminium bottles/flasks in India with ISO 15378:2017 (GMP) Certified – SGS and ISO 9001:2015 Certified – TUV certification and have a verifiable 35+ years of reputation for providing high-quality standard products. </p>
                                <div className='YourChoice_Btn  mt-5'>
                                    <Link to="/About/Our-Store/" className=" text-decoration-none">
                                        <button class=" btn-1 hover-filled-slide-right"><span>Read More</span></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutSonaEx
