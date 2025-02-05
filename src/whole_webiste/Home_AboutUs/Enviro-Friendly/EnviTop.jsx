import React from 'react'
import './envir.css'
import { FaCheck } from "react-icons/fa6";
import RightArrow from '../../../assets/arrow.svg'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function EnviTop() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    return (
        <>
            <div className='EnviTop'>
                <div className='EnviTopArwLeftSet'>
                    <img src={RightArrow} alt=""  className='EnviTopArwLeft' loading='lazy' data-aos="fade-left" />
                </div>
                <div className='container-xxl'>
                    <div className='EnviTopTxt'
                        data-aos="zoom-in-up"
                    >
                        <h1 className='text-center mb-4 sans_bold'>Enviro-Friendly Strategy</h1>
                        <p className='text-center text-secondary sans_light'>Reducing waste is a key part of reducing carbon emissions. Cutting down on plastic use is another critical step to reducing greenhouse gas emissions. To meet India’s climate goals, we are working to invest in technologies and processes to reduce emissions. We are taking the below listed steps to lower carbon footprint as part of a CSR strategy.</p>
                    </div>
                    <div className='container'>
                        <div className='EnviTopBody'
                            data-aos="zoom-in"
                        >
                            <ul className='d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-flex list-unstyled justify-content-evenly mb-0'>
                                <li className='d-flex justify-content-start pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Monitoring energy use</div></li>
                                <li className='d-flex justify-content-start pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Reduce energy usage</div></li>
                                <li className='d-flex justify-content-start pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Reduce water usage</div></li>
                            </ul>
                            <ul className='d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-flex mt-xxl-3  list-unstyled justify-content-xxl-evenly justify-content-xl-evenly justify-content-lg-evenly justify-content-md-evenly justify-content-sm-evenly  mb-0'>
                                <li className='d-flex justify-content-start pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Reduce, Reuse and Recycle</div></li>
                                <li className='d-flex justify-content-start pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Reduce packaging</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default EnviTop