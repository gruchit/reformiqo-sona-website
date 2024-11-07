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
                <div className='row'>
                    <div className='col-6 p-0 m-0'>
                        <div className='abSona_left  d-flex justify-content-center'>
                            <img src={Truck} alt="" srcset=""
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0"
                            />
                        </div>
                    </div>
                    <div className='col-6 d-flex justify-content-center p-0 m-0'>
                        <div className='absone_right'
                            data-aos="zoom-out-left"
                            data-aos-offset="0"
                            data-aos-delay="1000"
                            data-aos-duration="3000">
                            <h5 className='mb-4'>About Sona Extrusion</h5>
                            <h1>Efficiently Crafting The <br /> Future: Innovating <br /> effective Engineering</h1>
                            <p className='sans_light'>We, Sona Extrusions, a leading manufacturer of <br /> aluminium collapsible tubes, containers and <br /> aluminium bottles/flasks in India with ISO <br /> 15378:2017 (GMP) Certified – SGS and ISO <br /> 9001:2015 Certified – TUV certification and have <br /> a verifiable 35+ years of reputation for providing <br /> high-quality standard products. </p>
                            <div className='YourChoice_Btn d-flex justify-content-center mt-5'>
                                <button type="button" className='btn'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutSonaEx
