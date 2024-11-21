import React from 'react';
import './Colla.css';
import AllumBack from '../../../assets/AllumBack.png';
import button_Arrow from '../../../assets/button_Arrow.svg';
import { Link } from 'react-router-dom';



function ParalexImg({ Type }) {
    return (
        <>
            <div className="ParalexImg">
                {Type === "Colla" ?
                    <img src={AllumBack} alt="Background" className="ParalexBlack-img" />
                    : ""}
                <div className="ParalexTheam-img">
                    <div className="ParalexContent">
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-8 col-md-12 col-sm-12  d-flex flex-column justify-content-center'>
                                {Type === "Colla" ? <>
                                    <h1 className='text-white sans_light'>Collapsible Tubes</h1>
                                    <h5 className='text-white sans_light'>We produce high quality collapsible multipurpose tubes that are versatile and easy to use.</h5>
                                </>
                                    : ""
                                }
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 d-flex align-items-end align-items-center  justify-content-end ">
                                <Link to="/ReachUs" className="custom-button text-decoration-none">
                                        <span >Contact Us Today</span>
                                        <div className="icon-wrapper">
                                            <img src={button_Arrow} alt="Arrow Icon" />
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
