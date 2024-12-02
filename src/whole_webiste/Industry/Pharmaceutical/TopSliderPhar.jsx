import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';


// 
import phar1 from '../../../assets/phar1.jpg';
import phar2 from '../../../assets/phar2.jpg';


// 
import Cons1 from '../../../assets/Cons1.jpg';
import Cons2 from '../../../assets/Cons2.jpg';
import Cons3 from '../../../assets/Cons3.jpg';
import Cons4 from '../../../assets/Cons4.jpg';

// 
import Nuts1 from '../../../assets/Nut1.jpg';
import Nuts2 from '../../../assets/Nut2.jpg';
import Nuts3 from '../../../assets/Nut3.jpg';

// 
import Idus1 from '../../../assets/Idus1.jpg';
import Idus2 from '../../../assets/Idus2.jpg';
import Idus3 from '../../../assets/Idus3.jpg';
import Idus4 from '../../../assets/Idus4.jpg';
import Idus5 from '../../../assets/Idus5.jpg';
import Idus6 from '../../../assets/Idus6.png';
import Idus7 from '../../../assets/Idus7.jpg';
import Idus8 from '../../../assets/Idus8.png';
import Idus9 from '../../../assets/Idus9.jpg';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './pharm.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from 'react';

function TopSliderPhar({ Type }) {
    useEffect(() => {
        AOS.init({
          
        });
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const slides = Type === "Cosm"
        ? [
            <img src={Cons1} alt="Cosm Slide 1" className="slider-image w-100" loading='lazy'/>,
            <img src={Cons2} alt="Cosm Slide 2" className="slider-image w-100" loading='lazy'/>,
            <img src={Cons3} alt="Cosm Slide 2" className="slider-image w-100" loading='lazy'/>,
            <img src={Cons4} alt="Cosm Slide 2" className="slider-image w-100" loading='lazy'/>
        ]
        : Type === "Nut" ? 
        [
            <img src={Nuts1} alt="Default Slide 2" className="slider-image w-100" loading='lazy'/>,
            <img src={Nuts2} alt="Default Slide 2" className="slider-image w-100" loading='lazy'/>,
            <img src={Nuts3} alt="Default Slide 2" className="slider-image w-100" loading='lazy'/>
        ] 
        : Type === "Indu" ?
        [
            <img src={Idus1} alt="Default Slide 1" className="slider-image w-100" loading='lazy'/>,
            <img src={Idus2} alt="Default Slide 1" className="slider-image w-100" loading='lazy'/>,
            <img src={Idus3} alt="Default Slide 1" className="slider-image w-100" loading='lazy'/>,
            <img src={Idus4} alt="Default Slide 1" className="slider-image w-100" loading='lazy'/>,
            <img src={Idus5} alt="Default Slide 1" className="slider-image w-100" loading='lazy'/>,
            <img src={Idus6} alt="Default Slide 1" className="slider-image w-100" loading='lazy'/>,
            <img src={Idus7} alt="Default Slide 1" className="slider-image w-100" loading='lazy'/>,
            <img src={Idus8} alt="Default Slide 1" className="slider-image w-100" loading='lazy'/>,
            <img src={Idus9} alt="Default Slide 1" className="slider-image w-100" loading='lazy'/>
        ] 
        : 
        [
             <img src={phar1} alt="Default Slide 2" className="slider-image w-100" loading='lazy'/>,
            <img src={phar2} alt="Default Slide 1" className="slider-image w-100" loading='lazy'/>
        ] ;

    return (
        <div className="container">
            <div className="d-flex justify-content-center" 
             data-aos="zoom-in"
             data-aos-offset="300"
            >
                <div className="TopSliderPhar"
                >
                    <Slider {...settings}>
                        {slides.map((slide, index) => (
                            <div className="PharmTxtcard" key={index}>
                                {slide}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

// Prop validation
TopSliderPhar.propTypes = {
    Type: PropTypes.string,
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
    <div
        className="d-flex align-items-center custom-arrow custom-next"
        onClick={onClick}
    >
        <FaChevronRight />
    </div>
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
    <div
        className="custom-arrow custom-prev d-flex align-items-center"
        onClick={onClick}
    >
        <FaChevronLeft />
    </div>
);

export default TopSliderPhar;
