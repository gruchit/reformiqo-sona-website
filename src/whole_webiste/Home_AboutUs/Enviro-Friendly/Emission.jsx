import React from 'react'
import './envir.css'
import { FaCheck } from "react-icons/fa6";
import Single_BlackBol_Line from '../../../assets/single_BlackBol_Line.svg'


function Emission() {
    return (
        <>
            <div className='Emission'>
                <img src={Single_BlackBol_Line} alt="" srcset="" className='EmissionSingleBoletdIMg'/>
                <div className='container-xxl'>
                    <div className='EmissionBody'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-6 col-md-12 mt-5 d-flex justify-content-center'>
                                <div className='EmissionCard '>
                                    <h2 className='mb-4 sans_bold'>CO<sub>2</sub> Emission</h2>
                                    <p className='mb-4 text-secondary sans_light'>We’re committed to producing high-quality aluminium products while minimising our carbon footprint. The steps we take to lessen our company’s impact on the environment and advance a more sustainable future. We place a high priority on utilising renewable energy sources to run our manufacturing facilities, and we have implemented numerous effective waste-reduction strategies.</p>
                                    <div className='d-flex'>
                                        <ul className='flex-column list-unstyled justify-content-evenly mb-0 sans_Medium'>
                                            <li className='d-flex justify-content-center pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Putting in place recycling procedures for packaging
                                                and materials</div></li>
                                            <li className='d-flex justify-content-center pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Decreasing the use of non-renewable resources</div></li>
                                            <li className='d-flex justify-content-center pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Collaborating with a group to support
                                                conservation initiatives</div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 mt-5 d-flex justify-content-center'>
                                <div className='EmissionCard '>
                                    <h2 className='mb-4 sans_bold'>Recycle</h2>
                                    <p className='mb-4 text-secondary sans_light'>Aluminum has larger percentage of recycled content hence aluminum is widely seen as the better choice for the environment. A highly durable metal, aluminum is recyclable and can be recycled again and again without degrading its inherent value. Aluminum is very lightweight, transports easily hence opting for aluminum instead of plastic can help reduce greenhouse gas emissions.</p>
                                    <div className='d-flex'>
                                        <ul className='flex-column list-unstyled justify-content-evenly mb-0 sans_Medium'>
                                            <li className='d-flex justify-content-center pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Contributing to the environment by reducing the
                                                carbon footprint</div></li>
                                            <li className='d-flex justify-content-center pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Investing in environmentally friendly products
                                                and processes</div></li>
                                            <li className='d-flex justify-content-center pb-2'><div className='m-0 d-block'><FaCheck className='ProdCapaCheck fs-5 me-2' /></div><div>Minimizing waste by adopting lean
                                                manufacturing principles</div></li>
                                        </ul>
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

export default Emission