import React from 'react';
import Slider from 'react-slick';
import './Colla.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


import Leftarrow from '../../../assets/arrow_Left.svg';
import Double_bol_line from '../../../assets/double_bol_line.svg';
import AllumPro1 from '../../../assets/AllumPro1.jpg';
import AllumPro2 from '../../../assets/AllumPro2.jpg';
import AllumPro3 from '../../../assets/AllumPro3.jpg';
import AllumPro4 from '../../../assets/AllumPro4.jpg';
import AllumPro5 from '../../../assets/AllumPro5.jpg';
import AllumPro6 from '../../../assets/AllumPro6.jpg';
import AllumPro7 from '../../../assets/AllumPro7.png';
import AllumPro8 from '../../../assets/AllumPro8.jpg';
import AllumPro9 from '../../../assets/AllumPro9.jpg';
import AllumPro10 from '../../../assets/AllumPro10.jpg';
import AllumPro11 from '../../../assets/AllumPro11.png';
import AllumPro12 from '../../../assets/AllumPro12.jpg';
import AllumPro13 from '../../../assets/AllumPro13.jpg';
import AllumPro14 from '../../../assets/AllumPro14.jpg';
import AOS from 'aos';
import { useEffect } from 'react';
function CollaSlider() {
    useEffect(() => {
        AOS.init({
            once: true, // Prevent animations from replaying
        });
    }, []);
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };
    const imagePaths = [
        { imgSrc: AllumPro1, title: 'Brushed Aluminium Bottles' },
        { imgSrc: AllumPro2, title: 'Ayurvedic Tubes' },
        { imgSrc: AllumPro3, title: 'Primary Pharma Packaging' },
        { imgSrc: AllumPro4, title: 'Adhesive Tubes' },
        { imgSrc: AllumPro5, title: 'Cyanoacrylate Tubes' },
        { imgSrc: AllumPro6, title: 'Ophthalmic Tubes' },
        { imgSrc: AllumPro7, title: 'Stationary Tubes' },
        { imgSrc: AllumPro8, title: 'Cosmetic Tubes' },
        { imgSrc: AllumPro9, title: 'Aluminium Open-End Containers' },
        { imgSrc: AllumPro10, title: 'Aluminium Flasks' },
        { imgSrc: AllumPro11, title: 'Aluminium Tablet Canisters' },
        { imgSrc: AllumPro12, title: 'Printed Bottles' },
        { imgSrc: AllumPro13, title: 'Shampoo Bottles' },
        { imgSrc: AllumPro14, title: 'Essential Oil And Perfume Bottles' },
    ];

    return (
        <div className="CollaSlider">
            <img src={Leftarrow} alt="" srcset="" className='LeftarwCollaSlider ' loading='lazy'data-aos="fade-right"/>
            <img src={Double_bol_line} alt="" srcset="" className='Double_bol_lineCollaSlider ' loading='lazy' data-aos="fade-down"/>

            <div className="container-xxl">
                <div className="CollaSliderTxt" data-aos="zoom-in-up">
                    <h1 className="text-center sans_bold mb-5">Specificities</h1>
                    <p className="text-center text-secondary sans_light mb-5">
                        Sona Extrusion has proficiency and competence in the Aluminium Packaging Industry spanning
                        over three decades of experience. Being an ISO 15378, ISO 9001 Certified & US FDA DMF Registered
                        Company, Sona Extrusion is continuously thriving to serve with convenient, safe, and
                        sustainable packaging solutions.
                    </p>
                </div>

                {/* Slider Body */}
                <div className="CollaSliderBody position-relative">
                    <div className="CollaBody">
                        <Slider {...settings}>
                            {imagePaths.map((image, index) => (
                                <div className="CollaSliderCard" key={index} data-aos="fade-up">

                                    <img src={image.imgSrc} alt={`Slide ${index + 1}`} className="sliderCollaimage" loading='lazy'/>
                                    <div className="CollaSliderTitle ">
                                        <p className='sans_bold text-dark my-3 '>{image.title}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="d-flex align-items-center custom-arow custom-nex position-absolute"
            onClick={onClick}
            aria-label="Next Slide"
        >
            <FaChevronRight />
        </div>
    );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arow custom-pre d-flex align-items-center position-absolute"
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <FaChevronLeft />
        </div>
    );
};

export default CollaSlider;
