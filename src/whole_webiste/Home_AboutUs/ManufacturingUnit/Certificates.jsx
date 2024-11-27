import React from 'react'
import Cert1 from '../../../assets/Certificates1.png'
import Cert2 from '../../../assets/Certificates2.png'
import Cert3 from '../../../assets/Certificates3.png'
import Arrow_Left from '../../../assets/arrow_Left.svg'
import './Manu.css'

function Certificates() {
    return (
        <>
            <div className='Certificates'>
                <div className='CertTxt'>
                    <div className='container'>
                    <div className='flex-column'>
                        <h1 className='text-center mb-5'>Certificates</h1>
                        <p className='text-secondary text-center sans_Light'>Sona Extrusion Pvt. Ltd. is one of the leading manufacturers of aluminium collapsible tubes, containers and aluminium bottles/flasks in India, duly ISO 15378:2017 (GMP) Certified – SGS (Primary Packaging Materials for Pharmaceutical Products) & ISO 9001:2015 Certified – TUV & US DMF Registered Company.</p>
                    </div>
                    </div>
                </div>
                <div className='container-xxl'>
                    <div className='CertBody'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-4  col-lg-4 col-md-6 mt-5 d-flex justify-content-center'>
                                <div className='CertBodyCard'>
                                    <img src={Cert1} alt="" srcset="" loading='lazy'/>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6 mt-5 d-flex justify-content-center'>
                                <div className='CertBodyCard'>
                                    <img src={Cert2} alt="" srcset="" loading='lazy'/>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6 mt-5 d-flex justify-content-center'>
                                <div className='CertBodyCard'>
                                    <img src={Cert3} alt="" srcset="" loading='lazy'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Certificates