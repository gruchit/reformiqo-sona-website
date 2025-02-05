import React from 'react';
import './Colla.css';
import AllumBack from '../../../assets/AllumBack.png';
import FlaskPeralex from '../../../assets/FlaskPeralex.png';
import TablePeralex from '../../../assets/TablePeralex.png';
import button_Arrow from '../../../assets/button_Arrow.svg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function ParalexImg({ Type }) {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    return (
        <>
            <div className="ParalexImg">
                {Type === "Colla" ?
                    <img src={AllumBack} alt="Background" className="ParalexBlack-img" loading='lazy'/>

                    : Type === "Flask" ?
                        <img src={FlaskPeralex} alt="Background" className="ParalexBlack-img" loading='lazy'/>

                        : Type === "Table" ?
                            <img src={TablePeralex} alt="Background" className="ParalexBlack-img" loading='lazy'/>

                            :
                            <> Sorry </>
                }
                <div className="ParalexTheam-img">
                    <div className="ParalexContent">
                        <div className='row d-flex justify-content-center' data-aos="zoom-in">
                            <div className='col-lg-8 col-md-12 col-sm-12  d-flex flex-column justify-content-center'>
                                {Type === "Colla" ?
                                    <>
                                        <h1 className='text-white sans_light'>Collapsible Tubes</h1>
                                        <h5 className='text-white sans_light'>We produce high quality collapsible multipurpose tubes that are versatile and easy to use.</h5>
                                    </>
                                    : Type === "Flask" ?
                                        <>
                                            <h1 className='text-white sans_light'>Flakes Tubes</h1>
                                            <h5 className='text-white sans_light'>We manufacture dependable bottles and flasks that serve a variety of industries.</h5>
                                        </>
                                        : Type === "Table" ?
                                            <>
                                                <h1 className='text-white sans_light'>Tablet Canisters</h1>
                                                <h5 className='text-white sans_light'>Our highly efficient manufacturing processes deliver reliable, safe, and easy-to-use storage solutions</h5>
                                            </>
                                            :
                                            <> Sorry </>
                                }
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-end align-items-center  justify-content-end ">
                                <Link to="/ReachUs" className="custom-button text-decoration-none">
                                    <span >Contact Us Today</span>
                                    <div className="icon-wrapper">
                                        <img src={button_Arrow} alt="Arrow Icon" loading='lazy'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ParalexImg;
