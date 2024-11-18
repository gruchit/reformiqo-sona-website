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
import { useLocation } from 'react-router-dom';



function Header() {
    const location = useLocation();
    // console.log(location);

    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);


    useEffect(() => {
        const handleScroll = () => {
            setScrolling(true);
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
                setScrolling(false);
            }, 1000);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
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
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            toggleMenu();
        }
    };
    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [menuOpen]);

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
                <div className="modal-overlay d-flex justify-content-center" >
                    <div className="modal-content flex-column" onClick={(e) => e.stopPropagation()} >
                        <ul className='flex-column list-unstyled m-0'>
                            <li className='d-flex justify-content-between align-items-center' onClick={() => toggleSubmenu('Home')}>
                                <Link to="/" className={`text-decoration-none textBlack ${(location.pathname === '' || location.pathname === '/' ) ? 'active' : ''}`}>Home</Link>
                                <button className="close-button d-flex align-items-end p-0 m-0" onClick={toggleMenu}><IoClose className=' sonaColor' /></button>
                            </li>
                            <li onClick={() => toggleSubmenu('aboutUs')}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="" className={` text-decoration-none textBlack ${(location.pathname === '/About/Our-Store/' || location.pathname === '/About/Advatages-Sona/' || location.pathname === '/About/Manufacturing-Unit/' || location.pathname === '/About/Enviro-Friendly/' || location.pathname === '/About/Brochures/') ? 'active' : ''}`}>About Us</Link>
                                    <IoIosArrowDown
                                        className={`arwBck ${openSubmenu === 'aboutUs' ? '  arrow-rotate' : ' Back-Rorate'}`}
                                    />
                                </div>

                                <div className={`submenusAbout mt-2 ${openSubmenu === 'aboutUs' ? 'open' : ''}`}>
                                    <ul className='list-unstyled'>
                                        <li className='d-flex align-items-center'>
                                            <img src={Our_Store} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/About/Our-Store/" className={`text-decoration-none textBlack ${location.pathname === '/About/Our-Store/' ? 'active' : ''}`}>Our Story</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={Advantages} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/About/Advatages-Sona/" className={`text-decoration-none textBlack ${location.pathname === '/About/Advatages-Sona/' ? 'active' : ''}`}>Advantages Sona</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={manufacturing} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/About/Manufacturing-Unit/" className={`text-decoration-none textBlack ${location.pathname === '/About/Manufacturing-Unit/' ? 'active' : ''}`}>Manufacturing Unit</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={Envir} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/About/Enviro-Friendly/" className={`text-decoration-none textBlack ${location.pathname === '/About/Enviro-Friendly/' ? 'active' : ''}`}>Enviro-Friendly</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={Brochures} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/About/Brochures/" className={`text-decoration-none textBlack ${location.pathname === '/About/Brochures/' ? 'active' : ''}`}>Brochure</Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li onClick={() => toggleSubmenu('industry')}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/Industry/" className={`text-decoration-none textBlack ${(location.pathname === '/Industry/' || location.pathname === '/Industry/Pharmaceutical/' || location.pathname === '/Industry/Cosmetic-And-Personal-Care/' || location.pathname === '/Industry/Nutraceutical/' || location.pathname === '/Industry/Industrial-And-Agro-Chemical/') ? 'active' : ''}`}>Industry</Link>
                                    <IoIosArrowDown
                                        className={`arwBck ${openSubmenu === 'industry' ? ' arrow-rotate' : 'Back-Rorate'}`}
                                    />
                                </div>
                                <div className={`submenusAbout pt-2 ${openSubmenu === 'industry' ? 'open' : ''}`}>
                                    <ul className='list-unstyled'>
                                        <li className='d-flex align-items-center'>
                                            <img src={Our_Store} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/Industry/Pharmaceutical/" className={`text-decoration-none textBlack ${location.pathname === '/Industry/Pharmaceutical/' ? 'active' : ''}`}>Pharmaceutical</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={Advantages} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/Industry/Cosmetic-And-Personal-Care/" className={`text-decoration-none textBlack ${location.pathname === '/Industry/Cosmetic-And-Personal-Care/' ? 'active' : ''}`}>Cosmetic & Personal Care</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={manufacturing} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/Industry/Nutraceutical/" className={`text-decoration-none textBlack ${location.pathname === '/Industry/Nutraceutical/' ? 'active' : ''}`}>Nutraceutical</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={Brochures} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/Industry/Industrial-And-Agro-Chemical/" className={`text-decoration-none textBlack ${location.pathname === '/Industry/Industrial-And-Agro-Chemical/' ? 'active' : ''}`}>Industrial & Agro-Chemical</Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li onClick={() => toggleSubmenu('AluminumPro')}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/Aluminum-Products/" className={`text-decoration-none textBlack ${(location.pathname === '/Aluminum-Products/' || location.pathname === '/Aluminum-Products/Collapsible-Tubes/' || location.pathname === '/Aluminum-Products/Flasks-And-Bottles/' || location.pathname === '/Aluminum-Products/Tablet-Canisters/') ? 'active' : ''}`}>Aluminum Products</Link>
                                    <IoIosArrowDown
                                        className={`arwBck ${openSubmenu === 'AluminumPro' ? 'arrow-rotate' : 'Back-Rorate'}`}
                                    />
                                </div>
                                <div className={`submenusAbout pt-2 ${openSubmenu === 'AluminumPro' ? 'open' : ''}`}>
                                    <ul className='list-unstyled'>
                                        <li className='d-flex align-items-center'>
                                            <img src={Our_Store} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/Aluminum-Products/Collapsible-Tubes/" className={`text-decoration-none textBlack ${location.pathname === '/Aluminum-Products/Collapsible-Tubes/' ? 'active' : ''}`}>Collapsible Tubes</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={Advantages} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/Aluminum-Products/Flasks-And-Bottles/" className={`text-decoration-none textBlack ${location.pathname === '/Aluminum-Products/Flasks-And-Bottles/' ? 'active' : ''}`}>Flasks & Bottles</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={Brochures} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/Aluminum-Products/Tablet-Canisters/" className={`text-decoration-none textBlack ${location.pathname === '/Aluminum-Products/Tablet-Canisters/' ? 'active' : ''}`}>Tablet Canisters</Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                            </li>
                            <li onClick={() => toggleSubmenu('Resources')}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="" className={`text-decoration-none textBlack ${(location.pathname === '/Resources/Careers/' || location.pathname === '/Resources/BlogMedia/' || location.pathname === '/Resources/Gallery/') ? 'active' : ''}`}
                                    >Resources</Link>
                                    <IoIosArrowDown

                                        className={`arwBck ${openSubmenu === 'Resources' ? 'arrow-rotate' : 'Back-Rorate'}`}
                                    />
                                </div>

                                <div className={`submenusAbout pt-2 ${openSubmenu === 'Resources' ? 'open' : ''}`}>
                                    <ul className='list-unstyled'>
                                        <li className='d-flex align-items-center'>
                                            <img src={Our_Store} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/Resources/Careers/" className={`text-decoration-none textBlack ${location.pathname === '/Resources/Careers/' ? 'active' : ''}`}>Careers</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={Advantages} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/Resources/BlogMedia/" className={`text-decoration-none textBlack ${location.pathname === '/Resources/BlogMedia/' ? 'active' : ''}`}>Blogs & Media</Link>
                                            </span>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <img src={manufacturing} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="/Resources/Gallery/" className={`text-decoration-none textBlack ${location.pathname === '/Resources/Gallery/' ? 'active' : ''}`}>Gallery</Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li onClick={() => toggleSubmenu('LaminatedTubs')}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to="/Laminated-tubs/" className={`text-decoration-none textBlack ${location.pathname === '/Laminated-tubs/' ? 'active' : ''}`}>Laminated Tubs</Link>
                                    {/* <IoIosArrowDown className={openSubmenu === 'LaminatedTubs' ? 'arrow-rotate fs-3' : 'fs-3 Back-Rorate'}/> */}
                                </div>
                                {/* <div className={`submenusAbout pt-2 ${openSubmenu === 'LaminatedTubs' ? 'open' : ''}`}>
                                    <ul className='list-unstyled'>
                                        <li className='d-flex align-items-center'>
                                            <img src={Our_Store} alt="" className='navimg' />
                                            <span className='setLing'>
                                                <Link to="" className='text-decoration-none textBlack'>Pharmaceutical</Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div> */}
                            </li>
                        </ul>
                        <div className="d-flex justify-content-start mt-3">
                            <a href="#" className="reach-us-button gap-4 text-black">
                                Reach Us <span><GoArrowUpRight className="button-arrow text-white " /></span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <div className="header_main m-auto">
                <div className="container-xxl header d-xl-block ">
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
                                <li className="nav-item hover_serv">
                                    <Link to="/" className={`nav-link  hebo px-3 text-decoration-none textBlack ${(location.pathname === '' || location.pathname === '/' ) ? 'active' : ''}`}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item hover_serv">
                                    <Link to="" className={`nav-link  hebo px-3 text-decoration-none textBlack ${(location.pathname === '/About/Our-Store/' || location.pathname === '/About/Advatages-Sona/' || location.pathname === '/About/Manufacturing-Unit/' || location.pathname === '/About/Enviro-Friendly/' || location.pathname === '/About/Brochures/') ? 'active' : ''}`}>
                                        About Us
                                    </Link>

                                    <div className='set_ul'>
                                        <ul className='list-unstyled'>
                                            <li className='d-flex align-item-center'>
                                                <img src={Our_Store} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/About/Our-Store/" className={`text-decoration-none textBlack ${location.pathname === '/About/Our-Store/' ? 'active' : ''}`}>Our Story</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={Advantages} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/About/Advatages-Sona/" className={`text-decoration-none textBlack ${location.pathname === '/About/Advatages-Sona/' ? 'active' : ''}`}>Advantages Sona</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={manufacturing} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/About/Manufacturing-Unit/" className={`text-decoration-none textBlack ${location.pathname === '/About/Manufacturing-Unit/' ? 'active' : ''}`}>Manufacturing Unit</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={Envir} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/About/Enviro-Friendly/" className={`text-decoration-none textBlack ${location.pathname === '/About/Enviro-Friendly/' ? 'active' : ''}`}>Enviro-Friendly</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={Brochures} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/About/Brochures/" className={`text-decoration-none textBlack ${location.pathname === '/About/Brochures/' ? 'active' : ''}`}>Brochure</Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item hover_serv">
                                    <Link to="/Industry/" className={`nav-link hebo px-3 text-decoration-none textBlack ${(location.pathname === '/Industry/' || location.pathname === '/Industry/Pharmaceutical/' || location.pathname === '/Industry/Cosmetic-And-Personal-Care/' || location.pathname === '/Industry/Nutraceutical/' || location.pathname === '/Industry/Industrial-And-Agro-Chemical/') ? 'active' : ''}`}>
                                        Industry
                                    </Link>
                                    <div className='set_ul'>
                                        <ul className='list-unstyled'>
                                            <li className='d-flex align-item-center'>
                                                <img src={Our_Store} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Industry/Pharmaceutical/" className={`text-decoration-none textBlack ${location.pathname === '/Industry/Pharmaceutical/' ? 'active' : ''}`}>Pharmaceutical</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={Advantages} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Industry/Cosmetic-And-Personal-Care/" className={`text-decoration-none textBlack ${location.pathname === '/Industry/Cosmetic-And-Personal-Care/' ? 'active' : ''}`}>Cosmetic & Personal Care</Link>
                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={manufacturing} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Industry/Nutraceutical/" className={`text-decoration-none textBlack ${location.pathname === '/Industry/Nutraceutical/' ? 'active' : ''}`}>Nutraceutical</Link>

                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={Envir} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Industry/Industrial-And-Agro-Chemical/" className={`text-decoration-none textBlack ${location.pathname === '/Industry/Industrial-And-Agro-Chemical/' ? 'active' : ''}`}>Industrial & Agro-Chemical</Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item hover_serv">
                                    <Link to="/Aluminum-Products/" className={`nav-link  hebo px-3 text-decoration-none textBlack ${(location.pathname === '/Aluminum-Products/' || location.pathname === '/Aluminum-Products/Collapsible-Tubes/' || location.pathname === '/Aluminum-Products/Flasks-And-Bottles/' || location.pathname === '/Aluminum-Products/Tablet-Canisters/') ? 'active' : ''}`}>
                                        Aluminum Products
                                    </Link>
                                    <div className='set_ul'>
                                        <ul className='list-unstyled'>
                                            <li className='d-flex align-item-center'>
                                                <img src={Our_Store} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Aluminum-Products/Collapsible-Tubes/" className={`text-decoration-none textBlack ${location.pathname === '/Aluminum-Products/Collapsible-Tubes/' ? 'active' : ''}`}>Collapsible Tubes</Link>

                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={Advantages} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Aluminum-Products/Flasks-And-Bottles/" className={`text-decoration-none textBlack ${location.pathname === '/Aluminum-Products/Flasks-And-Bottles/' ? 'active' : ''}`}>Flasks & Bottles</Link>

                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={manufacturing} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Aluminum-Products/Tablet-Canisters/" className={`text-decoration-none textBlack ${location.pathname === '/Aluminum-Products/Tablet-Canisters/' ? 'active' : ''}`}>Tablet Canisters</Link>
                                                </span>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item hover_serv">
                                    <Link to="" className={`nav-link  hebo px-3 text-decoration-none textBlack ${(location.pathname === '/Resources/Careers/' || location.pathname === '/Resources/BlogMedia/' || location.pathname === '/Resources/Gallery/') ? 'active' : ''}`}>
                                        Resources
                                    </Link>
                                    <div className='set_ul'>
                                        <ul className='list-unstyled'>
                                            <li className='d-flex align-item-center'>
                                                <img src={Our_Store} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Resources/Careers/" className={`text-decoration-none textBlack ${location.pathname === '/Resources/Careers/' ? 'active' : ''}`}>Careers</Link>

                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={Advantages} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Resources/BlogMedia/" className={`text-decoration-none textBlack ${location.pathname === '/Resources/BlogMedia/' ? 'active' : ''}`}>Blogs & Media</Link>

                                                </span>
                                            </li>
                                            <li className='d-flex align-item-center'>
                                                <img src={manufacturing} alt="" className='navimg' />
                                                <span className='setLing'>
                                                    <Link to="/Resources/Gallery/" className={`text-decoration-none textBlack ${location.pathname === '/Resources/Gallery/' ? 'active' : ''}`}>Gallery</Link>


                                                </span>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item hover_serv">
                                    <Link to="/Laminated-Tubs/" className={`nav-link  hebo px-3 text-decoration-none textBlack ${location.pathname === '/Laminated-Tubs/' ? 'active' : ''}`}>
                                        Laminated Tubs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Link to="/ReachUs/" className="reach-us-button gap-4 text-black">
                                Reach Us <span><GoArrowUpRight className="button-arrow text-white " /></span>
                            </Link>
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
