import React from 'react'
import './Manu.css'
import { FaCheck } from "react-icons/fa6";
import SignleBlackLine from '../../../assets/single_BlackBol_Line.svg'
import AOS from 'aos';
import { useEffect } from 'react';


function ProdCapa() {
    useEffect(() => {
        AOS.init({
            once: true, 
        });
    }, []);
    return (
        <>
            <div className='ProdCapa'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 mt-5 d-flex justify-content-center align-items-center'>
                            <div className='ProdCapaTxt flex-column'
                            data-aos="zoom-in-up"
                            >
                                <div className='d-flex justify-content-end'>
                                    <img src={SignleBlackLine} alt="" srcset="" className='ProdCapaImg mb-3' loading='lazy' />
                                </div>
                                <h2 className='text-center sans_bold'>Production Capacity</h2>
                                <ul className='list-unstyled sans_Medium mt-4'>
                                    <li className='d-flex py-3'><div><FaCheck className='ProdCapaCheck fs-5 me-3 ' /></div> <div>Over 500 million tubes & 50 million Flask and Containers per annum.</div></li>
                                    <li className='d-flex py-3'><div><FaCheck className='ProdCapaCheck fs-5 me-3 ' /></div> <div>280+ fully trained and experienced and knowledgeable Employees.</div></li>
                                    <li className='d-flex py-3'><div><FaCheck className='ProdCapaCheck fs-5 me-3 ' /></div> <div> Installed with modern machineries</div></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 mt-5 '>
                            <div>
                                <div className='ProdCapaTxt d-flex justify-content-center '
                                >
                                    <table className="info-table sans_Medium"
                                    data-aos="fade-up-left"
                                    >
                                        <tbody>
                                            <tr>
                                                <td>Extrusion Press</td>
                                                <td>20 Nos</td>
                                            </tr>
                                            <tr>
                                                <td>Tube Finishing Machines</td>
                                                <td>15 Nos</td>
                                            </tr>
                                            <tr>
                                                <td>Continues Annealing Oven</td>
                                                <td>4 Nos</td>
                                            </tr>
                                            <tr>
                                                <td>Lacquering Machines</td>
                                                <td>8 Nos</td>
                                            </tr>
                                            <tr>
                                                <td>Semi automatic Printing Line</td>
                                                <td>7 Nos</td>
                                            </tr>
                                            <tr>
                                                <td>Fully automatic Printing Line</td>
                                                <td>4 Nos</td>
                                            </tr>
                                            <tr>
                                                <td>Capping Machine</td>
                                                <td>6 Nos</td>
                                            </tr>
                                            <tr>
                                                <td>Fully automatic line</td>
                                                <td>2 Nos</td>
                                            </tr>
                                            <tr>
                                                <td>Latexing</td>
                                                <td>4 Sets</td>
                                            </tr>
                                            <tr>
                                                <td>Necking Machines</td>
                                                <td>3 Nos</td>
                                            </tr>
                                            <tr>
                                                <td>Bottle Finishing Machines</td>
                                                <td>3 Sets</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProdCapa