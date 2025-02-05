import React from 'react'
import './Home.css'
import '../../assets/fonts/fonts.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function Focus({ type }) {
    useEffect(() => {
        AOS.init({
            once: true, // Prevent animations from replaying
        });
    }, []);
    return (
        <>
            <div style={{ overflow: 'hidden' }}>
                <div
                    className="Focus_on"
                    data-aos="zoom-out-up"
                    data-aos-duration="600"
                    data-aos-offset="200"
                // data-aos-delay="500"
                >
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="font_oswald text-white text-uppercase text-center">

                            {type === "Future" && "The Future Of Aluminum Collapsible Tubes"}
                            {type === "BrandOne" && (
                                <>
                                    A Glimpse into Sona Extrusion’s <br /> State-of-the-Art Manufacturing
                                </>
                            )}
                            {type === "BrandTwo" && "Why Leading Brands Choose Sona Extrusion"}
                            {type === "BenifitColla" && "5 Benefits of Using Collapsible Tubes for Pharma Products"}
                            {type === "BlogPharm" && "Choosing the Right Pharmaceutical Packaging Partner"}
                            {type === "Define" && "Advantages and Applications of Aluminum Collapsible Tubes"}
                            {type === "AssistantExe" && "Assistant Ipqc Executive"}
                            {type === "ProductionSup" && "Production Supervisor"}
                            {type === "MachineOp" && "Machine Operator"}
                            {type === "ReachUs" && "Reach Us"}
                            {type === "Laminated_Tubs" && "Laminated Tubs"}
                            {type === "Careers" && "Careers"}
                            {type === "BlogMedia" && "Blog & Media"}
                            {type === "Gallery" && "Gallery"}
                            {type === "TabletCanisters" && "Tablet Canisters"}
                            {type === "Flask_Bottles" && "Flasks & Bottles"}
                            {type === "CollapsibleTube" && "Collapsible Tubes"}
                            {type === "Cosm_Per" && "Cosmetic & Personal Care"}
                            {type === "Indu_Ago" && "Industrial & Agro-Chemical"}
                            {type === "Nutrac" && "Nutraceutical"}
                            {type === "pharmaceutical" && "Pharmaceutical"}
                            {type === "Brochure" && "Brochure"}
                            {type === "EnviroFriendly" && "Enviro friendly"}
                            {type === "ManufacturingUnit" && "Manufacturing Unit"}
                            {type === "AdvantagesSona" && "Advantages Sona"}
                            {type === "Home" && "Focus on Innovation"}
                            {type === "Our_Store" && "Our Story"}
                            {type === "Industry" && "Industry"}
                            {type === "Aluminium Products" && "Aluminum Products"}
                            {type === "" && "No word found"}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Focus
