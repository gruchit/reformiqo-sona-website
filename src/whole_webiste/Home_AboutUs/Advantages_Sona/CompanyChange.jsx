import React from 'react'
import Pharmaceutical1 from '../../../assets/Pharmaceutical1.svg'
import Cosmetic1 from '../../../assets/Cosmetic1.svg'
import Nutraceuticals from '../../../assets/Nutraceuticals.svg'
import Industrial1 from '../../../assets/Industrial1.svg'
import Company_black from '../../../assets/Company_black.jpg'
import './AdvantSona.css'

function CompanyChange() {
    return (
        <>
            <div className='CompanyChange position-relative'>
                <div className='Company_black '>
                    <img src={Company_black} alt="" />
                    <div className='CompanyblackThm d-flex align-items-center'>
                        <div className='Companyblacktxt container'>
                            <div className=' mt-5'>
                                <h1 className='text-center sans_light text-white mb-5'>A Company to Change the World  </h1>
                                <p className='text-center sans_light text-white'>We manufacture and supply products that are of the highest quality to various business verticals across industries like Pharmaceuticals, Cosmetic and Personal Care, Industrial, Agro Chemical and many more. We take immense pride in our commitment to customer satisfaction, safety, and sustainability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-xxl position-absolute '>
                <div className=' d-flex justify-content-center'>
                    <div className='CompanyBlackCard'>
                        <div className='row d-flex justify-content-center'>
                            <div className='cmp1 col-xl-3 col-lg-4 col-md-6  mt-lg-0  d-flex justify-content-center'>
                                <img src={Pharmaceutical1} alt="" className='cmpTbsPioneers' />
                                <div className='CompanyChangeCard d-flex align-items-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0  '>
                                    <div>
                                        <h4 className='sans_light'>Pharmaceutical</h4>
                                        <p className='m-0 text-secondary'>We design, manufacture and offer highly efficient, reliable, and cost-effective solutions to pharmaceutical industries</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cmp1 col-xl-3 ol-lg-4 col-md-6  mt-lg-0 d-flex justify-content-center'>
                                <img src={Cosmetic1} alt="" className='cmpUnprecedented' />
                                <div className='CompanyChangeCard d-flex align-items-center mt-5 mt-sm-5 mt-md-0 mt-lg-5 mt-xl-5 mt-xxl-5   '>
                                    <div>
                                        <h4 className='sans_light'>Cosmetic & <br />
                                            Personal Care</h4>
                                        <p className='m-0 text-secondary'>We provide a broad range of packaging options for convenience and ease-of-use for the consumer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cmp1 col-xl-3 ol-lg-4 col-md-6  mt-lg-0 d-flex justify-content-center'>
                                <img src={Nutraceuticals} alt="" className='cmpSpecifications' />
                                <div className='CompanyChangeCard d-flex align-items-center mt-5 mt-sm-5 mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0  '>
                                    <div>
                                        <h4 className='sans_light'>Nutraceuticals</h4>
                                        <p className='m-0 text-secondary'>We have continuously improved our procedures & designed products to meet the nutraceutical standards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='cmp1 col-xl-3 ol-lg-4 col-md-6  mt-lg-0 d-flex justify-content-center'>
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

export default CompanyChange