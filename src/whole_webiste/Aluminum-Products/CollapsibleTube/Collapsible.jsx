import React from 'react';
import './Colla.css';
import Colla1 from '../../../assets/Colla1.png';
import Colla2 from '../../../assets/Colla2.png';
import Colla3 from '../../../assets/Colla3.png';
import Colla4 from '../../../assets/Colla4.png';
import Colla5 from '../../../assets/Colla5.png';
import Colla6 from '../../../assets/Colla6.png';

import Flask1 from '../../../assets/Flask1.jpg';
import Flask2 from '../../../assets/Flask2.jpg';
import Flask3 from '../../../assets/Flask3.jpg';
import Flask4 from '../../../assets/Flask4.jpg';
import Flask5 from '../../../assets/Flask5.jpg';
import Flask6 from '../../../assets/Flask6.jpg';



import Table1 from '../../../assets/Table1.png';
import Table2 from '../../../assets/Table2.png';
import Table3 from '../../../assets/Table3.png';
import AOS from 'aos';
import { useEffect } from 'react';

function Collapsible({ Type }) {
    useEffect(() => {
        AOS.init({
            once: true, // Prevent animations from replaying
        });
    }, []);
    let cardData

    if (Type === "Colla") {
        cardData = [
            { imgSrc: Colla1, title: 'Ayurvedic Tubes' },
            { imgSrc: Colla2, title: 'Adhesive' },
            { imgSrc: Colla3, title: 'Ohthalmic' },
            { imgSrc: Colla4, title: 'Pharmaceutical' },
            { imgSrc: Colla5, title: 'Stationary Tube' },
            { imgSrc: Colla6, title: 'Cyanoacrylate Tubes' }
        ];
    } else if (Type === "Flask") {
        cardData = [
            { imgSrc: Flask1, title: 'Aluminium Tablet Canisters' },
            { imgSrc: Flask2, title: 'Tablet Canisters' },
            { imgSrc: Flask3, title: 'Shampoo Bottles' },
            { imgSrc: Flask4, title: 'Essential oil & Perfume Bottles' },
            { imgSrc: Flask5, title: 'Brushed Aluminium Bottles' },
            { imgSrc: Flask6, title: 'Printed Aluminium Bottles' }
        ];
    } else if (Type === "Table") {
        cardData = [
            { imgSrc: Table1, title: 'Aluminium Tablet Canisters' },
            { imgSrc: Table2, title: 'Tablet Canisters' },
            { imgSrc: Table3, title: 'Tablet Canisters' }
        ];
    } else {
        "Sorry"
    }

    return (
        <div className='Collapsible'>
            <div className='container-xxl'>
                <div className='CollapsibleTxt' data-aos="zoom-in-up" >
                    {Type === "Colla" ?
                        <>
                            <h1 className='text-center sans_bold mb-5'>
                                Sona’s Collapsible Tubes Next Level Convenience, An Edge Over Others.
                            </h1>
                            <p className='text-center sans_light text-secondary'>
                                We, have revolutionized the packaging industry by offering state-of-the-art easy to use dispensing
                                products for a wide range of products like ointments and creams. With more than three decades of
                                experience, we provide cutting-edge solutions to satisfy changing consumer demands. Sona Extrusions
                                collapsible tubes offer an unbeatable combination of ease of use, affordability, and durability for
                                various industry across many verticals.
                            </p>
                        </>

                        : Type === "Flask" ?
                            <>
                                <h1 className='text-center sans_bold mb-5'>
                                    Preserving Precision: Crafting Quality
                                    Flasks and Bottles.
                                </h1>
                                <p className='text-center sans_light text-secondary'>
                                    We operate under the fundamental principle of precisely providing our clients with high-quality flasks and bottles. For us, crafting emphasises our meticulous process and attention to detail. Modern manufacturing techniques are something we continuously work to offer to our clients, ensuring that each product is made with accuracy and consistency. Every product manufactured by us undergoes a rigorous quality inspection process which is conducted in-house, to ensure that the products are created with utmost finesse.
                                </p>
                            </>

                            : Type === "Table" ?
                            <>
                            <h1 className='text-center sans_bold mb-5'>
                            Tablet transport made easy: Our 
                            canisters keep them safe.
                            </h1>
                            <p className='text-center sans_light text-secondary'>
                            With power packed packaging solution for the pharmaceutical industry, we are the country’s leading manufacturer of tablet canisters. With dedication to innovation, we create canisters that meet the highest standards for quality, safety, and dependability using high-tech technology. Our tablet canisters are created to safeguard tablets from moisture, light, and other environmental elements and are made of premium materials. Sona Extrusion is a trusted partner for pharmaceutical companies not only nationally but also internationally thanks to our manufacturing expertise and commitment to client satisfaction.
                            </p>
                        </>

                                :
                                <> Sorry </>
                    }


                </div>
                <div className='CollapsibleBody'>
                    <div className='row d-flex justify-content-center'>
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className='col-xl-4 col-lg-4 col-md-6 mt-5 d-flex justify-content-center'
                            >
                                <div className='CollapsibleCard' data-aos="zoom-in">
                                    <img src={card.imgSrc} alt={card.title} loading='lazy'/>
                                    <div className='CollaCardTitale'>
                                        <p className='sans_bold'>{card.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collapsible;
