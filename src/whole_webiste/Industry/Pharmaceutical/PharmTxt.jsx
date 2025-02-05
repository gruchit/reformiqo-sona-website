import React from 'react'


import Home2 from '../../../assets/Home2.svg';
import Home4 from '../../../assets/Home4.svg';

// 
import Indu1S from '../../../assets/indu1S.jpg';
import Indu2S from '../../../assets/Indu2S.png';
import Indu3S from '../../../assets/Indu3S.jpg';
import Indu4S from '../../../assets/Indu4S.png';
import Indu5S from '../../../assets/Indu5S.jpg';
import Indu6S from '../../../assets/Indu6S.jpg';
import Indu7S from '../../../assets/Indu7S.jpg';
import Indu8S from '../../../assets/Indu8S.jpg';
import Indu9S from '../../../assets/Indu9S.jpg';


// 
import Nut1S from '../../../assets/Nut1S.jpg';
import Nut2S from '../../../assets/Nut2S.jpg';
import Nut3S from '../../../assets/Nut3S.jpg';

// 
import Cosm1S from '../../../assets/CosmS1.jpg';
import Cosm2S from '../../../assets/CosmS2.jpg';
import Cosm3S from '../../../assets/CosmS3.jpg';
import Cosm4S from '../../../assets/CosmS4.jpg';
import Cosm5S from '../../../assets/CosmS5.jpg';
import Cosm6S from '../../../assets/CosmS6.jpg';
import Cosm7S from '../../../assets/CosmS7.jpg';

// 
import ParmS1 from '../../../assets/ParmS1.jpg';
import ParmS2 from '../../../assets/ParmS2.jpg';
import ParmS3 from '../../../assets/ParmS3.jpg';
import ParmS4 from '../../../assets/ParmS4.jpg';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from 'react-slick';
import './pharm.css'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function PharmTxt({ Type }) {
    useEffect(() => {
        AOS.init({

           
        });
    }, []);
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
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const SmallSlider = Type === "Cosm"
        ? [
            <img src={Cosm1S} alt="Cosm Slide 1" className="sliderimage" loading='lazy' />,
            <img src={Cosm2S} alt="Cosm Slide 2" className="slider-image" loading='lazy' />,
            <img src={Cosm3S} alt="Cosm Slide 2" className="slider-image" loading='lazy' />,
            <img src={Cosm4S} alt="Cosm Slide 2" className="slider-image" loading='lazy' />,
            <img src={Cosm5S} alt="Cosm Slide 2" className="slider-image" loading='lazy' />,
            <img src={Cosm6S} alt="Cosm Slide 2" className="slider-image" loading='lazy' />,
            <img src={Cosm7S} alt="Cosm Slide 2" className="slider-image" loading='lazy' />
        ]
        : Type === "Nut" ?
            [
                <img src={Nut1S} alt="Default Slide 1" className="slider-image" loading='lazy' />,
                <img src={Nut2S} alt="Default Slide 1" className="slider-image" loading='lazy' />,
                <img src={Nut3S} alt="Default Slide 1" className="slider-image" loading='lazy' />
            ]
            : Type === "Indu" ?
                [
                    <img src={Indu1S} alt="Default Slide 1" className="slider-image" loading='lazy' />,
                    <img src={Indu2S} alt="Default Slide 1" className="slider-image" loading='lazy' />,
                    <img src={Indu3S} alt="Default Slide 1" className="slider-image" loading='lazy' />,
                    <img src={Indu4S} alt="Default Slide 1" className="slider-image" loading='lazy' />,
                    <img src={Indu5S} alt="Default Slide 1" className="slider-image" loading='lazy' />,
                    <img src={Indu6S} alt="Default Slide 1" className="slider-image" loading='lazy' />,
                    <img src={Indu7S} alt="Default Slide 1" className="slider-image" loading='lazy' />,
                    <img src={Indu8S} alt="Default Slide 1" className="slider-image" loading='lazy' />,
                    <img src={Indu9S} alt="Default Slide 1" className="slider-image" loading='lazy' />
                ]
                :
                [
                    <img src={ParmS1} alt="Default Slide 2" className="slider-image" loading='lazy' />,
                    <img src={ParmS2} alt="Default Slide 2" className="slider-image" loading='lazy' />,
                    <img src={ParmS3} alt="Default Slide 2" className="slider-image" loading='lazy' />,
                    <img src={ParmS4} alt="Default Slide 2" className="slider-image" loading='lazy' />,
                ];
                
                
    return (
        <>
            <div className='PharmTxt'>
                <div className='container'>
                    <div className='pharmaceutical text-center'>
                        <div>
                            {Type === "Cosm"
                                ?
                                <>
                                    <div data-aos="zoom-in" data-aos-offset="300" data-aos-duration="500">
                                        <h1 className=' sans_bold mb-5'>Cosmetic & Personal Care</h1>
                                        <p className='sans_light text-secondary mb-5'>We design, manufacture, and offer highly efficient, reliable, and cost-effective solutions to
                                            pharmaceutical industries that satisfy various needs of the industry.  We can develop aluminum packaging material from the start as per material requirement that can be filled inside aluminum tube. Our advanced extrusion technology, along with our team of experts,
                                            ensure that we are well-positioned to serve our customers with the highest
                                            quality products and services.
                                        </p>
                                        </div>


                                    </>
                                    :
                                    Type === "Nut"
                                    ?
                                    <>
                                        <div data-aos="zoom-in" data-aos-offset="300" data-aos-duration="500">
                                            <h1 className=' sans_bold mb-5'>Nutraceutical</h1>
                                            <p className='sans_light text-secondary mb-5'>The pharmaceutical and nutraceutical industries are flourishing. Increased consumer focus on health and wellbeing is driving flexible packaging’s rapid expansion and strong demand for a quicker, more noticeable brand presence. Sona Extrusion provides flexible packaging solutions that strengthen your brand and increase operational effectiveness to help you market your goods more quickly. With our comprehensive variety of flexible packaging options, we have delivered effective brand packaging for functional or medicinal food and beverages.
                                            </p>
                                        </div>
                                    </>
                                    :
                                    Type === "Indu"
                                    ?
                                    <>
                                        <div data-aos="zoom-in" data-aos-offset="300" data-aos-duration="500">
                                            <h1 className=' sans_bold mb-5'>Industrial & Agro-Chemical</h1>
                                            <p className='sans_light text-secondary mb-3'>We are the industry’s top producers and distributors of aluminum packaging solutions or products. Because of our commitment to quality and innovation, we have gained the trust of customers all over the world.</p>
                                            <p className='sans_light text-secondary mb-5'> To ensure that our customers receive the best possible service, we have continuously improved our procedures and designed our products to meet the highest standards of quality and safety.
                                            </p>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div data-aos="zoom-in" data-aos-offset="300" data-aos-duration="500">
                                            <h1 className=' sans_bold mb-5'>Pharmaceutical</h1>
                                            <p className='sans_light text-secondary mb-5'>We design, manufacture, and offer highly efficient, reliable, and cost-effective solutions to
                                                pharmaceutical industries that satisfy various needs of the industry.  We can develop aluminum packaging material from the start as per material requirement that can be filled inside aluminum tube. Our advanced extrusion technology, along with our team of experts,
                                                ensure that we are well-positioned to serve our customers with the highest
                                                quality products and services.
                                            </p>
                                        </div>
                                    </>
                        }
                                </div>
                            <div className='pharmacSlider position-relative' >
                                <div className="PharmTxtSlider" data-aos="fade-up" data-aos-offset="300" data-aos-duration="500">
                                    <Slider {...settings}>
                                        {SmallSlider.map((slide, index) => (
                                            <div className="PharmTxtcard" key={index}>
                                                {slide}
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
}



const NextArrow = (props) => {
    const {onClick} = props;
            return (
            <div className="d-flex align-items-center custom-arow custom-nex position-absolute" onClick={onClick}>
                <FaChevronRight />
            </div>
            );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
    const {onClick} = props;
            return (
            <div className="custom-arow custom-pre d-flex align-items-center position-absolute" onClick={onClick}>
                <FaChevronLeft />
            </div>
            );
};
            export default PharmTxt
