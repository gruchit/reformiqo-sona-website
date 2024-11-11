import React from 'react'
import Truck from '../../assets/truck2.svg'
import AOS from 'aos';
import { useEffect } from 'react';
import './Home.css'

function AboutSonaEx() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>

            <div className='AboutSonaEx  '>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-12 p-0 m-0'>
                            <div className='abSona_left  d-flex justify-content-center'>
                                <img src={Truck} alt="" srcset=""
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="300"
                                    data-aos-offset="0"
                                />
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-12 d-flex justify-content-center p-0 m-0'>
                            {/* <div className='absone_right  text-lg-center px-xl-4 py-xl-0 text-xl-start p-lg-5 p-md-5 p-sm-5 ' */}
                            <div className='absone_right text-lg-center text-xl-start'
                                data-aos="zoom-out-left"
                                data-aos-offset="0"
                                data-aos-delay="1000"
                                data-aos-duration="3000">
                                <h3 className='mb-4'>About Sona Extrusion</h3>
                                <h1>Efficiently Crafting The Future: Innovating  effective Engineering</h1>
                                <p className='sans_light'>We, Sona Extrusions, a leading manufacturer of aluminium collapsible tubes, containers and aluminium bottles/flasks in India with ISO 15378:2017 (GMP) Certified – SGS and ISO 9001:2015 Certified – TUV certification and have a verifiable 35+ years of reputation for providing high-quality standard products. </p>
                                <div className='YourChoice_Btn d-flex justify-content-center mt-5'>
                                    <button type="button" className='btn'>Learn More</button>
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
