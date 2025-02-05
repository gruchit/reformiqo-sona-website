import React, { useEffect, useState } from 'react';
import './AssistantExe.css'
import Top from '../../component/Top/Top.jsx'
import Header from '../../component/Header/Header.jsx'
import Footer from '../../component/Footer/Footer.jsx'
import Featured from '../../../assets/Fea.png'
import { IoTimeOutline } from "react-icons/io5";
import { PiBagBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { MdShare } from "react-icons/md";
import '../../../assets/fonts/fonts.css'
import Focus from '../../Home/Focus'
import ModelOpen from '../ModelFile/ModelOpen.jsx';
import Helmet from 'react-helmet';

function AssistantExe() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "{{Category Name}}",
        "url": "{{Category URL}}",
        "description": "{{Category Description}}"
    }
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="AssistantExe" />
            <div className='container'>
                <div className='AssistantExe '>
                    <div>
                        <div className='ProdTop d-md-flex justify-content-between'>
                            <div className='flex-column'>
                                <h1 className='sans_bold'>Production Supervisor</h1>
                                <div>
                                    <ul className='d-sm-flex d-md-flex d-lg-flex gap-sm-5 gap-md-5 gap-lg-5 list-unstyled'>
                                        <li><span><IoTimeOutline className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>March 29, 2023</a></li>
                                        <li><span><PiBagBold className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>Full-time, Permanent</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='FeaturedAiiss d-flex my-auto'>
                                <div className='my-auto'>
                                    <img src={Featured} alt="" className='mb-1' loading='lazy' /><span className='sans_bold ms-2'>Featured</span>
                                </div>
                                <div className='AssistantExe_Btn ms-5' onClick={() => setIsModalOpen(true)}><button><span><MdShare /></span>Apply Now</button></div>
                            </div>
                        </div>
                    </div>
                    <div className='Role'>
                        <h4 className='sans_Medium'>Roles and Responsibilities</h4>
                        <h4 className='sans_Medium'>Quality Control</h4>
                        <h4 className='sans_Medium'>1. In-Process& Finished Product- (Routine)</h4>
                        <ul className='sans_light text-secondary'>
                            <li className='text-secondary my-2'>IPQC testing and preparation.</li>
                            <li className='text-secondary my-2'>Ensure that all production targets are met and that quality standards are maintained.</li>
                            <li className='text-secondary my-2'>Daily verification of weighing balance.</li>
                            <li className='text-secondary my-2'>Performing Pre dispatch Inspection and preparation of reports.</li>
                            <li className='text-secondary my-2'>Verifying Line clearance.</li>
                            <li className='text-secondary my-2'>Filing batch records.</li>
                            <li className='text-secondary my-2'>Sampling, Testing and analysis of raw and finished material.</li>
                            <li className='text-secondary my-2'>Collection and storage of controlled samples.</li>
                            <li className='text-secondary my-2'>Preparation of shade cards.</li>
                            <li className='text-secondary my-2'>Preparation of reagents.</li>
                        </ul>
                        <h4 className='sans_Medium'>2. Technical Mechanical evaluation. (Bi-Monthly)</h4>
                        <ul className='sans_light text-secondary'>
                            <li className='text-secondary my-2'>Continual evaluation of existing machinery</li>
                            <li className='text-secondary my-2'>List out new improvement.</li>

                        </ul>
                    </div>
                    <div className='Endu '>
                        <ul className='list-unstyled'>
                            <li><span className='h4 sans_Medium'>Education:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >G:BE Mechanical</a></li>
                        </ul>
                    </div>
                    <div className='Key_Skills'>
                        <h4 className='sans_Medium'>Key Skills</h4>
                        <ul className='sans_light'>
                            <li className='text-secondary'>Extrusion, Extrusion Press, Operate and Maintain Extrusion, Annealing machines, Printing machine</li>
                        </ul>
                    </div>
                    <div className='Desired'>
                        <h4 className='sans_Medium'>Desired Candidate Profile</h4>
                        <ul className='sans_light'>
                            <li className='text-secondary '>Age preference : 20-45 Yrs</li>
                            <li className='text-secondary '>Experience preferred : 1-20 Yrs</li>
                        </ul>
                    </div>
                    <div className='Endu '>
                        <ul className='list-unstyled'>
                            <li><span className='h4 sans_Medium'>Role:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Assistant IPQC Executive</a></li>
                        </ul>
                    </div>
                    <div className='Endu '>
                        <ul className='list-unstyled'>
                            <li className=' my-2'><span className='h4 sans_Medium'>Department:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Quality Control / Quality Assurance</a></li>
                            <li className=' my-2'><span className='h4 sans_Medium'>Employment Type:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Full Time, Permanent</a></li>
                            <li className=' my-2'><span className='h4 sans_Medium'>Role Category:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Operations, Maintenance & Support</a></li>
                        </ul>
                        <div className='AssistantExe_Btn d-flex  ms-5' onClick={() => setIsModalOpen(true)}><button><span><MdShare /></span>Apply Now</button></div>
                    </div>
                </div>
            </div>
            <Footer />
            <ModelOpen isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default AssistantExe