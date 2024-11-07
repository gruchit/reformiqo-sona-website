import React from 'react';
import './Home.css';
import Double_bol_line from '../../assets/double_bol_line.svg';
import Cret from '../../assets/Certi.svg'
import Arrow_Left from '../../assets/arrow_Left.svg'
import AOS from 'aos';
import { useEffect } from 'react';


function MarketLe() {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="markerLe">
            <img src={Arrow_Left} alt="" className='markerLe_img' 
             data-aos="fade-right" 
             data-aos-offset="0" 
             data-aos-delay="1000" 
             data-aos-duration="3000"
             easing= "ease-in-out"
             once= "true" 
             mirror= "true"
            />
            <div className="row no-gutters pt-5">
                <div className="col-6 d-flex justify-content-center">
                    <div className='py-5'
                     data-aos="zoom-in-up" 
                     data-aos-offset="50" 
                     data-aos-delay="1000" 
                     data-aos-duration="1000"
                     easing= "ease-in-out"
                     once= "true" 
                     mirror= "true"
                    >
                        <h2>Market Leaders</h2>
                        <p className='py-3'>
                            Sona Extrusion Pvt. Ltd. is a leading manufacturer of aluminium  <br /> collapsible
                            tubes, containers, and  aluminium bottles/flasks in India,<br /> duly ISO 15378:2017
                            (GMP) Certified – SGS (Primary Packaging <br /> Materials for Pharmaceutical Products)
                            & ISO 9001:2015 Certified – <br /> TUV & US DMF Registered Company. Sona Extrusions has<br />
                            one of the highest production capacities in the country.
                        </p>
                    </div>
                </div>
                <div className="col-6 flex-column ">
                    <div className='markerLe_cards flex-column mx-auto'
                    data-aos="fade-left" 
                    data-aos-offset="0" 
                    data-aos-delay="1000" 
                    data-aos-duration="3000"
                    easing= "ease-in-out"
                    once= "true" 
                    mirror= "true"
                    
                    >
                        <img src={Cret} alt="" srcset="" />
                        <h4>500 Mn Tubes</h4>
                        <p>Investing in cutting-edge technology, equipment, and infrastructure while ensuring the highest level of safety and quality standards, effective processes and skilled personnels, we are in a position to offer our customers state-of-the-art facilities and high-quality products.</p>
                    </div>
                    <img src={Double_bol_line} alt="" srcset="" className='doblebol_markerLe_cards' 
                    data-aos="fade-up" 
                    data-aos-offset="0" 
                    data-aos-delay="1000" 
                    data-aos-duration="3000"
                    easing= "ease-in-out"
                    once= "true" 
                    mirror= "true"
                    
                    />
                </div>
            </div>
        </div>
    );
}

export default MarketLe;
