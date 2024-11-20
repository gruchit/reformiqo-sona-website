import React from 'react'
import Single_BlackBol_Line from '../../../assets/single_BlackBol_Line.svg'
import Product_capacity from '../../../assets/product_capacity.svg'
import Doted_line from '../../../assets/Doted_line.svg'
import Industries from '../../../assets/Industries.svg'
import Certifications from '../../../assets/Certifications.svg'
import Featured from '../../../assets/Fea.png'
import { CiShare2 } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

import './Careers.css'

function OrderDeliveryCrr() {
    return (
        <>
            <div className='OrderDeliveryCrr'>
                <div className='OrderDelivertext flex-column'>
                    <div className='d-flex justify-content-center '>
                        <img src={Single_BlackBol_Line} alt="" srcset="" className='' data-aos="zoom-in-up"
                        />
                    </div>
                    <h2 className='text-center mb-5 pb-5'>Orders Delivered Satisfactorily</h2>
                </div>
                <div className='OrderDeliver_images d-flex justify-content-center '>
                    <img src={Doted_line} alt="" srcset="" />
                    <div className='OrderDeliver_box1 text-ellipsis flex-column'>
                        <div className='OrderDeliverBox_detals'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h4 className='text-start'>Production Supervisor</h4>
                                </div>
                                <div className='Featured my-auto'>
                                    <img src={Featured} alt="" srcset="" className='mb-1' /><span className='my-auto ms-2'>Featured</span>
                                </div>
                            </div>
                            <div>
                                <ul className='d-flex list-unstyled gap-5'>
                                    <li><span><IoTimeOutline className='iconOrderDel mb-1' /></span> <a  className='text-secondary text-decoration-none'>March 29, 2023</a></li>
                                    <li><span><IoTimeOutline className='iconOrderDel mb-1' /></span> <a  className='text-secondary text-decoration-none'>Full-time, Permanent</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className='sans_light text-ellipsis'>The Production Supervisor is responsible for supervising the production line and ensuring that it operates efficiently to meet production targets, quality standards, and safety regulations. The Production Supervisor must have strong leadership skills, excellent communication skills, and be able to motivate and manage a team of production workers to achieve the goals set by the…</p>
                        <div className='d-flex justify-content-end'>
                            <button className='border-0 OrderDeliverBTN text-white'><span><CiShare2 className='fs-4' /></span> Details </button>
                        </div>
                    </div>
                    <div className='OrderDeliver_box2 text-ellipsis flex-column'>
                        <div className='OrderDeliverBox_detals'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h4 className='text-start'>Machine Operator </h4>
                                </div>
                                <div className='Featured my-auto'>
                                    <img src={Featured} alt="" srcset="" className='mb-1' /><span className='my-auto ms-2'>Featured</span>
                                </div>
                            </div>
                            <div>
                                <ul className='d-flex list-unstyled gap-5'>
                                    <li><span><IoTimeOutline className='iconOrderDel mb-1' /></span> <a  className='text-secondary text-decoration-none'>March 29, 2023</a></li>
                                    <li><span><IoTimeOutline className='iconOrderDel mb-1' /></span> <a  className='text-secondary text-decoration-none'>Full-time, Permanent</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className='sans_light text-ellipsis'>Roles and Responsibilities Operate and Maintain Extrusion press for extrusion automated machine. Should have knowledge of manufacturing aluminium tubes. Should be experienced in operating Extrusion, Annealing, Printing machines and to troubleshoot on common process problems. Should be able to do routine preventive maintenances. Report production output against given target. Able to understand standards of Safety,…</p>
                        <div className='d-flex justify-content-end'>
                            <button className='border-0 OrderDeliverBTN text-white'><span><CiShare2 className='fs-4' /></span> Details </button>
                        </div>
                    </div>
                    <div className='OrderDeliver_box3 text-ellipsis flex-column'>
                        <div className='OrderDeliverBox_detals'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h4 className='text-start'>Assistant IPQC Executive</h4>
                                </div>
                                <div className='Featured my-auto'>
                                    <img src={Featured} alt="" srcset="" className='mb-1' /><span className='my-auto ms-2'>Featured</span>
                                </div>
                            </div>
                            <div>
                                <ul className='d-flex list-unstyled gap-5'>
                                    <li><span><IoTimeOutline className='iconOrderDel mb-1' /></span> <a  className='text-secondary text-decoration-none'>March 29, 2023</a></li>
                                    <li><span><IoTimeOutline className='iconOrderDel mb-1' /></span> <a  className='text-secondary text-decoration-none'>Full-time, Permanent</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className='sans_light text-ellipsis'>Roles and Responsibilities: Quality Control  In-Process& Finished Product- (Routine)  IPQC testing and preparation.  Daily verification of weighing balance.  Performing Pre dispatch Inspection and preparation of reports.  Verifying Line clearance.  Filing batch records.  Sampling, Testing and analysis of raw and finished material.  Collection and storage of controlled samples.  Preparation of shade cards.  Preparation of reagents.  Technical…</p>
                        <div className='d-flex justify-content-end'>
                            <button className='border-0 OrderDeliverBTN text-white'><span><CiShare2 className='fs-4' /></span> Details </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDeliveryCrr;