import React, { useState, useRef } from 'react'

import Top from '../../component/Top/Top.jsx'
import Header from '../../component/Header/Header.jsx'
import Footer from '../../component/Footer/Footer.jsx'
import Focus from '../../Home/Focus'
import Helmet from 'react-helmet';
import './BrandOne.css'
import '../DefineAdvantages/Define.css'
import '../../../assets/fonts/fonts.css'
import faceBookColor from '../../../assets/faceBookColor.png'
import LinkedinColor from '../../../assets/LinkedinColor.png'
import YoutubeColor from '../../../assets/YoutubeColor.png'
import Instagram from '../../../assets/InstragamCaolor1.png'
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePermMedia } from "react-icons/md";
import { Link } from 'react-router-dom';
import InduPhoto from '../../../assets/newheaderPhoto/Resize/webp/Blog1.webp';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';


function BrandOne() {

    const blog_url = "https://sonaextrusion.com/Pioneering-in-Manufacturing-of-Tubes";
    const blog_title = "Sona Extrusion: Pioneering in Manufacturing of Tubes";
    const blog_description = "Explore Sona Extrusion's expertise in aluminum and laminated tube manufacturing. Serving pharmaceuticals, cosmetics, and more. Deliver innovative, sustainable solutions.";
    const blog_date_published = "2025-01-01";
    const blog_date_modified = "-- -- --";
    const website_url = "https://sonaextrusion.com";
    const website_logo = "https://sonaextrusion.com/assets/DownloadLogo-e953ReQ0.png";
    const author_name = "Sonaextrusion";
    const website_name = "Sonaextrusion";


const schema = `
{
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    "@id": "${blog_url}#BlogPosting",
    "mainEntityOfPage": "${blog_url}",
    "headline": "${blog_title}",
    "name": "${blog_title}",
    "description": "${blog_description}",
    "datePublished": "${blog_date_published}",
    "dateModified": "${blog_date_modified}",
    "author": {
        "@type": "Organization",
        "name": "${author_name}"
    },
    "publisher": {
        "@type": "Organization",
        "@id": "${website_url}",
        "name": "${website_name}",
        "logo": {
            "@type": "ImageObject",
            "@id": "${website_logo}",
            "url": "${website_logo}"
        }
    }
}`;

    const form = useRef(null);

    const [formData, setFormData] = useState({
        UserName: "",
        UserEmail: "",
        UserMessage: ""
    });

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ks3304p', // Replace with your EmailJS Service ID
                'template_urg79kd', // Replace with your EmailJS Template ID
                form.current,
                'Qk0_E3SJIJrgBigQF' // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    // console.log('SUCCESS!', result.text);
                    setFormData({
                        UserName: "",
                        UserEmail: "",
                        UserMessage: ""
                    });
                    setSnackbar({
                        open: true,
                        message: "Email sent successfully!",
                        severity: "success"
                    });
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setSnackbar({
                        open: true,
                        message: "Failed to send email. Please try again later.",
                        severity: "error"
                    });
                }
            );
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbar({ ...snackbar, open: false });
    };
    return (
        <>
            <Helmet>
                <title>{blog_title}</title>
                <meta name="description" content={blog_description} />
                <script type="application/ld+json">{schema}</script>
            </Helmet>
            <Top />
            <Header />
            <Focus type="BrandOne" />
            <div className='BrandOne'>
                <div className='container'>
                    <div className='BrandOnePadd'>
                        <div className='FutureTop d-flex justify-content-between'>
                            <div className='flex-column'>
                                <h1 className='sans_Medium'>A Quick Overview of Sona Extrusion</h1>
                                <div>
                                    <ul className='d-sm-flex d-md-flex d-lg-flex gap-sm-5 gap-md-5 gap-lg-5 list-unstyled'>
                                        <li><span><IoTimeOutline className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>Jan 1, 2025</a></li>
                                        <li><span><MdOutlinePermMedia className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>Blog's</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='BrndoneIntroduc'>
                            <h4 className='sans_Medium'>Introduction:</h4>
                            <p className='text-secondary sans_light'>Sona Extrusion stands as a leading name in the field of <span><Link to="/Aluminum-Products"> aluminum Tube</Link></span> and <span><Link to="/Aluminum-Products">laminated tube</Link></span> manufacturing. With a commitment to innovation, precision, and sustainability, the company has carved a niche in delivering top-notch extrusion solutions. Built on a foundation of excellence, Sona Extrusion combines decades of expertise with cutting-edge technology to meet the diverse needs of its clients.
                            </p>
                        </div>
                        <div className='ftrBrnone'>
                            <div>
                                <h4 className='sans_Medium'>The future of Aluminum Collapsible Tubes:</h4>
                                <ol start="1" className=''>
                                    <li className='my-4'><span className='h4 sans_Medium'>Foundation and Early Growth:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Starting as a small-scale unit, Sona Extrusion quickly gained recognition for its commitment to quality and customer satisfaction.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Expansion into New Industries:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Over the years, the company diversified its portfolio, serving sectors like pharmaceuticals, cosmetics, nutraceuticals, and agro-chemicals.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Technological Advancements:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >By using automation, Sona Extrusion revolutionized its manufacturing processes, ensuring superior efficiency and precision.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Global Recognition:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Achieving prestigious certifications and awards cemented its reputation as a global leader in extrusion technology.</a></li>
                                </ol>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>Key Milestones in the Company’s Journey to Excellence:</h4>
                                <ol start="1" className=''>
                                    <li className='my-4'><span className='h4 sans_Medium'> <Link to="/Industry/Pharmaceutical">Pharmaceutical Packaging</Link>:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Sona Extrusion’s aluminum tubes are designed to maintain product integrity, ensuring safety and longevity for pharmaceutical applications.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'><Link to="/Industry/Cosmetic-And-Personal-Care"> Cosmetic and Personal Care</Link>: </span><a className='text-decoration-none ms-2 text-secondary sans_light' >By offering custom designs that blend functionality with aesthetics, Sona Extrusion meets the dynamic needs of the cosmetics industry.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'><Link to="/Industry/Nutraceutical">Nutraceutical Industry</Link>: </span><a className='text-decoration-none ms-2 text-secondary sans_light' >The company provides hygienic and robust packaging solutions tailored to the nutraceutical sector's demands</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'><Link to="/Industry/Industrial-And-Agro-Chemical">Industrial and Agro-Chemicals</Link>:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Specialized aluminum tubes are made to withstand the rigors of industrial and agro-chemical use, offering unmatched durability.</a></li>
                                </ol>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>A Tour of Sona Extrusion’s Facilities:</h4>
                                <ol start="1" className=''>
                                    <li className='my-4'><span className='h4 sans_Medium'>High-Tech Manufacturing Plants:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Starting as a small-scale unit, Sona Extrusion quickly gained recognition for its commitment to quality and customer satisfaction.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Cutting-Edge Machinery and Tools:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Over the years, the company diversified its portfolio, serving sectors like pharmaceuticals, cosmetics, nutraceuticals, and agro-chemicals.</a></li>
                                </ol>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>The Manufacturing Process at Sona Extrusion:</h4>
                                <ol start="1" className=''>
                                    <li className='my-4'><span className='h4 sans_Medium'>Raw Material Procurement:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Sona Extrusion’s aluminum tubes are designed to maintain product integrity, ensuring safety and longevity for pharmaceutical applications.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Extrusion Technology: </span><a className='text-decoration-none ms-2 text-secondary sans_light' >By offering custom designs that blend functionality with aesthetics, Sona Extrusion meets the dynamic needs of the cosmetics industry.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Surface Treatment and Finishing: </span><a className='text-decoration-none ms-2 text-secondary sans_light' >The company provides hygienic and robust packaging solutions tailored to the nutraceutical sector's demands</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Packaging and Dispatch:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Specialized aluminum tubes are made to withstand the rigors of industrial and agro-chemical use, offering unmatched durability.</a></li>
                                </ol>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>Quality Assurance and Standards:</h4>
                                <ol start="1" className=''>
                                    <li className='my-4'><span className='h4 sans_Medium'> Rigorous Quality Control Measures:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Every product undergoes stringent quality checks at various stages of manufacturing. Real-time monitoring systems ensure that no detail is overlooked, maintaining Sona Extrusion’s promise of excellence.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Certifications and Compliance: </span><a className='text-decoration-none ms-2 text-secondary sans_light' >Sona Extrusion holds a range of certifications that underline its adherence to global standards. This commitment to compliance fosters trust and long-term relationships with clients worldwide.</a></li>
                                </ol>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>Awards, and Achievements:</h4>
                                <ul start="1" className='list-unstyled'>
                                    <li className='my-4'><span className='h4 sans_Medium'>Industry Recognitions</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Sona Extrusion has been honored with several awards for its innovation, sustainability efforts, and contributions to the manufacturing sector.</a></li>
                                </ul>
                            </div>
                            <h4 className='sans_Medium'>Conclusion:</h4>
                            <p className="sans_light text-secondary">From high-tech facilities and cutting-edge machinery to rigorous quality standards and industry recognition, <span><Link to="/">Sona Extrusion</Link></span> exemplifies excellence. Its ability to combine technological advancements with sustainable practices makes it a preferred choice for clients worldwide.</p>
                        </div>
                    </div>
                    <div className='BrandoneBox'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-md-6 col-12 d-flex justify-content-center'>
                                <div className='DefineCard'>
                                    <div className='DefineCardImg'>
                                        <img src={InduPhoto} alt="" loading='lazy' />
                                    </div>
                                    <div className='DefineCardTxt p-3'>
                                        <h5 className='text-secondary sans_bold text-center'>
                                            <Link to="/DefineAdvantages" className='text-decoration-none text-secondary'>
                                                Next
                                            </Link>
                                        </h5>
                                        <p className=' sans_Light text-center'>Define the advantages and application: technological effectiveness in the field of aluminum collapsible tubes?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-12  d-flex justify-content-center align-items-end'>
                                <div className='DefinRight'>
                                    <div className='d-flex gap-3 my-5 my-lg-0'>
                                        <div><h1>Share:</h1></div>
                                        <div>
                                            <a href="https://www.facebook.com/sonaextrusion/" target="_blank" className='text-decoration-none' >
                                                <img src={faceBookColor} alt="" className='DefinRightIcon' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://in.linkedin.com/company/sonaextrusion" target="_blank" className='text-decoration-none' >
                                                <img src={LinkedinColor} alt="" className='DefinRightIcon' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.youtube.com/@sonaextrusion2116" className='text-decoration-none' target="_blank">
                                                <img src={YoutubeColor} alt="" className='DefinRightIcon' />
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.instagram.com/sonaepl" target="_blank" className='text-decoration-none' >
                                                <img src={Instagram} alt="" className='DefinRightIcon' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='DefineFormSection'>
                        <div className='DefineForm'>
                            <div className='py-3 d-inline-block'>
                                <h3>Leave A Comment</h3>
                            </div>
                            <div className='DefineFormData'>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className='d-flex'>
                                        <TextField
                                            label="Your Name*"
                                            name="UserName"
                                            value={formData.UserName}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            className="DefinInput me-md-4 me-2 bg-white"
                                            required
                                            autoComplete="off"
                                        />
                                        <TextField
                                            label="Your Email*"
                                            name="UserEmail"
                                            value={formData.UserEmail}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            className="DefinInput bg-white ms-md-4 ms-2"
                                            required
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className='pt-5'>
                                        <TextField
                                            label="Write Comment"
                                            name="UserMessage"
                                            value={formData.UserMessage}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            className="DefinInput bg-white"
                                            required
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center mt-4 '>
                                        <div className='DefineForm_btn'>
                                            <button type="submit" className='btn-1 hover-filled-slide-right'>Post Comment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Snackbar
                open={snackbar.open}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity={snackbar.severity}
                    variant="filled"
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default BrandOne