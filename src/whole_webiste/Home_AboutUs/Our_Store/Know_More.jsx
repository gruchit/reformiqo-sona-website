import React, { useState, useEffect } from 'react';
import Single_BlackBol_Line from '../../../assets/single_BlackBol_Line.svg';
import './Sona_About.css';
import AOS from 'aos';

function KnowMore() {

    useEffect(() => {
        AOS.init();
    }, []);

    const [activeTab, setActiveTab] = useState('Mission');

    const handleTabChange = (tabName) => () => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="Know_More flex-column">
                <div className="Know_More_imgBol d-flex justify-content-center">
                    <img src={Single_BlackBol_Line} alt="Line Decoration" loading='lazy'/>
                </div>
                <div className='container' data-aos="zoom-out-up"
                    data-aos-duration="600"
                    data-aos-offset="200">
                    <h1 className="text-center sans_bold mb-5">Know More About Us</h1>
                    <p className="text-center sans_light text-secondary">
                        We, at Sona Extrusions, are one of the leading producers and exporters of premium aluminium
                        collapsible tubes, containers, and aluminium bottles/flasks. Dependable product quality and prompt
                        delivery are ensured by cutting-edge manufacturing facilities, a skilled workforce, and rigorous
                        quality control procedures.
                    </p>
                </div>
            </div>

            <div className="Know_More_tabs d-flex justify-content-start"  data-aos="fade-right" data-aos-duration="600" data-aos-offset="200">
                <div className="Know_More_tabsInner">
                    <div className="filter-buttons py-3  d-flex justify-content-evenly">
                        {['Mission', 'Vision', 'CoreValues', 'WhyChooseUs'].map((tab) => (
                            <button
                                key={tab}
                                className={`filter-button  ${activeTab === tab ? 'active' : ''}`}
                                onClick={handleTabChange(tab)}
                                aria-pressed={activeTab === tab}
                            >
                                {tab.replace(/([A-Z])/g, ' $1').trim()}
                            </button>
                        ))}
                    </div>
                    {/*  */}
                    <div className="KnowMoreTabs">
                        {activeTab === 'Mission' && (
                            <div className="text-secondary sans_light" data-aos="fade-up" data-aos-duration="500" once="true" mirror="true">
                                    <p className=''>Our mission is to provide high-quality and innovative packaging solutions that meet the diverse needs of our clients. We are dedicated to manufacturing and delivering premium aluminium packaging solutions that are safe, reliable, and environmentally sustainable. </p>

                                    <p>Our goal is to build strong and lasting relationships with our customers by providing exceptional service and support, while continuously improving our products and processes.</p>

                                    <p> We strive to be a trusted and responsible partner in the packaging industry, and to play a leading role in promoting the use of environmentally-friendly packaging solutions.</p>
                            </div>
                        )}
                        {activeTab === 'Vision' && (
                            <div className=" text-secondary sans_light" data-aos="fade-up" data-aos-duration="500" once="true" mirror="true">
                                <p className='' >Our vision is to be a global leader in the packaging industry, recognized for our innovative and sustainable solutions. </p>

                                 <p>   We aim to continuously enhance the customer experience by providing a diverse range of premium aluminium packaging solutions that meet their specific needs. Through our commitment to excellence, we will maintain our position as a preferred supplier to clients in a variety of industries.</p>

                                 <p>We aspire to create a positive impact on the environment and to promote the responsible use of packaging materials. We will continuously strive for operational efficiency and effectiveness, and to foster a culture of growth and collaboration for our employees, customers, and partners</p>

                            </div>
                        )}
                        {activeTab === 'CoreValues' && (
                            <div className=" text-secondary sans_light" data-aos="fade-up" data-aos-duration="500" once="true" mirror="true">
                                <p className=''>We understand the needs of our customers and offering solutions that surpass expectations while maintaining strict quality standards. We continueto make investments in research and development to enhance our processes and products to offer competitive and innovative solutions to new geographies.</p>
                                <ol className=''>
                                    <li>Together for Growth</li>
                                    <li>Innovative Solutions</li>
                                    <li>Act with integrity</li>
                                    <li>Trusted Quality</li>
                                </ol>
                            </div>
                        )}
                        {activeTab === 'WhyChooseUs' && (
                            <div className=" text-secondary sans_light" data-aos="fade-up" data-aos-duration="500" once="true" mirror="true">
                                <p>Sona Extrusion's reputation for quality, dependability, and timeliness is why we are the trusted partners for various industries, both nationally and internationally. We produce a wide range of packaging solutions that satisfy the requirements of various industries by putting a focus on cutting-edge technology and expert craftsmanship.</p>
                                <p>  Our Customers receive consistently high-quality products thanks to our company's commitment to strict quality control procedures.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default KnowMore;
