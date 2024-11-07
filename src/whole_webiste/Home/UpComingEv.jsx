import React from 'react'
import Single_BlackBol_Line from '../../assets/single_BlackBol_Line.svg'
import Upcoming_Event from '../../assets/Upcomin_Event4.jpg'
import Upcoming_Even from '../../assets/UPcomin_event3.png'
import Upcoming_Eve from '../../assets/Upcoming_Event4.jpg'
import AOS from 'aos';
import { useEffect } from 'react';

import './Home.css'

function UpComingEv() {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <>
            <div className='UpcomingEv'>
                <div className='UpcomingEv_text flex-column '
                data-aos="zoom-in-up" 
                data-aos-offset="50" 
                data-aos-delay="1000" 
                data-aos-duration="1000"
                easing= "ease-in-out"
                once= "true" 
                mirror= "true"
                >
                    <div className='d-flex justify-content-center '>
                        <img src={Single_BlackBol_Line} alt="" srcset="" className='' />
                    </div>
                    <h2 className='text-center'>Upcoming Events</h2>
                </div>
                <div className='row' 
                data-aos="zoom-in-up" 
                data-aos-offset="0" 
                data-aos-delay="1000" 
                data-aos-duration="3000"
                easing= "ease-in-out"
                once= "true" 
                mirror= "true"
                
                >
                    <div className='col-4 p-0 d-flex justify-content-center'>
                    <div className='date_Upcomin flex-column text-white '>
                            <p className='p-0 m-0 sans_light'>26-28</p>
                            <h4 className='p-0 m-0 sans_light'>Dec</h4>
                        </div>
                        <div className='UpcomingEv_box  flex-column'>
                            <img src={Upcoming_Event} alt="" />
                            <h4 className='text-center my-auto '>CPHI PMEC New Delhi </h4>
                        </div>
                    </div>
                    <div className='col-4 p-0 d-flex justify-content-center'>
                    <div className='date_Upcomin flex-column text-white'>
                            <p className='p-0 m-0 sans_light'>26-28</p>
                            <h4 className='p-0 m-0 sans_light'>Dec</h4>
                        </div>
                        <div className='UpcomingEv_box  flex-column'>
                            <img src={Upcoming_Even} alt="" />
                            <h4 className='text-center my-auto '>CPHI PMEC New Delhi </h4>
                        </div>
                    </div>
                    <div className='col-4 p-0 d-flex justify-content-center'>
                        <div className='date_Upcomin flex-column text-white'>
                            <p className='p-0 m-0 sans_light'>26-28</p>
                            <h4 className='p-0 m-0 sans_light'>Dec</h4>
                        </div>
                        <div className='UpcomingEv_box  flex-column'>
                            <img src={Upcoming_Eve} alt="" />
                            <h4 className='text-center my-auto '>CPHI PMEC New Delhi </h4>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default UpComingEv
