import React, { useEffect } from 'react'; 
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
import 'aos/dist/aos.css';

function Trusted() {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "60px",
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='Trusted'>
      <div 
        className='Trusted_text'
        data-aos="zoom-in-up" 
        data-aos-offset="200" 
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        // data-aos-once="true" 
        // data-aos-mirror="true"
      >
        <div className='d-flex justify-content-center'>
          <img src={Single_BlackBol_Line} alt="Separator Line" loading='lazy'/>
        </div>
        <h1 className='text-center'>Our Trusted Partners</h1>
      </div>

      <div 
        className='slider-container'
        data-aos="zoom-in-up" 
        data-aos-offset="200" 
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
      >
        <Slider {...settings}>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust1} alt="Partner 1" className="partner-logo" loading='lazy'/>
          </div>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust2} alt="Partner 2" className="partner-logo" loading='lazy'/>
          </div>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust3} alt="Partner 3" className="partner-logo" loading='lazy'/>
          </div>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust4} alt="Partner 4" className="partner-logo" loading='lazy'/>
          </div>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust1} alt="Partner 5" className="partner-logo" loading='lazy'/>
          </div>
          <div className='slide-item d-flex justify-content-center'>
            <img src={Trust2} alt="Partner 6" className="partner-logo" loading='lazy'/>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Trusted;
