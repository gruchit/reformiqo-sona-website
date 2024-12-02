import React from 'react'
import { Link } from 'react-router-dom';
import Truck from '../../../assets/truck2.svg'
import AOS from 'aos';
import { useEffect } from 'react';
import './indu.css'


function IndustryTop() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className='IndustryTop'>
                <div className='container-xxl'>
                    <div className="row">
                        <div className='col-xl-6 col-lg-12  d-flex justify-content-center align-items-center p-0 m-0'
                         data-aos="fade-right"
                        >
                            <div className='absone_right text-center text-xl-start'>
                                <h1 className='sans_bold'>Evolving With Innovative,
                                    Premium - Quality Products
                                    For Ever - Changing Industry Requirements </h1>
                                <p className='sans_light text-secondary text-lg-center text-xl-start '>Sona Extrusion Pvt. Ltd. is a complete plant and has a separate Extrusion Area, Lacquering and Annealing Area, Printing Area and fully controlled 5 Micron positive air Handling Capping & Packing area. Area cleanliness is maintained by highest standard of hygiene which ensure good manufacturing practices.</p>
                                <div className='IndustryTop_Btn  mt-5'>
                                    <Link to="/About/Our-Store/" className=" text-decoration-none">
                                        <button className=" btn-1 hover-filled-slide-right"><span>Learn More</span></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 mt-5 col-lg-12 p-0 m-0' >
                            <div className='IndustryTop_left  d-flex justify-content-center'
                            data-aos="fade-left"
                            >
                                <img src={Truck} alt="" srcset="" loading='lazy'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndustryTop