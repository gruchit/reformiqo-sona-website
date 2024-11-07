import React, { useEffect, useState } from 'react';
import Logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Our_Store from "../../../assets/Our_Store.png";
import Advantages from "../../../assets/advantages.png";
import manufacturing from "../../../assets/manufacturing.png";
import Envir from "../../../assets/Envir.png";
import Brochures from "../../../assets/brochures.png";
import Home1 from '../../../assets/Home_main.svg';
import Home2 from '../../../assets/Home2.svg';
import Home3 from '../../../assets/Home3.svg';
import Home4 from '../../../assets/Home4.svg';
import Home5 from '../../../assets/Tablet_Home.jpg';
import Home6 from '../../../assets/Indus.jpg';
import Home7 from '../../../assets/FlaskHome.jpg';
import Cosmetic from "../../../assets/cosmetic.png";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import Button_Arrow from '../../../assets/button_Arrow.svg';
import Slider from 'react-slick';
import './header.css';
import AOS from 'aos';
import './header.css';

function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
            setScrolling(true);
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
                setScrolling(false);
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
    };
    const toggleSubmenu = (submenu) => {
        setOpenSubmenu(prevSubmenu => (prevSubmenu === submenu ? null : submenu));
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "scroll";
        }
    };
    useEffect(() => {
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);
    return (
        <>
            <div className='HeaderSmall d-xl-none d-flex justify-content-between align-items-center w-100 px-md-5 px-sm-3'>
                <div className='HeaderSmall_Logo'>
                    <a className="navbar-brand" href="/">
                        <img className="w-100" src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className='header-items'>
                    <ul className='d-flex list-unstyled m-0'>
                        <li className='mx-3'>
                            <a href="#" onClick={toggleMenu} className='text-decoration-none text-white'>
                                <FiMenu className='fs-3 sonaColor' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {menuOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button d-flex align-items-center" onClick={toggleMenu}><IoClose className='fs-2'/></button>
                        <ul className='flex-column list-unstyled m-0'>
                            <li>
                                <Link to="/" className='text-decoration-none text-dark'>Home</Link>
                            </li>
                            <li>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/about" className='text-decoration-none text-dark'>About Us</Link>
                                    <IoIosArrowDown
                                        onClick={() => toggleSubmenu('aboutUs')}
                                        className={openSubmenu === 'aboutUs' ? 'arrow-rotate' : 'Back-Rorate'}
                                    />
                                </div>

                                {openSubmenu === 'aboutUs' && (
                                    <div className='submenusAbout mt-2'>
                                        <ul className='list-unstyled'>
                                            <li className='d-flex align-items-center'>
                                                <img src={Our_Store} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/app-development" className='text-decoration-none text-dark'>Our Story</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Advantages} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/game-development" className='text-decoration-none text-dark'>Advantages Sona</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={manufacturing} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/web-development" className='text-decoration-none text-dark'>Manufacturing Unit</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Envir} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/hire-offshore-developers" className='text-decoration-none text-dark'>Enviro-Friendly</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Brochures} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/hire-offshore-developers" className='text-decoration-none text-dark'>Brochure</Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/industry" className='text-decoration-none text-dark'>Industry</Link>
                                    <IoIosArrowDown
                                        onClick={() => toggleSubmenu('industry')}
                                        className={openSubmenu === 'industry' ? 'arrow-rotate' : 'Back-Rorate'}
                                    />
                                </div>

                                {openSubmenu === 'industry' && (
                                    <div className='submenusAbout mt-2'>
                                        <ul className='list-unstyled'>
                                            <li className='d-flex align-items-center'>
                                                <img src={Our_Store} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/app-development" className='text-decoration-none text-dark'>Pharmaceutical</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Advantages} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/game-development" className='text-decoration-none text-dark'>Cosmetic & Personal Care</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={manufacturing} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/web-development" className='text-decoration-none text-dark'>Nutraceutical</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Brochures} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/hire-offshore-developers" className='text-decoration-none text-dark'>Industrial & Agro-Chemical</Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li >
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/aluminum-products" className='text-decoration-none text-dark'>Aluminum Products</Link>
                                    <IoIosArrowDown
                                        onClick={() => toggleSubmenu('AluminumPro')}
                                        className={openSubmenu === 'AluminumPro' ? 'arrow-rotate' : 'Back-Rorate'}
                                    />
                                </div>
                                {openSubmenu === 'AluminumPro' && (
                                    <div className='submenusAbout mt-2'>
                                        <ul className='list-unstyled'>
                                            <li className='d-flex align-items-center'>
                                                <img src={Our_Store} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/app-development" className='text-decoration-none text-dark'>Pharmaceutical</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Advantages} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/game-development" className='text-decoration-none text-dark'>Cosmetic & Personal Care</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={manufacturing} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/web-development" className='text-decoration-none text-dark'>Nutraceutical</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Brochures} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/hire-offshore-developers" className='text-decoration-none text-dark'>Industrial & Agro-Chemical</Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li >
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/resources" className='text-decoration-none text-dark'>Resources</Link>
                                    <IoIosArrowDown
                                        onClick={() => toggleSubmenu('Resources')}
                                        className={openSubmenu === 'Resources' ? 'arrow-rotate' : 'Back-Rorate'}
                                    />
                                </div>
                                {openSubmenu === 'Resources' && (
                                    <div className='submenusAbout mt-2'>
                                        <ul className='list-unstyled'>
                                            <li className='d-flex align-items-center'>
                                                <img src={Our_Store} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/app-development" className='text-decoration-none text-dark'>Pharmaceutical</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Advantages} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/game-development" className='text-decoration-none text-dark'>Cosmetic & Personal Care</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={manufacturing} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/web-development" className='text-decoration-none text-dark'>Nutraceutical</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Brochures} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/hire-offshore-developers" className='text-decoration-none text-dark'>Industrial & Agro-Chemical</Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li >
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/laminated-tubs" className='text-decoration-none text-dark'>Laminated Tubs</Link>

                                    <IoIosArrowDown
                                        onClick={() => toggleSubmenu('LaminatedTubs')}
                                        className={openSubmenu === 'LaminatedTubs' ? 'arrow-rotate' : 'Back-Rorate'}
                                    />
                                </div>
                                {openSubmenu === 'LaminatedTubs' && (
                                    <div className='submenusAbout mt-2'>
                                        <ul className='list-unstyled'>
                                            <li className='d-flex align-items-center'>
                                                <img src={Our_Store} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/app-development" className='text-decoration-none text-dark'>Pharmaceutical</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Advantages} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/game-development" className='text-decoration-none text-dark'>Cosmetic & Personal Care</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={manufacturing} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/web-development" className='text-decoration-none text-dark'>Nutraceutical</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-items-center'>
                                                <img src={Brochures} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/hire-offshore-developers" className='text-decoration-none text-dark'>Industrial & Agro-Chemical</Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            <div className="header_main ">
                <div className="header d-xl-block">
                    <nav className="navbar navbar-expand"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-delay="1000"
                        data-aos-duration="3000"
                    >
                        <a className="navbar-brand" href="/">
                            <img className="w-100" src={Logo} alt="Logo" />
                        </a>
                        <div className="navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="text-decoration-none text-dark">
                                        <a className="nav-link hebo px-3 text-dark" aria-current="page">
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item hover_serv">
                                    {/* <Link to="/About" className="text-decoration-none text-dark"> */}
                                    <a className="nav-link active hebo text-dark px-3" aria-current="page">
                                        About Us
                                    </a>
                                    {/* </Link> */}

                                    <div className='set_ul'>
                                        <ul className='list-unstyled'>
                                            <li className='d-flex align-item-center'>
                                                <img src={Our_Store} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/app-development" className='text-decoration-none text-dark'>Our Story</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={Advantages} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/game-development" className='text-decoration-none text-dark'>Advantages Sona</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={manufacturing} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/web-development" className='text-decoration-none text-dark'>Manufacturing Unit</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={Envir} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/hire-offshore-developers" className='text-decoration-none text-dark'>Enviro-Friendly</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={Brochures} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Services/hire-offshore-developers" className='text-decoration-none text-dark'>Brochure</Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Industry" className="text-decoration-none text-dark">
                                        <a className="nav-link active hebo text-dark px-3" aria-current="page">
                                            Industry
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Aluminum-Products" className="text-decoration-none text-dark">
                                        <a className="nav-link active hebo text-dark px-3" aria-current="page">
                                            Aluminum Products
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Resources/Careers" className="text-decoration-none text-dark">
                                        <a className="nav-link active hebo text-dark px-3" aria-current="page">
                                            Resources
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Laminated-Tubs" className="text-decoration-none text-dark">
                                        <a className="nav-link active hebo text-dark px-3" aria-current="page">
                                            Laminated Tubs
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-end">
                            <a href="#" className="reach-us-button gap-4 text-black">
                                Reach Us <span><GoArrowUpRight className="button-arrow text-white " /></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="home-photo" style={{ borderRadius: scrolling ? '0' : '35px' }}>
                    <Slider {...settings}>
                        <div>
                            <img src={Home1} alt="" data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000" />
                        </div>
                        <div>
                            <img src={Home2} alt="" data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000" />
                        </div>
                        <div>
                            <img src={Home6} alt="" data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000" />
                        </div>
                        <div>
                            <img src={Home4} alt="" data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000" />
                        </div>
                        <div>
                            <img src={Home5} alt="" data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000" />
                        </div>
                        <div>
                            <img src={Home7} alt="" data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Header;
