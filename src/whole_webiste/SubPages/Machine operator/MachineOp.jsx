import React, { useEffect, useState } from 'react'
import './Machine.css'
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

function MachineOp() {
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
      <Focus type="MachineOp" />
      <div className='container'>
        <div className='MachineOp'>
          <div>
            <div className='MachineTop d-md-flex justify-content-between'>
              <div className='flex-column'>
                <h1 className='sans_bold'>Machine Operator</h1>
                <div>
                  <ul className='d-sm-flex d-md-flex d-lg-flex gap-sm-5 gap-md-5 gap-lg-5 list-unstyled'>
                    <li><span><IoTimeOutline className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>March 29, 2023</a></li>
                    <li><span><PiBagBold className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>Full-time, Permanent</a></li>
                  </ul>
                </div>
              </div>
              <div className='FeaturedPro d-flex my-auto'>
                <div className='my-auto'>
                  <img src={Featured} alt="" className='mb-1' loading='lazy' /><span className='sans_bold ms-2'>Featured</span>
                </div>
                <div className='machineOp_Btn ms-5' onClick={() => setIsModalOpen(true)}><button><span><MdShare /></span>Apply Now</button></div>
              </div>

            </div>
            <p className='sans_light text-secondary'>The Production Supervisor is responsible for supervising the production line and ensuring that it operates efficiently to meet production targets, quality standards, and safety regulations. The Production Supervisor must have strong leadership skills, excellent communication skills, and be able to motivate and manage a team of production workers to achieve the goals set by the…</p>
          </div>
          <div className='Role'>
            <h4 className='sans_Medium'>Roles and Responsibilities</h4>
            <ul className='sans_light text-secondary'>
              <li className='text-secondary my-2'>Operate and Maintain Extrusion press for extrusion automated machine.</li>
              <li className='text-secondary my-2'>Should have knowledge of manufacturing aluminum tubes.</li>
              <li className='text-secondary my-2'>Should be experienced in operating Extrusion, Annealing, Printing machines and to troubleshoot on common process problems.</li>
              <li className='text-secondary my-2'>Should be able to do routine preventive maintenances.</li>
              <li className='text-secondary my-2'>Report production output against given target.</li>
              <li className='text-secondary my-2'>Able to understand standards of Safety, Quality, cost, and Delivery.</li>
              <li className='text-secondary my-2'>Reporting to production supervisor.</li>
            </ul>
          </div>
          <div className='Endu '>
            <ul className='list-unstyled'>
              <li><span className='h4 sans_Medium'>Education:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >UG : Any Graduate</a></li>
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
              <li className='text-secondary '>Experience preferred : 1-10 Yrs</li>
            </ul>
          </div>
          <div className='Endu '>
            <ul className='list-unstyled'>
              <li><span className='h4 sans_Medium'>Role:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Machine Operator</a></li>
            </ul>
          </div>
          <div className='Endu '>
            <ul className='list-unstyled'>
              <li className=' my-2'><span className='h4 sans_Medium'>Department:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Production, Manufacturing & Engineering</a></li>
              <li className=' my-2'><span className='h4 sans_Medium'>Employment Type:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Full Time, Permanent</a></li>
              <li className=' my-2'><span className='h4 sans_Medium'>Role Category:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Operations, Maintenance & Support</a></li>
            </ul>
            <div className='machineOp_Btn ms-5' onClick={() => setIsModalOpen(true)}
            >
              <button>
                <span><MdShare /></span> Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ModelOpen isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default MachineOp