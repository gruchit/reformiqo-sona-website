import React from 'react'
import './Sona_About.css'
import Arrow_Left from '../../../assets/arrow_Left.svg'
import Double_bol_line from '../../../assets/double_bol_line.svg'
import Idea_white from '../../../assets/Ellipse2.svg'



function Our_Strength() {
    return (
        <>
            <div className='Our_Strength'>
                <div className='flex-column'>
                    <div className='Our_Strength_images'>
                        <img src={Arrow_Left} alt="" className='left_arwOurSt' />
                        <img src={Double_bol_line} alt="" srcset="" className='DoubleBolLine_Our' />
                    </div>
                    <div className='Our_Strength_details'>
                        <h2 className='sans_light text-center'>Our Strength</h2>
                        <p className='sans_light text-center'>Our Formula for success: Precision manufacturing, quality assurance and
                            state-of-the-art technology.</p>
                    </div>
                    <div className='Our_Strength_cards_details'>
                        <div className='row'>
                            <div className='col-3 d-flex justify-content-center'>
                                <div className='Our_Strength_cards flex-column'>
                                    <img src={Idea_white} alt="" />
                                    <h5 className='sans_light'>Efficient and Effective
                                        Technology </h5>
                                    <p className='sans_light'>We manufacture using state-of-the-art machinery and technology making it possible for us to efficiently & effectively produce quality aluminium packaging solutions.</p>
                                </div>
                            </div>
                            <div className='col-3 d-flex justify-content-center'>
                                <div className='Our_Strength_cards flex-column mt-5'>
                                    <img src={Idea_white} alt="" />
                                    <h5 className='sans_light'>Efficient and Effective
                                        Technology </h5>
                                    <p className='sans_light'>We manufacture using state-of-the-art machinery and technology making it possible for us to efficiently & effectively produce quality aluminium packaging solutions.</p>
                                </div>
                            </div>
                            <div className='col-3 d-flex justify-content-center'>
                                <div className='Our_Strength_cards flex-column'>
                                    <img src={Idea_white} alt="" />
                                    <h5 className='sans_light'>Efficient and Effective
                                        Technology </h5>
                                    <p className='sans_light'>We manufacture using state-of-the-art machinery and technology making it possible for us to efficiently & effectively produce quality aluminium packaging solutions.</p>
                                </div>
                            </div>
                            <div className='col-3 d-flex justify-content-center '>
                                <div className='Our_Strength_cards flex-column mt-5'>
                                    <img src={Idea_white} alt="" />
                                    <h5 className='sans_light'>Efficient and Effective
                                        Technology </h5>
                                    <p className='sans_light'>We manufacture using state-of-the-art machinery and technology making it possible for us to efficiently & effectively produce quality aluminium packaging solutions.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Our_Strength
