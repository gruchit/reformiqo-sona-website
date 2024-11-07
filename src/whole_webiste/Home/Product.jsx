import React from 'react'
import './Home.css'
import Arrow_Left from '../../assets/arrow_Left.svg'
import Ellipse from '../../assets/Ellipse2.svg'
import Product_card from '../../assets/Product_card.svg'
import Double_bol_line from '../../assets/double_bol_line.svg'
import Flask from '../../assets/Flask.jpg'
import Table from '../../assets/Table.jpg'

import AOS from 'aos';
import { useEffect } from 'react';

function Product() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className='Product'>
                <div className='Product_Detail'>
                    <img src={Arrow_Left} alt="" className='Product_Detail_left'
                        data-aos="fade-right"
                        data-aos-offset="50"
                        data-aos-delay="1000"
                        data-aos-duration="3000"
                    />
                    <div className='pt-5'
                        data-aos="zoom-in-up"
                        data-aos-offset="50"
                        data-aos-delay="1000"
                        data-aos-duration="1000"
                        easing="ease-in-out"
                        once="true"
                        mirror="true"

                    >
                        <h2 className='text-center'>Products We Provide</h2>
                        <p className='text-center sans_light text-secondary'>We, at Sona Extrusion, are maximizing our potential at our 1,00,000 sq. ft. ultramodern &
                            well-defined single roof manufacturing plant <br /> which is fully controlled by 5 Micron Positive
                            Air Handling System and operated high-quality, well-advanced & reliable German Machinery. <br />
                            We ensure a well-organized and totally dust-free manufacturing environment, strictly
                            adhering to <br /> ‘Good Manufacturing Practices’ as per ISO 15378.</p>
                    </div>
                    <div className='row  pt-5'
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-delay="1000"
                        data-aos-duration="3000"
                        easing="ease-in-out"
                        once="true"
                        mirror="true"

                    >
                        <div className="col-4 ">
                            <div className="Product_cards m-auto">
                                <div className="product_img p-4">
                                    <img src={Ellipse} alt="" />
                                </div>
                                <div className="Produ_card_det  px-4">
                                    <h4 className='m-0 my-2 sans_Medium'>Collapsible Tubes</h4>
                                    <p className='sans_light text-secondary text-center'>
                                        We offer premium aluminium collapsible tubes made with
                                        cutting-edge manufacturing techniques, meticulous quality control,
                                        and ongoing innovation to meet the needs of our end-users.
                                    </p>
                                </div>
                                <div className='product_bottom_phto'>
                                    <img src={Product_card} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mt-5 pt-5 ">
                            <div className="Product_cards m-auto">
                                <div className="product_img p-4">
                                    <img src={Ellipse} alt="" />
                                </div>
                                <div className="Produ_card_det  px-4">
                                    <h4 className='m-0 my-2 sans_Medium'>Flasks & Bottles</h4>
                                    <p className='sans_light text-secondary text-center'>
                                    Our flasks and bottles have been rigorously tested to guarantee that they are of the highest quality, made with durable materials that are designed.
                                    </p>
                                </div>
                                <div className='product_bottom_phto'>
                                    <img src={Flask} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="Product_cards m-auto">
                                <div className="product_img p-4">
                                    <img src={Ellipse} alt="" />
                                </div>
                                <div className="Produ_card_det  px-4">
                                    <h4 className='m-0 my-2 sans_Medium'>Tablet Canisters</h4>
                                    <p className='sans_light text-secondary text-center'>
                                    We produce world-class tablet canisters with internally lacquered and externally printed or varnished using state-of-the-art processes, ensuring the highest quality standards with highly experienced.
                                    </p>
                                </div>
                                <div className='product_bottom_phto'>
                                    <img src={Table} alt="" />
                                </div>
                            </div>
                        </div>
                        <img src={Double_bol_line} alt="" srcset="" className='Double_line' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
