import React from 'react'
import './home.css'
import '../../assets/fonts/fonts.css'
import AOS from 'aos';
import { useEffect } from 'react';

function Focus({type}) {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
            <div className='container-fluid p-0 m-0'>
                <div className='Focus_on'
                    data-aos="fade-up" 
                    data-aos-offset="100" 
                    data-aos-delay="300" 
                    data-aos-duration="3000"
                >
                    <div className='d-flex align-items-cente justify-content-center'>
                    <p className='font_oswald text-uppercase text-center'
                            data-aos="zoom-out" 
                            data-aos-offset="10" 
                            data-aos-delay="1000" 
                            data-aos-duration="3000">
                        {type == "Home" && "Focus on Innovation" }
                        {type == "Our_Store" && "Our Store" }
                        {type == "Industry" && "Industry" }
                        {type == "Aluminium Products" && "Aluminium Products" }
                        {type == "" && "No word found" }
                        
                        </p>
                        
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Focus
