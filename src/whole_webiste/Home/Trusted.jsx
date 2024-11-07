import React from 'react';
import Slider from "react-slick";
import Single_BlackBol_Line from '../../assets/single_BlackBol_Line.svg';
import Trust1 from '../../assets/Trust1.png';
import Trust2 from '../../assets/Trust2.png';
import Trust3 from '../../assets/Trust3.png';
import Trust4 from '../../assets/Trust4.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import AOS from 'aos';
import { useEffect } from 'react';

function Trusted() {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    infinite: true,   
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    speed: 5000,      
    cssEase: "linear", 
    pauseOnHover: false, 
  };

  return (
    <div className='Trusted'>
      <div className='Trusted_text'
      data-aos="zoom-in-up" 
      data-aos-offset="50" 
      data-aos-delay="100" 
      data-aos-duration="1000"
      easing= "ease-in-out"
      once= "true" 
      mirror= "true"
      >
        <div className='d-flex justify-content-center'>
          <img src={Single_BlackBol_Line} alt="Separator Line" />
        </div>
        <h2 className='text-center'>Our Trusted Partners</h2>
      </div>

      <div className='slider-container'
      data-aos="zoom-in-up" 
      data-aos-offset="0" 
      data-aos-delay="0" 
      data-aos-duration="3000"
      easing= "ease-in-out"
      once= "true" 
      mirror= "true"
      
      >
        <Slider {...settings}>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust1} alt="Partner 1" />
          </div>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust2} alt="Partner 2" />
          </div>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust3} alt="Partner 3" />
          </div>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust4} alt="Partner 4" />
          </div>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust1} alt="Partner 5" />
          </div>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust2} alt="Partner 6" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Trusted;
