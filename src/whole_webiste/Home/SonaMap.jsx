import React from 'react';
import './Home.css';
import AOS from 'aos';
import { useEffect } from 'react';

function SonaMap() {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
            <div className='SonaMap' >
                <div
                data-aos="zoom-in-up" 
                data-aos-offset="50" 
                data-aos-delay="100" 
                data-aos-duration="1000"
                easing= "ease-in-out"
                once= "true" 
                mirror= "true"
                
                >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14904.76510343761!2d72.97711857950692!3d20.944832419815846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f20266659d41%3A0xefcec56c61ac53a!2sSONA%20EXTRUSION%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1729604099688!5m2!1sen!2sin"
                        
                        style={{ border: 0 ,width: '100%', height: '600px',padding:'100px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default SonaMap;
