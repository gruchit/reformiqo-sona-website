import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import InfiniteSVG from '../../assets/Infinite_webp.webp';
import button_Arrow from '../../assets/button_Arrow.svg';
import AOS from 'aos';
import { useEffect } from 'react';

function Infinite() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='infinite d-flex align-items-center'>
            <img src={InfiniteSVG} alt="Background" className="infinite-bg" loading='lazy' />
            <div className='row d-flex justify-content-center infi_card w-100'
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-duration="1000"
                easing="ease-in-out"
                once="true"
                mirror="true" 
            >
                <div className='col-lg-8 col-md-12 col-sm-12  d-flex flex-column justify-content-center'

                >
                    <h3 className='text-white sans_light'>Collapsible Tubes</h3>
                    <h1 className='text-white sans_bold'>Infinite Possibilities</h1>
                    <h5 className='text-white sans_light'>We produce high-quality collapsible multipurpose tubes that are versatile and easy to use.</h5>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-end align-items-center  justify-content-end ">
                    {/* <button > */}
                        <Link to="/ReachUs/" className="custom-button text-decoration-none">
                        <span >Contact Us Today</span>
                        <div className="icon-wrapper"
                        >
                            <img src={button_Arrow} alt="Arrow Icon" loading='lazy'/>
                        </div>
                    {/* </button> */}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Infinite;
