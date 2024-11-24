import React from 'react'
import './envir.css'
import Mission from '../../../assets/Mission.svg'
import Economys from '../../../assets/Economys.svg'
import Arrow_Left from '../../../assets/arrow_Left.svg'


function Missine() {
    return (
        <>
            <div className='Missine'>
                <img src={Arrow_Left} alt="" srcset="" className='MissineImgArow'/>
                <div className='containerxxl'>
                    <div className='MissineBody'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 mt-5 d-flex justify-content-center'>
                                <div className='MissineCard flex-column'>
                                    <img src={Mission} alt="" className='MissionImg' />
                                    <div className='mt-5 pt-3'>
                                    <h4 className='mt-4 sans_Medium'>Our Mission For Sustainability</h4>
                                    <p className='text-secondary sans_light mt-3'>The preservation of the environment is of paramount significance in our opinion. In order to create new and improved, healthier plastic and aluminium packing tubes, eco-friendly materials, and green engineering solutions, we draw on our more than 35+ years of technical knowledge and experience. Our mission is to provide our clients with the best solutions while minimizing our environmental effect and maximizing their social impact. We work to strike a balance between social responsibility, environmental protection, and economic prosperity.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 mt-5 d-flex justify-content-center'>
                                <div className='MissineCard flex-column'>
                                    <img src={Economys} alt="" className='MissionImg' />
                                    <div className='mt-5 pt-3'>
                                    <h4 className='mt-4 sans_Medium'>A Circular Economy’s Support</h4>
                                    <p className='text-secondary sans_light mt-3'>SONA EXTRUSION is dedicated to creating the greatest environmentally friendly packaging options for its clients and assisting them in meeting the demand for sustainable packaging from their customers. We support our clients’ adoption of a circular economy by utilising reduced, renewable, recycled, or recyclable resources across their business. The solutions we offer include efficient and environment-friendly processes that minimize the use of plastic, reduce waste, decrease energy consumption and utilize recycled materials.</p>
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

export default Missine