import React from 'react'
import Pharmaceutical1 from '../../../assets/Pharmaceutical1.svg'
import Cosmetic1 from '../../../assets/Cosmetic1.svg'
import Nutraceuticals from '../../../assets/Nutraceuticals.svg'
import Industrial1 from '../../../assets/Industrial1.svg'

function CMPsecond() {
    return (
        <>
            <div className='container'>
                <div className='CMPsecondCard'>
                    <div className='CompanyBlackCard'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-3 cmp1  col-lg-4 col-md-6  mt-lg-0  d-flex justify-content-center'>
                                <img src={Pharmaceutical1} alt="" className='cmpTbsPioneers' />
                                <div className='CompanyChangeCard d-flex align-items-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0  '>
                                    <div>
                                        <h4 className='sans_light'>Pharmaceutical</h4>
                                        <p className='m-0 text-secondary'>We design, manufacture and offer highly efficient, reliable, and cost-effective solutions to pharmaceutical industries</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 cmp1 col-lg-4 col-md-6  mt-lg-0 d-flex justify-content-center'>
                                <img src={Cosmetic1} alt="" className='cmpUnprecedented' />
                                <div className='CompanyChangeCard d-flex align-items-center mt-5 mt-sm-5 mt-md-0 mt-lg-5 mt-xl-5 mt-xxl-5   '>
                                    <div>
                                        <h4 className='sans_light'>Cosmetic & <br />
                                            Personal Care</h4>
                                        <p className='m-0 text-secondary'>We provide a broad range of packaging options for convenience and ease-of-use for the consumer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 cmp1 col-lg-4 col-md-6  mt-lg-0 d-flex justify-content-center'>
                                <img src={Nutraceuticals} alt="" className='cmpSpecifications' />
                                <div className='CompanyChangeCard d-flex align-items-center mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0  '>
                                    <div>
                                        <h4 className='sans_light'>Nutraceuticals</h4>
                                        <p className='m-0 text-secondary'>We have continuously improved our procedures & designed products to meet the nutraceutical standards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 cmp1 col-lg-4 col-md-6  mt-lg-0 d-flex justify-content-center'>
                                <img src={Industrial1} alt="" className='cmpIndustrial1' />
                                <div className='CompanyChangeCard d-flex align-items-center mt-5 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5 mt-xxl-5'>
                                    <div>
                                        <h4 className='sans_light'>Industrial & Agro
                                            Chemical</h4>
                                        <p className='m-0 text-secondary'>We have made sizable investments in research and development for Industrial products to meet highest quality.</p>
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

export default CMPsecond
