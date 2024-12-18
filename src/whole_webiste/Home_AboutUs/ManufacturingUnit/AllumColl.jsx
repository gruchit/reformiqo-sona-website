import React from 'react'
import './manu.css'
import { FaCheck } from "react-icons/fa6";
import AOS from 'aos';
import { useEffect } from 'react';
function AllumColl() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    return (
        <>
            <div className='AllumColl'>
                <div className='container'>
                    <div className='AllumCollTxt flex-column'
                        data-aos="zoom-in-up"
                        data-aos-offset="200"
                        data-aos-duration="600"
                        easing="ease-in-out"
                        once="true"
                        mirror="true"
                    >
                        <h1 className='text-center mb-5 sans_bold'>Your #1 Choice For Aluminium Collapsible Tubes, Containers and Aluminium Bottles Flakes</h1>
                        <p className='sans_Light text-center text-secondary'>An ISO 15378:2017 (GMP) Certified – SGS, ISO 9001:2015 Certified – TUV & US DMF Registered Certified Company and proudly having the best production capacity based on significant investments in cutting-edge technology, skilled workforce and effective processes. The technology investments have given us an advantage over our competitors and enabled us to consistently deliver high-quality aluminium extrusions.</p>
                    </div>
                </div>
                <div className='AllumCollBody '>
                    <div className='container-xxl'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-6 col-md-12 mt-5 d-flex justify-content-center'>
                                <div className='AllumBodyCads'
                                    data-aos="zoom-in"
                                    data-aos-offset="200"
                                    data-aos-duration="500"
                                    easing="ease-in-out"
                                    once="true"
                                    mirror="true"
                                >
                                    <h4 className='mb-3 sans_Medium text-center'>Specialities:</h4>
                                    <div className='AllumBodyCard d-md-flex d-lg-flex d-xl-flex d-xxl-flex'>
                                        <div className='AllumBodyLeft sans_Medium flex-column ' >
                                            <ul className='list-unstyled'>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span> Collapsible Tubes</li>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>Adhesive Tubes</li>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>CyanoAcrylate Tubes</li>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>Stationary Tubes</li>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>Open-End Containers</li>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>Tablet Canisters</li>

                                            </ul>
                                        </div>
                                        <div className='AllumBodyright sans_Medium flex-column' >
                                            <ul className='list-unstyled'>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>Pharma Packaging</li>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>Aluminium bottles</li>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>Opthalmic Tubes</li>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>Pharmaceutical Tubes</li>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>Aluminium Flasks</li>
                                                <li> <span><FaCheck className='me-3 checkAllum fs-5' /></span>Aluminium Containers</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 mt-5 d-flex justify-content-center'>
                                <div className='AllumBodyTable'
                                    data-aos="fade-up-left"
                                    data-aos-offset="200"
                                    data-aos-duration="500"
                                    easing="ease-in-out"
                                    once="true"
                                    mirror="true"
                                >
                                    <h2 className='sans_Medium d-inline-block'>Manufacturing Unit</h2>
                                    <div className="info-table-container">
                                        <table className="info-table">
                                            <tbody>
                                                <tr>
                                                    <td>Established in (Year):</td>
                                                    <td>1986</td>
                                                </tr>
                                                <tr>
                                                    <td>Employee Strength:</td>
                                                    <td>280+ Employees</td>
                                                </tr>
                                                <tr>
                                                    <td>Number of Clients:</td>
                                                    <td>110+ Clients (India & Globally)</td>
                                                </tr>
                                                <tr>
                                                    <td>Annual Production Capacity:</td>
                                                    <td>500 Mn Tubes<br />50 Mn Flask and Containers</td>
                                                </tr>
                                                <tr>
                                                    <td>Products Manufactured:</td>
                                                    <td>
                                                        Aluminium collapsible tubes<br />
                                                        Aluminium Tablet Canisters<br />
                                                        Aluminium Flask and Bottles
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Production Work Area:</td>
                                                    <td>80,000 Sq. Ft.</td>
                                                </tr>
                                                <tr>
                                                    <td>Total Plot Area:</td>
                                                    <td>100,000 Sq. Ft.</td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default AllumColl