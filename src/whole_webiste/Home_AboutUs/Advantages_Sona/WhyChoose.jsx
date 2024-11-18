import React from 'react'
import './AdvantSona.css'
import Double_bol_line from '../../../assets/double_bol_line.svg'
import Arrow from '../../../assets/arrow.svg'

import { FaCheck } from "react-icons/fa6";

function WhyChoose() {
    return (
        <>
            <div className='WhyChoose'>
                <img src={Double_bol_line} alt="" srcset="" className='WhyDoted'/>
                <div className='container-xxl p-0 m-0'>
                    <h3 className='SonaTxtColor text-center sans_light'>Why Choose Us</h3>
                    <h1 className='text-center sans_light'>We Manufacture With Responsibility </h1>
                    <p className='text-center sans_light'>Sona Extrusion’s reputation for quality, dependability, and timeliness is why we are the trusted partners for various businesses, both nationally and internationally. Our customers receive consistently high-quality products thanks to our company’s commitment to strict quality control procedures.</p>
                </div>
            </div>
            <div className='WhyChooseTXT '>
                <img src={Arrow} alt="" srcset="" className='WhyArrow'/>
                <div className='container'>
                        <div className='d-flex justify-content-center'>
                            <ul className=' list-unstyled sans_light'>
                                <li className='py-2'><FaCheck className='WhyIcon fs-6 me-4'/><a href="" className='text-black text-decoration-none'>Leading Manufacturer of Aluminium Collapsible Tubes, Containers, Bottles and Flasks</a></li>
                                <li className='py-2'><FaCheck className='WhyIcon fs-6 me-4'/><a href="" className='text-black text-decoration-none'>One of the Largest Single Roof Production Capacity in India</a></li>
                                <li className='py-2'><FaCheck className='WhyIcon fs-6 me-4'/><a href="" className='text-black text-decoration-none'>Manufacturing Capacity of 500 Mn Tubes & 50 Mn Flasks/Containers per annum</a></li>
                            </ul>
                        </div>
                        <p className='text-center text-secondary sans_light'>We are delivering premium quality products meeting the ever-changing requirements of our elite customers in the markets of Canada, U.S.A., U.K., Spain, Sweden, Russia, India, Sri Lanka, Singapore, Malaysia, Australia, Nigeria, Joran, Ethiopia, South Africa, and many more.</p>
                    </div>
                </div>
        </>
    )
}

export default WhyChoose