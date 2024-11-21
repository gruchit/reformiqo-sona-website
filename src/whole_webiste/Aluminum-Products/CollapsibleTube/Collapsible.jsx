import React from 'react'
import './Colla.css'
import Colla1 from '../../../assets/Colla1.png'
import Colla2 from '../../../assets/Colla2.png'
import Colla3 from '../../../assets/Colla3.png'
import Colla4 from '../../../assets/Colla4.png'
import Colla5 from '../../../assets/Colla5.png'
import Colla6 from '../../../assets/Colla6.png'

function Collapsible() {
    return (
        <>
            <div className='Collapsible'>
                <div className='container-xxl'>
                    <div className='CollapsibleTxt'>
                        <h2 className='text-center sans_light'>Sona’s Collapsible Tubes Next Level
                            Convenience, An Edge Over Others.</h2>
                        <p className='text-center sans_light text-secondary'>We, have revolutionized the packaging industry by offering state-of-the-art easy to use dispensing products for a wide range of products like ointments and creams. With more than three decades of experience, we provide cutting-edge solutions to satisfy changing consumer demands. Sona Extrusions collapsible tubes offer an unbeatable combination of ease of use, affordability, and durability for various industry across many verticals.</p>
                    </div>
                    <div className='CollapsibleBody'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-4  col-lg-4 col-md-6 mt-5 d-flex justify-content-center'>
                                <div className='CollapsibleCard'>
                                    <img src={Colla1} alt="" srcset="" />
                                    <div className="CollaCardTitale">
                                        <p className='sans_light'>Ayurvedic Tubes</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6 mt-5 d-flex justify-content-center'>
                                <div className='CollapsibleCard'>
                                    <img src={Colla2} alt="" srcset="" />
                                    <div className="CollaCardTitale">
                                        <p className='sans_light'>Ayurvedic Tubes</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6 mt-5 d-flex justify-content-center'>
                                <div className='CollapsibleCard'>
                                    <img src={Colla3} alt="" srcset="" />
                                    <div className="CollaCardTitale">
                                        <p className='sans_light'>Ayurvedic Tubes</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6 mt-5 d-flex justify-content-center'>
                                <div className='CollapsibleCard'>
                                    <img src={Colla4} alt="" srcset="" />
                                    <div className="CollaCardTitale">
                                        <p className='sans_light'>Ayurvedic Tubes</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6 mt-5 d-flex justify-content-center'>
                                <div className='CollapsibleCard'>
                                    <img src={Colla5} alt="" srcset="" />
                                    <div className="CollaCardTitale">
                                        <p className='sans_light'>Ayurvedic Tubes</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4  col-lg-4 col-md-6 mt-5 d-flex justify-content-center'>
                                <div className='CollapsibleCard'>
                                    <img src={Colla6} alt="" srcset="" />
                                    <div className="CollaCardTitale">
                                        <p className='sans_light'>Ayurvedic Tubes</p>
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

export default Collapsible