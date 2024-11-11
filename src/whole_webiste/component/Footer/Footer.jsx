import React from 'react'
import Logo from '../../../assets/logo.svg'
import Insta from '../../../assets/Footer_instagram.svg'
import Facebook from '../../../assets/Footer_facebook.svg'
import Youtube from '../../../assets/Footer_youtube.svg'
import Linkdin from '../../../assets/Footer_linkedin.svg'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { FaGlobe } from "react-icons/fa";
import './Footer.css'
import AOS from 'aos';
import { useEffect } from 'react';

function Footer() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className='Footer'>
                <div className='container-xxl '>
                    <div className='row d-flex justify-content-center'
                        data-aos="zoom-in-up"
                        data-aos-offset="0"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                        easing="ease-in-out"
                        once="true"
                        mirror="true"

                    >
                        <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center'>
                            <div className='Footer_logo flex-column px-4'>
                                <div className='d-flex justify-content-center'>
                                    <img src={Logo} alt="" className='' />
                                </div>
                                <p className='sans_light text-secondary'>Sona Extrusion Private Limited is one of the leading manufacturers of aluminium collapsible tubes, containers and aluminium bottles/flasks in India, US FDA DMF Registered, ISO 15378(SGS) & ISO 9001(TUV-SUD) certified company.</p>
                                <div className='Footer_Bottom_icon d-flex justify-content-center mt-3 '>
                                    <img src={Facebook} alt="" />
                                    <img src={Insta} alt="" />
                                    <img src={Linkdin} alt="" />
                                    <img src={Youtube} alt="" />

                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center'>
                            <div className='Quick_link'>
                                <h3 className='text-white sans_light'>Quick Links</h3>
                                <ul className='ps-5 '>
                                    <li className='text-secondary p-1'><a href="" className='sans_light text-decoration-none text-secondary'>Our Story</a></li>
                                    <li className='text-secondary p-1'><a href="" className='sans_light text-decoration-none text-secondary'>Advantage Sona</a></li>
                                    <li className='text-secondary p-1'><a href="" className='sans_light text-decoration-none text-secondary'>Manufacturing Unit</a></li>
                                    <li className='text-secondary p-1'><a href="" className='sans_light text-decoration-none text-secondary'>Industries We Serve</a></li>
                                    <li className='text-secondary p-1'><a href="" className='sans_light text-decoration-none text-secondary'>Aluminium Products</a></li>
                                    <li className='text-secondary p-1'><a href="" className='sans_light text-decoration-none text-secondary'>Contact Us</a></li>
                                    <li className='text-secondary p-1'><a href="" className='sans_light text-decoration-none text-secondary'>Enquiry</a></li>
                                </ul>

                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center'>
                                <div className='Contact_Company p-lg-3'>
                                <h3 className='sans_light text-white text-center'>Contact Company</h3>
                                    <div className='Cont_number d-flex p-3'>
                                        <div className=''>
                                            <FaPhoneAlt className='text-secondary' />
                                        </div>
                                        <div className=' ms-4 text-secondary '>
                                            <p className='sans_light m-0'>+91 9227663451</p>
                                            <p className='m-0 sans_light'>+91 9825472173</p>
                                        </div>

                                    </div>
                                    <div className='Cont_mail d-flex p-3'>
                                        <div className=''>
                                            <IoMdMail className='text-secondary' />
                                        </div>
                                        <div className=' ms-4 text-secondary '>
                                            <p className='sans_light m-0'>contact@sonaextrusion.com</p>
                                        </div>

                                    </div>
                                    <div className='Cont_location d-flex p-3'>
                                        <div className=''>
                                            <ImLocation2 className='text-secondary' />
                                        </div>
                                        <div className=' ms-4 text-secondary '>
                                            <p className='sans_light m-0'>Plot 470, 471 & 472, New G.I.D.C, Kabilpore,Navsari-396 424,Gujarat, India.</p>
                                        </div>

                                    </div>
                                    <div className='Cont_globle d-flex p-3'>
                                        <div className=''>
                                            <FaGlobe className='text-secondary' />
                                        </div>
                                        <div className=' ms-4 text-secondary '>
                                            <p className='sans_light m-0'>www.sonaextrusion.com</p>
                                        </div>

                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
