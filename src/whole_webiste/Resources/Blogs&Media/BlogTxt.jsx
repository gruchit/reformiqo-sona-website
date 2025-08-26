import React, { useEffect } from 'react';
import './Blog.css'
import BlogImg1 from '../../../assets/newheaderPhoto/Resize/webp/Home4.webp'
import BlogImg2 from '../../../assets/newheaderPhoto/Resize/webp/Blog1.webp'
import BlogImg3 from '../../../assets/newheaderPhoto/Resize/webp/Home2.webp'
import BlogImg4 from '../../../assets/newheaderPhoto/Resize/webp/Home3.webp'
import BlogImg5 from '../../../assets/newheaderPhoto/Resize/webp/Blog2.webp'
import BlogImg6 from '../../../assets/newheaderPhoto/Resize/webp/Blog3.webp'
import BlogImg7 from '../../../assets/newheaderPhoto/Resize/webp/Home16.webp'
import BlogImg8 from '../../../assets/newheaderPhoto/Resize/webp/Home17.webp'
import BlogImg9 from '../../../assets/newheaderPhoto/Resize/webp/Home18.webp'
import BlogImg10 from '../../../assets/newheaderPhoto/Resize/webp/Home11.webp';
import BlogImg11 from '../../../assets/newheaderPhoto/Resize/webp/Home16.webp';
import BlogImg12 from '../../../assets/newheaderPhoto/Resize/webp/Home12.webp';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
function BlogTxt({ Type }) {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className='BlogTxt'>
                <div className='container'>
                    <div className='BlogTxtBody mb-5'
                        data-aos="zoom-in-up"
                        data-aos-offset="200"
                        // data-aos-delay="1000"
                        data-aos-duration="500"
                        easing="ease-in-out"
                        data-aos-once="true"
                        mirror="true"
                    >
                        <h1 className='text-center sans_bold mb-5'>Let's Learn More About Aluminum Extrusion News?</h1>
                        {Type === "Home" ?
                            <>
                                <p className='text-center text-secondary sans_light'>There is always more to know on what we are doing and we also intend to keep you all updated on the trending news of aluminum extrusion. Keep reading and be informed.</p>
                            </>
                            :
                            <>
                                <p className='text-center text-secondary sans_light'>
                                    Sona Extrusion is a great place to kickstart your career. You will contribute to our business from day one and get access to build your skills for your future. You’ll also collaborate with global teams, take advantage of opportunities – all in a dynamic environment filled with industry experts.</p>
                                <p className='text-center text-secondary sans_light'>We take our responsibilities as an employer very seriously. We take good care of our new employees, but we also challenge them from the very beginning by giving them responsibilities very quickly.</p>
                            </>
                        }
                    </div>
                    <div className='BlogBodyBox mt-5'>
                        <div className='row d-flex justify-content-center'>
                            {Type === "Home" ? <>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg12} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>Why Airtight Tablet Canisters Are Essential for Pharma Industry</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Benefits-of-Airtight-Tablet-Canisters-in-Pharma-Industry">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg6} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>A Guide to Pharmaceutical Packaging Solutions: From Design to Patient Compliance</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Types-of-Pharmaceutical-Packaging-Solutions">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </> : <>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg12} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>Why Airtight Tablet Canisters Are Essential for Pharma Industry</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Benefits-of-Airtight-Tablet-Canisters-in-Pharma-Industry">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg6} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>A Guide to Pharmaceutical Packaging Solutions: From Design to Patient Compliance</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Types-of-Pharmaceutical-Packaging-Solutions">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg11} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>Pharmaceutical Packaging: Best Practices & Innovations</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Best-Practices-in-Pharmaceutical-Packaging">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg10} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>Aluminum Collapsible Tubes: Benefits & Industry Applications</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Benefits-of-Aluminum-Collapsible-Tubes">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg9} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>How Personal Care Packaging Affects Brand Perception</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Boost-Brand-Using-Personal-Care-Products-Packaging">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg8} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>Benefits of Aluminium Tubes for Creams, Gels, Ointment Types of Pharma Products</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Benefits-of-Aluminium-Tubes-for-Liquid-Pharma-Products">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg7} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>Custom Solutions for High-Volume Pharmaceutical Packaging</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Custom-Pharmaceutical-Packaging-Solutions">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg6} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>Choosing the Right Pharmaceutical Packaging Partner</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Factors-for-Choosing-the-Pharma-Packaging-Partner">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg5} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>5 Benefits of Using Collapsible Tubes for Pharma Products</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Benefits-of-Using-Tubes-in-Pharma-Products">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg4} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>Why Leading Brands Choose Sona Extrusion</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Trust-Sona-Extrusion-for-Packaging-Solutions">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg3} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>A Glimpse into Sona Extrusion’s State-of-the-Art Manufacturing</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/Pioneering-in-Manufacturing-of-Tubes">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg2} alt="" loading='lazy' />
                                        </div>
                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>Define the advantages and application: technological effectiveness in the field of aluminum collapsible tubes?</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/DefineAdvantages">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                    <div className='BlogBox'
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        // data-aos-delay="1000"
                                        data-aos-duration="500"
                                        easing="ease-in-out"
                                        data-aos-once="true"
                                        mirror="true"
                                    >
                                        <div className='BlogBoxImg'>
                                            <img src={BlogImg1} alt="" loading='lazy' />
                                        </div>

                                        <div className='BlogBoxTxt p-3'>
                                            <p className=' sans_Light text-center'>The future of Aluminum Collapsible Tubes</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Link to="/FuturAluminum">
                                                <button className='btn BlogBtn'>Read More</button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogTxt