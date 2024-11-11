import React from 'react'
import './Home.css'
import Arrow from '../../assets/arrow.svg'
import Cret from '../../assets/Certi.svg'
import Lbols from '../../assets/line_bols.svg'
import AOS from 'aos';
import { useEffect } from 'react';

function YearOf() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className='YearOf '>
                    <div className='YearOf_box '
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-delay="100"
                        data-aos-duration="3000">
                        <img src={Arrow} alt="" srcset="" className='year_arrow '
                            data-aos="fade-left"
                            data-aos-offset="50"
                            data-aos-delay="1000"
                            data-aos-duration="1000"
                        />
                        <div className='row d-flex justify-content-center '>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                <div className='YearOf_img1'>
                                    <img src={Cret} alt="" />
                                </div>
                                <div className='YearOf_heard'>
                                    <h2>35+ Years Of <br />
                                        Experience </h2>
                                    <p className='sans_light my-xl-4 me-xl-5 my-md-3 me-md-4 my-lg-3 me-lg-4  my-sm-0 me-sm-0'>Investing in cutting-edge technology, equipment, and infrastructure while ensuring the highest level of safety and quality standards, effective processes and skilled personnels, we are in a position to offer our customers state-of-the-art facilities and high-quality products.</p>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 '>
                                <div className='YearOf_img1'>
                                    <img src={Cret} alt="" />
                                </div>
                                <div className='YearOf_heard'>
                                    <h2>35+ Years Of <br />
                                        Innovation </h2>
                                    <p className='sans_light my-xl-4 me-xl-5 my-md-3 me-md-4 my-lg-3 me-lg-4  my-sm-0 me-sm-0'>A culture of creativity, collaboration and continuous improvement while staying abreast of marketing trends and customer needs. Additionally, we provide world-class innovation by fostering a work environment that encourages out of the box thinking, risk taking and professional development.</p>
                                </div>
                                <img src={Lbols} alt="" srcset="" className='year_bols'
                                    data-aos="fade-down"
                                    data-aos-offset="50"
                                    data-aos-delay="1000"
                                    data-aos-duration="1000"


                                />
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default YearOf
