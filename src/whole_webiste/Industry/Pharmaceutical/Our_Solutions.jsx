import React from 'react'
import StateArt from '../../../assets/StateArt.svg'
import Customizable from '../../../assets/Customizable.svg'
import Regulatory from '../../../assets/Regulatory.svg'
import Arrow from '../../../assets/arrow.svg'
import HighTech from '../../../assets/High-Tech.svg'
import Widerange from '../../../assets/Wide-range.svg'
import Environmentally from '../../../assets/Environmentally.svg'
import Extensive from '../../../assets/Extensive.svg'
import Quality from '../../../assets/Quality.svg'
import Cost from '../../../assets/Cost.svg'
import Highest from '../../../assets/Highest.svg'
import Configurability from '../../../assets/Configurability.svg'
import Industryexpertise from '../../../assets/Industry-expertise.svg'
import './pharm.css'
import AOS from 'aos';
import { useEffect } from 'react';
function Our_Solutions({ Type }) {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className='Our_Solutions'>
                <div className='container-xxl'>
                    <div className='OurSoluTxt'
                    data-aos="zoom-in-up"
                    data-aos-offset="300"
                    >
                        <h1 className='sans_bold text-center pb-5 mb-5'>Our Solutions & Benefits</h1>
                    </div>
                    <img src={Arrow} alt="" className='OurSoluLftArw' loading='lazy' data-aos="fade-left"/>
                    <div className='OurSoluCards'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-4  col-lg-4 col-md-6   mt-lg-0'>
                                <div className='d-flex justify-content-center'
                                data-aos="zoom-in-up"
                                data-aos-offset="300"
                                >
                                    <div className='OurSoluCard  flex-column  mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0'>

                                        {Type === "Cosm" ?
                                            <>
                                                <img src={HighTech} alt="" className='OurSoluImg' loading='lazy'/>
                                                <div className='mt-5'>
                                                    <h5 className='sans_Medium'>High-Tech Processes</h5>
                                                    <p className='text-secondary sans_Light mt-3'>We are a customer-centric company committed to offering our loyal pharmaceutical customers a cutting-edge manufacturing facility that makes High quality aluminium packaging solution using cutting-edge technology and equipment. Our committed team of engineers and technicians makes sure that each product that is released onto the market is up to the highest standards of reliability and quality. Our tubes are preferred because they are chemically stable and provide protection against contamination, oxidation, evaporation, and microbial growth.</p>
                                                </div>
                                            </>
                                            :
                                            Type === "Nut" ?
                                                <>
                                                    <img src={Extensive} alt="" className='OurSoluImg' loading='lazy'/>
                                                    <div className='mt-5'>
                                                        <h5 className='sans_Medium'>Extensive Industry Experience</h5>
                                                        <p className='text-secondary sans_Light mt-3'>The company has more than three decades of wholistic experience in the manufacturing of canisters and bottles for Nutraceuticals companies. Over the course of those three decades, we have perfected the process of creating canisters and bottles to provide companies with safe and effective storage solutions. We are renowned for our quality craftsmanship, attention to detail and unparalleled customer service.
                                                            Quality and Innovation</p>
                                                    </div>
                                                </>
                                                :
                                                Type === "Indu" ?
                                                    <>
                                                        <img src={Highest} alt="" className='OurSoluImg' loading='lazy'/>
                                                        <div className='mt-5'>
                                                            <h5 className='sans_Medium'>Highest-level of
                                                                Customer Service</h5>
                                                            <p className='text-secondary sans_Light mt-3'>We are a customer-centric company committed to offering our loyal pharmaceutical customers a cutting-edge manufacturing facility that makes High quality aluminium packaging solution using cutting-edge technology and equipment. Our committed team of engineers and technicians makes sure that each product that is released onto the market is up to the highest standards of reliability and quality. Our tubes are preferred because they are chemically stable and provide protection against contamination, oxidation, evaporation, and microbial growth.</p>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        <img src={StateArt} alt="" className='OurSoluImg' loading='lazy'/>
                                                        <div className='mt-5'>
                                                            <h5 className='sans_Medium'>State-of-the-art manufacturing facility</h5>
                                                            <p className='text-secondary sans_Light mt-3'>We are a customer-centric company committed to offering our loyal pharmaceutical customers a cutting-edge manufacturing facility that makes High quality aluminium packaging solution using cutting-edge technology and equipment. Our committed team of engineers and technicians makes sure that each product that is released onto the market is up to the highest standards of reliability and quality. Our tubes are preferred because they are chemically stable and provide protection against contamination, oxidation, evaporation, and microbial growth.</p>
                                                        </div>
                                                    </>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6  mt-lg-0'>
                                <div className=' d-flex justify-content-center'
                                data-aos="zoom-in-up"
                                data-aos-offset="300"
                                >
                                    <div className='OurSoluCard   flex-column  mt-5 mt-sm-5 mt-md-0 mt-lg-5 mt-xl-5 mt-xxl-5'>
                                        {Type === "Cosm" ?
                                            <>
                                                <img src={Widerange} alt="" className='OurSoluImg' loading='lazy'/>
                                                <div className='mt-5'>
                                                    <h5 className='sans_Medium'>Wide-Range Product</h5>
                                                    <p className='text-secondary sans_Light mt-3'>We are committed to providing adaptable solutions to satisfy the requirements of pharmaceutical companies. By tailoring the services to the specific needs of the clients, we are able to provide cost-effective solutions that increase efficiency and optimise production capabilities. In order to create custom packaging solutions that satisfy each customer's specific needs—including tube size and printing—SONA EXTRUSION works closely with them. From the outset, SONA EXTRUSION strives to understand their customers’ individual requirements and ensure that the design and production processes are aligned with them.</p>
                                                </div>
                                            </>
                                            :
                                            Type === "Nut" ?
                                                <>
                                                    <img src={Quality} alt="" className='OurSoluImg' loading='lazy'/>
                                                    <div className='mt-5'>
                                                        <h5 className='sans_Medium'>Quality and Innovation</h5>
                                                        <p className='text-secondary sans_Light mt-3'>Our primary focus is producing high-quality aluminium collapsible tube in order to satisfy the unique requirements of our Agro-Chemical companies. Through highly advance production techniques and careful research and development, we have become the go-to supplier for all companies looking for highest quality products. To ensure consistency in quality and dependability, our manufacturing process makes use of cutting-edge technology and stringent quality control procedures.</p>
                                                    </div>
                                                </>
                                                :
                                                Type === "Indu" ?
                                                    <>
                                                        <img src={Configurability} alt="" className='OurSoluImg' loading='lazy'/>
                                                        <div className='mt-5'>
                                                            <h5 className='sans_Medium'>Configurability and
                                                                personalization</h5>
                                                            <p className='text-secondary sans_Light mt-3'>We are committed to providing adaptable solutions to satisfy the requirements of pharmaceutical companies. By tailoring the services to the specific needs of the clients, we are able to provide cost-effective solutions that increase efficiency and optimise production capabilities. In order to create custom packaging solutions that satisfy each customer's specific needs—including tube size and printing—SONA EXTRUSION works closely with them. From the outset, SONA EXTRUSION strives to understand their customers’ individual requirements and ensure that the design and production processes are aligned with them.</p>
                                                        </div>
                                                    </>
                                                    : <>
                                                        <img src={Customizable} alt="" className='OurSoluImg' loading='lazy'/>
                                                        <div className='mt-5'>
                                                            <h5 className='sans_Medium'>Customizable solutions</h5>
                                                            <p className='text-secondary sans_Light mt-3'>We are committed to providing adaptable solutions to satisfy the requirements of pharmaceutical companies. By tailoring the services to the specific needs of the clients, we are able to provide cost-effective solutions that increase efficiency and optimise production capabilities. In order to create custom packaging solutions that satisfy each customer's specific needs—including tube size and printing—SONA EXTRUSION works closely with them. From the outset, SONA EXTRUSION strives to understand their customers’ individual requirements and ensure that the design and production processes are aligned with them.</p>
                                                        </div>
                                                    </>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6  mt-lg-0'>
                                <div className=' d-flex justify-content-center'
                                data-aos="zoom-in-up"
                                data-aos-offset="300"
                                >
                                    <div className='OurSoluCard  flex-column  mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0'>
                                        {Type === "Cosm" ?
                                            <>
                                                <img src={Environmentally} alt="" className='OurSoluImg' loading='lazy'/>
                                                <div className='mt-5'>
                                                    <h5 className='sans_Medium'>Environmentally friendly</h5>
                                                    <p className='text-secondary sans_Light mt-3'>We at Sona Extrusions have sacramentals as our core value and hence all our products must adhere to the strictest regulatory requirements for them to be sold. We understand that pharmaceutical is an industry that requires absolute precision and attention to detail. And hence all our products undergo rigorous testing and certification before they can be released in the market. The business follows stringent quality control procedures to guarantee that all of its products comply with all necessary rules and regulations.</p>
                                                </div>
                                            </>
                                            :
                                            Type === "Nut" ?
                                                <>
                                                    <img src={Cost} alt="" className='OurSoluImg' loading='lazy'/>
                                                    <div className='mt-5'>
                                                        <h5 className='sans_Medium'>Cost-effectiveness</h5>
                                                        <p className='text-secondary sans_Light mt-3'>Due to our highly efficient manufacturing methods, we are able to offer aluminium collapsible tubes at highly-competitive prices. For business that make Agro-Chemical products and need to keep their production cost down, we provide the perfect solution. This lower cost means businesses can save on their production costs and maintain their competitive edge in the market</p>
                                                    </div>
                                                </>
                                                :
                                                Type === "Indu" ?
                                                    <>
                                                        <img src={Industryexpertise} alt="" className='OurSoluImg' loading='lazy'/>
                                                        <div className='mt-5'>
                                                            <h5 className='sans_Medium'>Industry expertise</h5>
                                                            <p className='text-secondary sans_Light mt-3'>We at Sona Extrusions have sacramentals as our core value and hence all our products must adhere to the strictest regulatory requirements for them to be sold. We understand that pharmaceutical is an industry that requires absolute precision and attention to detail. And hence all our products undergo rigorous testing and certification before they can be released in the market. The business follows stringent quality control procedures to guarantee that all of its products comply with all necessary rules and regulations.</p>
                                                        </div>
                                                    </>
                                                    : <>
                                                        <img src={Regulatory} alt="" className='OurSoluImg' loading='lazy'/>
                                                        <div className='mt-5'>
                                                            <h5 className='sans_Medium'>Regulatory Compliances</h5>
                                                            <p className='text-secondary sans_Light mt-3'>We at Sona Extrusions have sacramentals as our core value and hence all our products must adhere to the strictest regulatory requirements for them to be sold. We understand that pharmaceutical is an industry that requires absolute precision and attention to detail. And hence all our products undergo rigorous testing and certification before they can be released in the market. The business follows stringent quality control procedures to guarantee that all of its products comply with all necessary rules and regulations.</p>
                                                        </div>
                                                    </>
                                        }
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

export default Our_Solutions