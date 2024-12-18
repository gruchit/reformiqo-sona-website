import React, { useEffect } from 'react';
import './Blog.css'
import BlogImg1 from '../../../assets/Home4_webp.webp'
import BlogImg2 from '../../../assets/Home_main_webp.webp'
import AOS from 'aos';
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
                        // data-aos-offset="50"
                        // data-aos-delay="1000"
                        data-aos-duration="500"
                        easing="ease-in-out"
                        once="true"
                        mirror="true"
                    >
                        <h1 className='text-center sans_bold mb-5'>Let's Learn More About Aluminium Extrusion News?</h1>
                        {Type === "Home" ?
                            <>
                                <p className='text-center text-secondary sans_light'>There is always more to know on what we are doing and we also intend to keep you all updated on the trending news of aluminium extrusion. Keep reading and be informed.</p>
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
                            <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                <div className='BlogBox'
                                data-aos="zoom-in"
                                data-aos-offset="50"
                                // data-aos-delay="1000"
                                data-aos-duration="500"
                                easing="ease-in-out"
                                once="true"
                                mirror="true"
                                >
                                    <div className='BlogBoxImg'>
                                        <img src={BlogImg1} alt="" srcset="" loading='lazy' />
                                    </div>

                                    <div className='BlogBoxTxt p-3'>
                                        <p className=' sans_Light text-center'>The future of Aluminium Collapsible Tubes</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <Link to="/FuturAluminium">
                                        <button className='btn BlogBtn'>Read More</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            <div className='col-xl-6 mt-5 p-0 col-xxl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center'>
                                <div className='BlogBox'
                                data-aos="zoom-in"
                                data-aos-offset="50"
                                // data-aos-delay="1000"
                                data-aos-duration="500"
                                easing="ease-in-out"
                                once="true"
                                mirror="true"
                                >
                                    <div className='BlogBoxImg'>
                                        <img src={BlogImg2} alt="" srcset="" loading='lazy' />
                                    </div>
                                    <div className='BlogBoxTxt p-3'>
                                        <p className=' sans_Light text-center'>Define the advantages and application: technological effectiveness in the field of aluminium collapsible tubes?</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <Link to="/DefineAdvantages">
                                        <button className='btn BlogBtn'>Read More</button>
                                        </Link>
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

export default BlogTxt