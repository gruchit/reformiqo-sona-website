import React from 'react'
import './Home.css'
import Arrow_Left from '../../assets/arrow_Left.svg'
import Ellipse from '../../assets/Ellipse2.svg'
// import HomeProduct2 from '../../assets/HomeProduct2.png'
import { Link } from 'react-router-dom';
import Product2 from '../../assets/Product2.svg'
import Product3 from '../../assets/Product3.svg'
import Product_card from '../../assets/Product_card.svg'
import Double_bol_line from '../../assets/double_bol_line.svg'
import Flask from '../../assets/Flask.jpg'
import Table from '../../assets/Table.jpg'
import LamiProduct from '../../assets/LamiProduct.svg'
import LaminatPhrma from '../../assets/LaminatPhrma.svg'
import LamiConsmatic from '../../assets/LamiConsmatic.svg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useState, useEffect } from 'react';

function Product({ type }) {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1400);
    useEffect(() => {
        AOS.init();
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1400);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <div className='Product'>
                <div className='Product_Detail'>
                    <img src={Arrow_Left} alt="" loading='lazy' className='Product_Detail_left'
                        data-aos="fade-right"
                        data-aos-offset="100"
                        // data-aos-delay="1000"
                        data-aos-duration="500"
                        easing="ease-in-out"

                    />

                    <div className='pt-5 container'
                        data-aos="zoom-in-up"
                        data-aos-offset="100"
                        // data-aos-delay="1000"
                        data-aos-duration="500"
                        easing="ease-in-out"
                        data-aos-once="true"
                        mirror="true"
                    >
                        {type === "Laminated_Tubs" ?
                            <>
                                <h1 className='text-center sans_Medium'>Applications of Our Laminated Tubes</h1>
                                <p className='text-center sans_light text-secondary'>Our laminated tubes are engineered to meet the diverse packaging needs across
                                    various industries. With advanced barrier protection and customizable features, they
                                    provide optimal solutions for a range of applications:</p>
                            </>
                            :
                            <>
                                <h1 className='text-center sans_Medium'>Products We Provide</h1>
                                <p className='text-center sans_light text-secondary'>We, at Sona Extrusion, are maximizing our potential at our 1,00,000 sq. ft. ultramodern &
                                    well-defined single roof manufacturing plant  which is fully controlled by 5 Micron Positive
                                    Air Handling System and operated high-quality, well-advanced & reliable German Machinery.
                                    We ensure a well-organized and totally dust-free manufacturing environment, strictly
                                    adhering to  ‘Good Manufacturing Practices’ as per ISO 15378.</p>
                            </>}

                    </div>
                    <div className={isLargeScreen ? "container-xxl" : ""}>
                        <div className='row d-flex justify-content-center py-5'
                            data-aos="zoom-in-up"
                            data-aos-offset="300"
                            data-aos-duration="500"
                            easing="ease-in-out"
                            data-aos-once="true"
                            mirror="true"

                        >
                            <div className="col-lg-4 col-md-6 col-sm-12 ProCol d-flex justify-content-center ">
                                {type === "Home" || type === "Alume" ? <>
                                    <Link to="/Aluminum-Products/Collapsible-Tubes" className='sans_light text-decoration-none text-black'>
                                        <div className="Product_cards m-auto">
                                            <div className="product_img p-3">
                                                <img src={Ellipse} alt="" loading='lazy' />
                                            </div>
                                            <div className="Produ_card_det  px-4">
                                                <h4 className='m-0 mb-2 sans_Medium'>Collapsible Tubes</h4>
                                                <p className='sans_light text-secondary '>
                                                    We offer premium aluminum collapsible tubes made with
                                                    cutting-edge manufacturing techniques, meticulous quality control,
                                                    and ongoing innovation to meet the needs of our end-users.
                                                </p>
                                            </div>
                                            <div className='product_bottom_phto'>
                                                <img src={Product_card} alt="" loading='lazy' />
                                            </div>
                                        </div>
                                    </Link>

                                </>
                                    :
                                    type === "Laminated_Tubs" ? <>
                                        <div className="Product_cards m-auto">
                                            <div className="product_img p-3">
                                                <img src={LaminatPhrma} alt="" loading='lazy' />
                                            </div>
                                            <div className="Produ_card_det  px-4">
                                                <h4 className='m-0 mb-2 sans_Medium'>Pharmaceuticals</h4>
                                                <p className='sans_light text-secondary '>
                                                In the pharmaceutical industry, product safety and compliance are paramount. Our laminated tubes are ideal for packaging ointments, gels, and other medicinal products, providing robust protection against contamination and environmental factors. Our tubes meet stringent industry standards, ensuring that your pharmaceutical products are securely contained and preserved. With precise, tamper-evident closures and high-quality materials, our tubes help maintain the integrity and efficacy of your medicinal formulations.
                                                </p>
                                            </div>
                                            <div className='product_bottom_phto'>
                                                <img src={Product_card} alt="" loading='lazy' />
                                            </div>
                                        </div>
                                    </> : <>
                                        <div className="Product_cards m-auto">
                                            <div className="product_img p-3">
                                                <img src={Ellipse} alt="" loading='lazy' />
                                            </div>
                                            <div className="Produ_card_det  px-4">
                                                <h4 className='m-0 mb-2 sans_Medium'>Collapsible Tubes</h4>
                                                <p className='sans_light text-secondary '>
                                                    We offer premium aluminum collapsible tubes made with
                                                    cutting-edge manufacturing techniques, meticulous quality control,
                                                    and ongoing innovation to meet the needs of our end-users.
                                                </p>
                                            </div>
                                            <div className='product_bottom_phto'>
                                                <img src={Product_card} alt="" loading='lazy' />
                                            </div>
                                        </div>
                                    </>}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 ProCol d-flex justify-content-center mt-lg-5 pt-lg-5    mt-sm-3 pt-sm-0   mt-md-0 pt-md-0 ">
                                {type === "Home" || type === "Alume" ? <>
                                    <Link to="/Aluminum-Products/Flasks-And-Bottles" className='sans_light text-decoration-none text-black'>
                                        <div className="Product_cards m-auto">
                                            <div className="product_img p-3">
                                                <img src={Product2} alt="" loading='lazy' />
                                            </div>
                                            <div className="Produ_card_det  px-4">
                                                <h4 className='m-0 mb-2 sans_Medium'>Flasks & Bottles</h4>
                                                <p className='sans_light text-secondary '>
                                                Our flasks and bottles undergo rigorous testing to ensure they meet the highest quality standards. Made from durable and carefully designed materials, they are crafted to deliver exceptional performance and reliability.
                                                </p>
                                            </div>
                                            <div className='product_bottom_phto'>
                                                <img src={Flask} alt="" loading='lazy' />
                                            </div>
                                        </div>
                                    </Link>
                                </> :
                                    type === "Laminated_Tubs" ? <>
                                        <div className="Product_cards m-auto">
                                            <div className="product_img p-3">
                                                <img src={LamiConsmatic} alt="" loading='lazy' />
                                            </div>
                                            <div className="Produ_card_det  px-4">
                                                <h4 className='m-0 mb-2 sans_Medium'>Cosmetics</h4>
                                                <p className='sans_light text-secondary '>
                                                Our laminated tubes are expertly designed to package a wide variety of personal care products, including lotions, creams, and gels. The superior barrier properties of our tubes ensure that your products remain fresh and effective, while the sleek, customizable design options enhance your brand's image on the shelf. Whether you need tubes with elegant finishes or vibrant prints, our solutions will showcase your cosmetics with sophistication and style.
                                                </p>
                                            </div>
                                            <div className='product_bottom_phto'>
                                                <img src={Flask} alt="" loading='lazy' />
                                            </div>
                                        </div>
                                    </> :
                                        <><div className="Product_cards m-auto">
                                            <div className="product_img p-3">
                                                <img src={Product2} alt="" loading='lazy' />
                                            </div>
                                            <div className="Produ_card_det  px-4">
                                                <h4 className='m-0 mb-2 sans_Medium'>Flasks & Bottles</h4>
                                                <p className='sans_light text-secondary '>
                                                    Our flasks and bottles have been rigorously tested to guarantee that they are of the highest quality, made with durable materials that are designed.
                                                </p>
                                            </div>
                                            <div className='product_bottom_phto'>
                                                <img src={Flask} alt="" loading='lazy' />
                                            </div>
                                        </div></>}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 ProCol d-flex justify-content-center mt-sm-3">
                                {type === "Home" || type === "Alume" ? <>
                                    <Link to="/Aluminum-Products/Tablet-Canisters" className='sans_light text-decoration-none text-black'>
                                        <div className="Product_cards m-auto">
                                            <div className="product_img p-3">
                                                <img src={Product3} alt="" loading='lazy' />
                                            </div>
                                            <div className="Produ_card_det  px-4">
                                                <h4 className='m-0 mb-2 sans_Medium'>Tablet Canisters</h4>
                                                <p className='sans_light text-secondary '>
                                                We produce world-class tablet canisters with an internal lacquer coating and external printing or varnishing using state-of-the-art processes. Our commitment to quality ensures the highest standards, supported by a highly experienced team.
                                                </p>
                                            </div>
                                            <div className='product_bottom_phto'>
                                                <img src={Table} alt="" loading='lazy' />
                                            </div>
                                        </div>
                                    </Link>
                                </> :
                                    type === "Laminated_Tubs" ? <>
                                        <div className="Product_cards m-auto">
                                            <div className="product_img p-3">
                                                <img src={LaminatPhrma} alt="" loading='lazy' />
                                            </div>
                                            <div className="Produ_card_det  px-4">
                                                <h4 className='m-0 my-2 sans_Medium'>LamiProduct</h4>
                                                <p className='sans_light text-secondary '>
                                                For the food industry, our laminated tubes offer an effective and hygienic packaging solution for a range of consumables, including sauces, pastes, and spreads. The advanced barrier properties of our tubes protect your food products from spoilage and contamination, while the customizable design options allow for clear labeling and appealing presentation.
                                                </p>
                                            </div>
                                            <div className='product_bottom_phto'>
                                                <img src={Table} alt="" loading='lazy' />
                                            </div>
                                        </div>
                                    </>
                                        :
                                        <>
                                            <div className="Product_cards m-auto">
                                                <div className="product_img p-3">
                                                    <img src={Product3} alt="" loading='lazy' />
                                                </div>
                                                <div className="Produ_card_det  px-4">
                                                    <h4 className='m-0 my-2 sans_Medium'>Tablet Canisters</h4>
                                                    <p className='sans_light text-secondary '>
                                                        We produce world-className tablet canisters with internally lacquered and externally printed or varnished using state-of-the-art processes, ensuring the highest quality standards with highly experienced.
                                                    </p>
                                                </div>
                                                <div className='product_bottom_phto'>
                                                    <img src={Table} alt="" loading='lazy' />
                                                </div>
                                            </div>
                                        </>}
                            </div>
                            <img src={Double_bol_line} alt=""  className='Double_line' loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
