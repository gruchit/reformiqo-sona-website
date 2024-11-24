import React, { useState } from 'react';

import Arrow from '../../../assets/arrow_Left.svg'
import './pharm.css'

function TbasOutSolu() {
    const [activeTab, setActiveTab] = useState('Market Leader');
    const handleTabChange = (tabName) => () => {
        setActiveTab(tabName);
    }
    return (
        <>
            <div className='TbasOutSolu d-flex justify-content-start'>

                <div className='OutSoluTbs p-xxl-5 p-xl-5 p-lg-5 p-md-5 p-sm-5'>
                    <img src={Arrow} alt="" className='TbasImg' />

                    <div className="filter-buttons py-4 d-flex justify-content-evenly">
                        {['Market Leader', 'Infrastructure', 'Production Capacity'].map((tab) => (
                            <button
                                key={tab}
                                className={`filter-button  ${activeTab === tab ? 'active ' : ''}`}
                                onClick={handleTabChange(tab)}
                                aria-pressed={activeTab === tab}
                            >
                                {tab.replace(/([A-Z])/g, ' $1').trim()}
                            </button>
                        ))}
                    </div>

                    <div className="KnowMoreTabs text-secondary">
                        {activeTab === 'Market Leader' && (
                            <div className="tab-content show ">
                                <p className='sans_light '>Sona Extrusion Pvt. Ltd. is a leading manufacturer of aluminium collapsible tubes, containers and aluminium bottles/flasks in India, duly ISO 15378:2017 (GMP) Certified – SGS (Primary Packaging Materials for Pharmaceutical Products) & ISO 9001:2015 Certified – TUV & US DMF Registered Company. Sona Extrusions is having one of the highest production capacities in the country.</p>
                            </div>
                        )}
                        {activeTab === 'Infrastructure' && (
                            <div className="tab-content show">
                                <p className='sans_light' >We, at Sona Extrusion, are maximizing our potential at our 1,00,000 sq. ft. ultramodern & well-defined single roof manufacturing plant which is fully controlled by 5 Micron Positive Air Handling System and operated high-quality, well-advanced & reliable German Machinery. We ensure a well-organized and totally dust-free manufacturing environment, strictly adhering to ‘Good Manufacturing Practices’ as per ISO 15378:2017 (GMP).</p>

                            </div>
                        )}
                        {activeTab === 'Production Capacity' && (
                            <div className="tab-content show">
                                <p className='sans_light'>Sona Extrusion Pvt. Ltd. has a Manufacturing Capacity of 500 Mn Tubes & 50 Mn Flask and Containers per annum. We deliver Premium Quality Products at economical prices across India & Globally for 110+ Clients. Our 35+ Years of Experience has assisted us to remain committed and elevate our manufacturing standards.</p>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </>
    )
}

export default TbasOutSolu