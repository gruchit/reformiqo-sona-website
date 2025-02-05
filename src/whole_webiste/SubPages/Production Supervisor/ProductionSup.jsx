import React, { useEffect, useState } from 'react';
import './ProductionSup.css'
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

function ProductionSup() {
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
      <Focus type="ProductionSup" />
      <div className='container'>
        <div className='ProductionSup '>
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
              <div className='FeaturedPro d-flex my-auto '>
                <div className='my-auto'>
                  <img src={Featured} alt="" className='mb-1' loading='lazy' /><span className='sans_bold ms-2'>Featured</span>
                </div>
                {/* <div className="ProductionSup_Btn ms-5" onClick={() => {setIsModalOpen(true);}}><button><span><MdShare /></span> Apply Now</button></div> */}
                <div className="ProductionSup_Btn ms-5" onClick={() => setIsModalOpen(true)}><button><span><MdShare /></span>Apply Now</button></div>
              </div>
            </div>
            <p className='sans_light text-secondary'>The Production Supervisor is responsible for supervising the production line and ensuring that it operates efficiently to meet production targets, quality standards, and safety regulations. The Production Supervisor must have strong leadership skills, excellent communication skills, and be able to motivate and manage a team of production workers to achieve the goals set by the…</p>
          </div>
          <div className='Role'>
            <h4 className='sans_Medium'>Roles and Responsibilities</h4>
            <ul className='sans_light text-secondary'>
              <li className='text-secondary my-2'>Supervise and oversee the production process, ensuring that it runs smoothly and efficiently.</li>
              <li className='text-secondary my-2'>Ensure that all production targets are met and that quality standards are maintained.</li>
              <li className='text-secondary my-2'>Monitor and maintain the production schedule, ensuring that all deadlines are met.</li>
              <li className='text-secondary my-2'>Assign tasks to production workers and monitor their performance.</li>
              <li className='text-secondary my-2'>Train new employees and provide ongoing training to existing employees.</li>
              <li className='text-secondary my-2'>Maintain a safe and clean work environment by enforcing procedures, rules, and regulations.</li>
              <li className='text-secondary my-2'>Monitor and control inventory levels of raw materials, finished goods, and packaging materials.</li>
              <li className='text-secondary my-2'>Ensure that all production equipment is maintained and repaired as needed.</li>
              <li className='text-secondary my-2'>Should have technical knowledge of Mechanical, Electrical and Pneumatic.</li>
            </ul>
          </div>
          <div className='Endu '>
            <ul className='list-unstyled'>
              <li><span className='h4 sans_Medium'>Education:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Any Graduate in Mechanical / Electrical degree</a></li>
            </ul>
          </div>
          <div className='Key_Skills'>
            <h4 className='sans_Medium'>Key Skills</h4>
            <ul className='sans_light'>
              <li className='text-secondary'>Strong leadership and communication skills, Excellent problem-solving skills and attention to detail, Knowledge of quality standards and production processes</li>
            </ul>
          </div>
          <div className='Desired'>
            <h4 className='sans_Medium'>Desired Candidate Profile</h4>
            <ul className='sans_light'>
              <li className='text-secondary '>Age preference : 20-45 Yrs</li>
              <li className='text-secondary '>Experience preferred : 3-20 Yrs</li>
            </ul>
          </div>
          <div className='Endu '>
            <ul className='list-unstyled'>
              <li><span className='h4 sans_Medium'>Role:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Production Manager / Supervisor</a></li>
            </ul>
          </div>
          <div className='Endu '>
            <ul className='list-unstyled'>
              <li className=' my-2'><span className='h4 sans_Medium'>Department:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Production, Manufacturing & Engineering</a></li>
              <li className=' my-2'><span className='h4 sans_Medium'>Employment Type:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Full Time, Permanent</a></li>
              <li className=' my-2'><span className='h4 sans_Medium'>Role Category:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Operations, Maintenance & Support</a></li>
            </ul>
            {/*  */}
            <div
              className="ProductionSup_Btn ms-5 mt-5"
              onClick={() => setIsModalOpen(true)}
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

export default ProductionSup

