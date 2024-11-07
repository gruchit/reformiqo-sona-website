import React from 'react'
import './Laminated.css'
import Cut from '../../assets/Cut.svg'
import Craftsmanship from '../../assets/Craftsmanship.svg'
import Vibrant from '../../assets/Vibrant.svg'


function Why_Sona() {
    return (
        <>
            <div className='Why_Sona'>
                <div className='WhySonaAbout flex-column'>
                    <div className='d-flex justify-content-between '>
                    </div>
                    <div className='WhySonaDetails'>
                        <h2 className='text-center sans_light'>Why Sona Extrusion?</h2>
                        <p className='text-center sans_light text-secondary'>Sona Extrusion Pvt. Ltd. is one of the leading manufacturers of aluminium collapsible
                            tubes and containers in India, duly ISO 15378:2017 (GMP) Certified – SGS
                            (Primary Packaging materials for Medicinal Products) & ISO 9001:2015 Certified –
                            TUV & US DMF Registered Company.</p>
                    </div>
                    <div className='Why_SonaCards'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-4 d-flex justify-content-center'>
                                <div className='WhySonaCards1'>
                                    <img src={Cut} alt="" />
                                    <h5 className='sans_light'>Cutting-Edge
                                        Technology</h5>
                                    <p className='sans_light pt-2'>At Sona Extrusion, we leverage machinery from Switzerland, renowned for its high performance and reliability. Our state-of-the-art equipment allows us to produce superior laminated tubes using advanced ABL (Aluminium Barrier Laminates) and PBL (Plastic Barrier Laminates) technologies. These options provide excellent protection against moisture, light, and air, ensuring the integrity and longevity of your products.</p>
                                </div>
                            </div>
                            <div className='col-4 d-flex justify-content-center'>
                                <div className='WhySonaCards1'>
                                    <img src={Craftsmanship} alt="" />
                                    <h5 className='sans_light'>Expert Craftsmanship</h5>
                                    <p className='sans_light pt-2'>Our team of skilled professionals is at the heart of our operations, bringing years of expertise to every project. Our manufacturing facilities are fully certified, reflecting our unwavering commitment to quality and adherence to international standards. This ensures that every tube we produce not only meets but exceeds industry expectations.</p>
                                </div>
                            </div>
                            <div className='col-4 d-flex justify-content-center'>
                                <div className='WhySonaCards1'>
                                    <img src={Vibrant} alt="" />
                                    <h5 className='sans_light'>Vibrant and
                                        Versatile Printing</h5>
                                    <p className='sans_light pt-2'>Stand out on the shelf with our high-resolution printing capabilities. Our advanced printing technology allows for vibrant, eye-catching designs that enhance your product’s appeal and capture consumer attention. From intricate details to bold graphics, we deliver excellence in every print.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='SonaLngCrd pt-5'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-6 d-flex justify-content-center'>
                                <div className='SonaLngCard1'>
                                    <img src={Craftsmanship} alt="" srcset="" />
                                    <h5 className='sans_light'> ISO-Compliant Standards</h5>
                                    <p className='sans_light pt-2'>Quality and compliance are our top priorities. We follow rigorous ISO standards for packing and production, ensuring that our laminated tubes adhere to the highest safety and quality benchmarks. This commitment guarantees that you receive products that are reliable, safe, and compliant with global regulations.</p>
                                </div>
                            </div>
                            <div className='col-6 d-flex justify-content-center'>
                                <div className='SonaLngCard1'>
                                    <img src={Craftsmanship} alt="" srcset="" />
                                    <h5 className='sans_light'>Tailored Product Range</h5>
                                    <p className='sans_light pt-2'>We offer laminated tubes in versatile sizes. These sizes are ideal for a range of applications, from cosmetics and pharmaceuticals to food products. By focusing on these sizes, we provide targeted solutions that cater to your specific packaging needs.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Why_Sona