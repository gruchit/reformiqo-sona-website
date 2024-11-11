import React from 'react'
import './Home.css'
import Single_BlackBol_Line from '../../assets/single_BlackBol_Line.svg'
import Product_capacity from '../../assets/product_capacity.svg'
import Doted_line from '../../assets/Doted_line.svg'
import Industries from '../../assets/Industries.svg'
import Certifications from '../../assets/Certifications.svg'
import AOS from 'aos';
import { useEffect } from 'react';



function Order() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className='Order'>
                <div className='Order_text flex-column'>
                    <div className='d-flex justify-content-center '>
                        <img src={Single_BlackBol_Line} alt="" srcset="" className='' data-aos="zoom-in-up"
                            data-aos-offset="50"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            easing="ease-in-out"
                            once="true"
                            mirror="true" />
                    </div>
                    <h2 className='text-center mb-xl-5 mb-xxl-5 mb-md-5 mb-sm-5 mb-lg-5 mb-xl-5 pb-xl-5 pb-xxl-5 pb-md-5 pb-sm-5 pb-lg-5 '
                        data-aos="zoom-in-up"
                        data-aos-offset="50"
                        data-aos-delay="1000"
                        data-aos-duration="1000"
                        easing="ease-in-out"
                        once="true"
                        mirror="true"
                    >Orders Delivered Satisfactorily</h2>
                </div>
                <div className=' d-lg-none d-md-none d-sm-none d-none d-xl-block'>
                    <div className='Order_images d-flex justify-content-center '>

                        <img src={Doted_line} alt="" srcset="" className='' />

                        <div className=' Order_images_box1  flex-column'
                            data-aos="fade-right"
                            data-aos-offset="0"
                            data-aos-delay="500"
                            data-aos-duration="2000"
                            easing="ease-in-out"
                            once="true"
                            mirror="true"

                        >
                            <div className='Order_images_box_detals'>
                                <img src={Product_capacity} alt="" className='' />
                                <h4 className='text-center mb-3'>Production Capacity</h4>
                            </div>
                            <p className='sans_light'>We, at Sona Extrusion, are proud to have the best production capacity due to our significant investments in cutting-edge technology, a skilled workforce, and effective processes. These investments have given us an advantage over our competitors and enabled us to consistently deliver high-quality aluminium aluminium packaging solutions in large quantities.</p>
                        </div>
                        <div className=' Order_images_box2'
                            data-aos="fade-left"
                            data-aos-offset="50"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            easing="ease-in-out"
                            once="true"
                            mirror="true"


                        >
                            <div className='Order_images_box_detals'>
                                <img src={Industries} alt="" className='' />
                                <h4 className='text-center mb-3'>Industries We Serve</h4>
                            </div>
                            <p className='sans_light'>We, at Sona Extrusion, having a rich experience of more than three decades to back us and hence we are in a very strong position to serve business across the globe. We have served business across various verticals like Pharmaceutical, Agrochemical, Personal Healthcare, Nutraceutical, Automotive and Cosmetic to name a few.</p>
                        </div>
                        <div className=' Order_images_box3'
                            data-aos="fade-up"
                            data-aos-offset="50"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                            easing="ease-in-out"
                            once="true"
                            mirror="true"


                        >
                            <div className='Order_images_box_detals'>
                                <img src={Certifications} alt="" className='' />
                                <h4 className='text-center mb-3'>Certifications</h4>
                            </div>
                            <p className='sans_light'>We, at Sona Extrusions have received various certifications from reputable organizations to prove to our clients that we are a dependable partner in achieving their goals and objectives. We have demonstrated our commitment to offering goods and services that exceed expectations by obtaining these certifications.</p>
                        </div>

                    </div>
                </div>
                <div className='container d-lg-block d-md-block d-sm-block '>
                    <div className='row d-flex justify-content-center '>
                        <div className="col-lg-12 p-0 col-md-12 mt-sm-5 mt-md-5 mt-lg-5 d-xl-none px-sm-5 d-flex justify-content-center">
                            <div className="orderType mt-sm-5 mt-md-5 mt-lg-5 mt-5 text-center ">
                                <div className="orderTypeimages">
                                    <img src={Product_capacity} alt="" className="img-fluid" />
                                </div>
                                <h4 className="text-center mb-3">Production Capacity</h4>
                                <p className="sans_light">
                                    We, at Sona Extrusion, are proud to have the best production capacity due to our significant investments in cutting-edge technology, a skilled workforce, and effective processes. These investments have given us an advantage over our competitors and enabled us to consistently deliver high-quality aluminium packaging solutions in large quantities.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-12 p-0 col-md-12 mt-sm-5 mt-md-5 mt-lg-5 d-xl-none px-sm-5 d-flex justify-content-center'>
                            <div className='orderType mt-sm-5 mt-md-5 mt-lg-5 mt-5 text-center '>
                                <div className='orderTypeimages'>
                                    <img src={Product_capacity} alt="" className='' />
                                </div>
                                <h4 className='text-center mb-3'>Production Capacity</h4>
                                <p className='sans_light'>We, at Sona Extrusion, are proud to have the best production capacity due to our significant investments in cutting-edge technology, a skilled workforce, and effective processes. These investments have given us an advantage over our competitors and enabled us to consistently deliver high-quality aluminium aluminium packaging solutions in large quantities.</p>

                            </div>
                        </div>
                        <div className='col-lg-12 p-0 col-md-12 mt-sm-5 mt-md-5 mt-lg-5 d-xl-none px-sm-5 d-flex justify-content-center'>
                            <div className='orderType mt-sm-5 mt-md-5 mt-lg-5 mt-5 text-center '>
                                <div className='orderTypeimages'>
                                    <img src={Product_capacity} alt="" className='' />
                                </div>
                                <h4 className='text-center mb-3'>Production Capacity</h4>
                                <p className='sans_light'>We, at Sona Extrusion, are proud to have the best production capacity due to our significant investments in cutting-edge technology, a skilled workforce, and effective processes. These investments have given us an advantage over our competitors and enabled us to consistently deliver high-quality aluminium aluminium packaging solutions in large quantities.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order
