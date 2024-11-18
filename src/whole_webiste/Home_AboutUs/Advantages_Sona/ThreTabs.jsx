import React from 'react'
import './AdvantSona.css'
import Pioneers from '../../../assets/Pioneers.svg'
import Unprecedented from '../../../assets/Unprecedented.svg'
import Specifications from '../../../assets/Specifications.svg'
import leftArrow from '../../../assets/arrow.svg'



function ThreTabs() {
    return (
        <>
            <div className='ThreTabs'>
                <img src={leftArrow} alt="" className='ThreleftArrow'/>
                <div className='container-xxl'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-xl-4 ThreTbs1 col-lg-4 col-md-6  mt-lg-0  d-flex justify-content-center'>
                            <img src={Pioneers} alt="" className='ThreTbsPioneers'/>
                            <div className='ThreTabs1 d-flex align-items-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0  '>
                                <h4 className='sans_light'>Pioneers in Aluminium
                                    Collapsible Tubes</h4>
                            </div>
                        </div>
                        <div className='col-xl-4 ThreTbs1 col-lg-4 col-md-6  mt-lg-0 d-flex justify-content-center'>
                        <img src={Unprecedented} alt="" className='ThreUnprecedented'/>
                            <div className='ThreTabs1 d-flex align-items-center mt-5 mt-sm-5 mt-md-0 mt-lg-5 mt-xl-5 mt-xxl-5   '>
                                <h4 className='sans_light'>Unprecedented
                                    infrastructure and
                                    ISO certified</h4>
                            </div>
                        </div>
                        <div className='col-xl-4 ThreTbs1 col-lg-4 col-md-6  mt-lg-0 d-flex justify-content-center'>
                        <img src={Specifications} alt="" className='ThreSpecifications'/>

                            <div className='ThreTabs1 d-flex align-items-center mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0  '>
                                <h4 className='sans_light'>Always in Sync to
                                    Customer Specifications</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThreTabs