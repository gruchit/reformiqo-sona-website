import React, { useState } from 'react';
import Single_BlackBol_Line from '../../../assets/single_BlackBol_Line.svg';
import Arrow_Left from '../../../assets/arrow_Left.svg';
import Double_bol_line from '../../../assets/double_bol_line.svg';
import './Indu.css';

function InWeSer() {
    const [activeTab, setActiveTab] = useState('Pharmaceutical');

    const handleTabChange = (tabName) => () => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='InWeSer'>
                <div className="InWeSer_imag d-flex justify-content-center">
                    <img src={Single_BlackBol_Line} alt="Line Decoration" />
                </div>
                <div>
                    <h2 className="text-center sans_light">Know More About Us</h2>
                    <p className="text-center sans_light">
                        We, at Sona Extrusions, are one of the leading producers and exporters of premium aluminium
                        collapsible tubes, containers, and aluminium bottles/flasks. Dependable product quality and prompt
                        delivery are ensured by cutting-edge manufacturing facilities, a skilled workforce, and rigorous
                        quality control procedures.
                    </p>
                </div>
            </div>
            <div className='InWeSer_tabs d-flex justify-content-end '>
                <div className='InWeSer_tabs_left '>
                    <img src={Arrow_Left} alt="" />
                </div>
                <div className='InWeSer_tabsBox'>
                    <div className="filter-buttons py-4 d-flex justify-content-evenly">
                        {['Pharmaceutical', 'Cosmetic & Personal Care', 'Nutraceutical', 'Industrial'].map((tab) => (
                            <button
                                key={tab}
                                className={`filter-button ${activeTab === tab ? 'active' : ''}`}
                                onClick={handleTabChange(tab)}
                                aria-pressed={activeTab === tab}
                            >
                                {tab.replace(/([A-Z])/g, ' $1').trim()}
                            </button>
                        ))}
                    </div>

                    <div className="KnowMoreTabs">
                        {activeTab === 'Pharmaceutical' && (
                            <div className="tab-content show">
                                <p className='text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                            </div>
                        )}
                        {activeTab === 'Cosmetic & Personal Care' && (
                            <div className="tab-content show">
                                <p className='text-ellipsis'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
                            </div>
                        )}
                        {activeTab === 'Nutraceutical' && (
                            <div className="tab-content show">
                                <p className='text-ellipsis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</p>
                            </div>
                        )}
                        {activeTab === 'Industrial' && (
                            <div className="tab-content show">
                                <p> Our mission is to provide high-quality and innovative packaging solutions...</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='InWeSer_tabsDoBol '>
                    <img src={Double_bol_line} alt="" />
                </div>
            </div>
        </>
    );
}

export default InWeSer;
