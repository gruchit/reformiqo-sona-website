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
                    <img src={Single_BlackBol_Line} alt="Line Decoration" loading='lazy'/>
                </div>
                <div>
                    <h1 className="text-center sans_bold mb-5">Industries We Serve</h1>
                    <p className="text-center sans_light text-secondary">
                    We manufacture and supply products that are of the highest quality to various business verticals across industries like Pharmaceuticals, Cosmetic and Personal Care, Industrial, Agro Chemical and many more. We take immense pride in our commitment to customer satisfaction, safety, and sustainability.
                    </p>
                </div>
            </div>
            <div className='InWeSer_tabs d-flex justify-content-end '>
                <div className='InWeSer_tabs_left '>
                    <img src={Arrow_Left} alt="" loading='lazy'/>
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
                                <p className='text-secondary'>We design, manufacture and offer highly efficient, reliable, and cost-effective solutions to pharmaceutical industries that satisfy various needs of the industry and pharmaceutical packaging as per customers product specifications or requirements. Our team of experts ensure that we are well-positioned to serve our customers with the highest quality products and services.</p>
                            </div>
                        )}
                        {activeTab === 'Cosmetic & Personal Care' && (
                            <div className="tab-content show">
                                <p className='text-secondary'>We provide a broad range of packaging options for the cosmetic and personal care industries, including dispensing pumps, flip-top caps, and various other tubes and containers. Our products are made to be strong, lightweight, and to maintain the calibre of the contents they contain. In addition, all of our products are designed for convenience and ease-of-use for the consumer.</p>
                            </div>
                        )}
                        {activeTab === 'Nutraceutical' && (
                            <div className="tab-content show">
                                <p className='text-secondary'>We produce top-notch goods that primarily benefit the agricultural sector. To ensure that our customers receive the best products possible, we have made sizable investments in research and development. Our offerings include agricultural pipes and irrigation systems, both of which are vital components of the agricultural industry.</p>
                            </div>
                        )}
                        {activeTab === 'Industrial' && (
                            <div className="tab-content show">
                                <p className='text-secondary'>We are the industry's top producers and distributors of aluminium Drink Bottles, Tablet Cannister, Tablet Bottles. Because of our commitment to quality and innovation, we have gained the trust of customers all over the world. To ensure that our customers receive the best possible service, we have continuously improved our procedures and designed our products to meet the highest standards of quality and safety.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='InWeSer_tabsDoBol '>
                    <img src={Double_bol_line} alt="" loading='lazy'/>
                </div>
            </div>
        </>
    );
}

export default InWeSer;