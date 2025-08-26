import React from 'react'
import Logo from '../../../assets/DownloadLogo.png'
import Insta from '../../../assets/Footer_instagram.svg'
import Facebook from '../../../assets/Footer_facebook.svg'
import Youtube from '../../../assets/Footer_youtube.svg'
import Linkdin from '../../../assets/Footer_linkedin.svg'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { FaGlobe } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import './Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                        data-aos-offset="100"
                        data-aos-duration="500"
                        easing="ease-in-out"
                        data-aos-once="true"
                        mirror="true"
                    >
                        <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-5'>
                            <div className='Footer_logo flex-column px-4'>
                                <div className='d-flex justify-content-center'>
                                    <img src={Logo} alt="" className='' loading='lazy' />
                                </div>
                                <p className='sans_light text-secondary'>Sona Extrusion Private Limited is one of the leading manufacturers of aluminum collapsible tubes, containers and aluminum bottles/flasks in India, US FDA DMF Registered, ISO 15378(SGS) & ISO 9001(TUV-SUD) certified company.</p>
                                <div className='Footer_Bottom_icon d-flex justify-content-center mt-4 gap-4'>
                                    <a href="https://www.facebook.com/sonaextrusion/" target="_blank" className='text-decoration-none' >
                                        <FaFacebook className='IconsetFooter'/>
                                    </a>
                                    <a href="https://www.instagram.com/sonaepl" target="_blank" className='text-decoration-none' >
                                        <RiInstagramFill className='IconsetFooter'/>
                                    </a>
                                    <a href="https://in.linkedin.com/company/sonaextrusion" target="_blank" className='text-decoration-none' >
                                        <ImLinkedin className='IconsetFooter'/>
                                    </a>
                                    <a href="https://www.youtube.com/@sonaextrusion2116" className='text-decoration-none' target="_blank">
                                        <BsYoutube className='IconsetFooter'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-top mb-5'>
                            <div className='Quick_link'>
                                <h2 className=' text-white Cont_number'>Quick Links</h2>
                                <ul className='ps-5 '>
                                    <li className=' p-1'>
                                        <Link to="/About/Our-Story" className='sans_light FooterList text-decoration-none '>
                                            Our Story
                                        </Link>
                                    </li>
                                    <li className=' p-1'>
                                        <Link to="/About/Advatages-Sona" className='sans_light FooterList text-decoration-none '>
                                            Advantage Sona
                                        </Link>
                                    </li>
                                    <li className=' p-1'>
                                        <Link to="/About/Manufacturing-Unit" className='sans_light FooterList text-decoration-none '>
                                            Manufacturing Unit
                                        </Link>
                                    </li>
                                    <li className=' p-1'>
                                        <Link to="/Industry" className='s_light FooterList text-decoration-none '>Industries We Serve</Link>
                                    </li>
                                    <li className=' p-1'>
                                        <Link to="/Aluminum-Products" className='s_light FooterList text-decoration-none '>Aluminum Products</Link>
                                    </li>
                                    <li className=' p-1'>
                                        <Link to="/ReachUs" className='s_light FooterList text-decoration-none '>Reach Us
                                        </Link>
                                    </li>
                                    <li className=' p-1'>
                                        <Link to="/Resources/BlogMedia" className='s_light FooterList text-decoration-none '>Blogs
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-top  mb-5'>
                            <div className='Contact_Company '>
                                
                                <h2 className='sans_Medium text-white text-center'>Contact Company</h2>
                                <div className='Cont_number d-flex p-3 justify-contact-center'>
                                    <div>
                                        <FaPhoneAlt className='FooterList' />
                                    </div>
                                    <div className='ms-4 FooterList'>
                                        <a
                                            href="tel:+919227663451"
                                            className="sans_light m-0 text-decoration-none FooterList"
                                        >
                                            +91 9227663451
                                        </a>
                                        <br />
                                        <a
                                            href="tel:+919825472173"
                                            className="sans_light m-0 text-decoration-none FooterList"
                                        >
                                            +91 9825472173
                                        </a>
                                    </div>
                                </div>

                                <div className='Cont_mail d-flex p-3'>
                                    <div>
                                        <IoMdMail className='FooterList' />
                                    </div>
                                    <div className='ms-4 FooterList'>
                                        <a
                                            href="mailto:contact@sonaextrusion.com"
                                            className="sans_light m-0 text-decoration-none FooterList"
                                        >
                                            contact@sonaextrusion.com
                                        </a>
                                    </div>
                                </div>
                                <div className='Cont_location d-flex p-3'>
                                    <div>
                                        <ImLocation2 className='FooterList' />
                                    </div>
                                    <div className='ms-4 FooterList'>
                                        <a
                                            href="https://maps.app.goo.gl/Ui9Mum6WGqupDwDZ7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sans_light m-0 text-decoration-none FooterList"
                                        >
                                            Plot 470, 471 & 472, New G.I.D.C, Kabilpore, Navsari-396 424, Gujarat, India.
                                        </a>
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
