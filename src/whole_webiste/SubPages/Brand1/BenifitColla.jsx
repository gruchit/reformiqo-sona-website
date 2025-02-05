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
import InduPhoto from '../../../assets/newheaderPhoto/Resize/webp/Home3.webp';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';

function BenifitColla() {

    const blog_url = "https://sonaextrusion.com/Benefits-of-Using-Tubes-in-Pharma-Products";  
    const blog_title = "5 Benefits of Using Tubes in Pharma Products | Sona Extrusion";     
    const blog_description = "Learn why collapsible tubes are the go-to pharmaceutical packaging, offering superior product protection, cost savings, and eco-friendly benefits. Read Now!"; // Blog description
    const blog_date_published = "2025-01-08";   
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
            <Focus type="BenifitColla" />
            <div className='BrandOne'>
                <div className='container'>
                    <div className='BrandOnePadd'>
                        <div className='FutureTop d-flex justify-content-between'>
                            <div className='flex-column'>
                                <div>
                                    <ul className='d-sm-flex d-md-flex d-lg-flex gap-sm-5 gap-md-5 gap-lg-5 list-unstyled'>
                                        <li><span><IoTimeOutline className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>Jan 8, 2025</a></li>
                                        <li><span><MdOutlinePermMedia className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>Blog's</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='BrndoneIntroduc'>
                            <h4 className='sans_Medium'>Introduction:</h4>
                            <p className='text-secondary sans_light'>In the pharmaceutical industry, where safety and efficacy are paramount, packaging plays a critical role in maintaining product quality. The challenges of ensuring product protection, cost-efficiency, sustainability, and consumer convenience have driven innovation in packaging solutions. Among these, collapsible tubes have emerged as a game-changer, offering a blend of functionality that addresses the industry's unique demands.</p>
                        </div>
                        <div className='ftrBrnone'>
                            <div>
                                <h1 className='sans_Medium py-3'>5 Benefits of Using Collapsible Tubes</h1>
                                <h4 className='sans_Medium'>Benefit 1: Enhanced Product Protection:</h4>
                                <ul className=''>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light'><span> <Link to="/Aluminum-Products/Collapsible-Tubes/">Aluminum Collapsible</Link></span> tubes provide superior barrier properties, effectively shielding contents from external factors like light, air, and moisture.</a></li>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light'>These barriers are crucial in maintaining the product’s integrity, extending shelf life, and ensuring it remains safe for use.</a></li>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' >For pharmaceutical products, where consistent efficacy is vital, collapsible tubes ensure that the contents stay uncontaminated and potent until the last dose.</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>Benefit 2: Cost-Effectiveness:</h4>
                                <ul className=''>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' >Efficient material usage leads to lower production costs compared to traditional packaging options.</a></li>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' ><span> <Link to="/Industry/Pharmaceutical">Pharmaceutical</Link></span> industry benefits from these cost savings without compromising on the quality or durability of the packaging.</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>Benefit 3: Consumer Convenience:</h4>
                                <ul className=''>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' >The flexibility of collapsible tubes allows for precise dispensing, ensuring that users can access the exact quantity they need with minimal wastage.</a></li>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' >Resealable caps offer added convenience, allowing consumers to store the product securely and maintain its quality over time.</a></li>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' >Unlike rigid containers, collapsible tubes ensure complete product usage, enabling consumers to extract every last drop, enhancing value for money.</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>Benefit 4: Sustainability:</h4>
                                <ul className=''>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' >By reducing packaging waste and promoting recyclability, these tubes align with global efforts to minimize environmental impact.</a></li>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' >Companies adopting such eco-friendly solutions demonstrate their commitment to sustainability, appealing to an audience that values green initiatives.</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>Benefit 5: Customizable and Aesthetic Appeal:</h4>
                                <ul className=''>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' >Collapsible tubes offer extensive customization options, including variations in size, cap design, and surface finishes.</a></li>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' >Brands can enhance their visibility with vibrant designs, printed logos, and creative shapes that resonate with their target audience</a></li>
                                    <li className='my-4'><a className='text-decoration-none ms-2 text-secondary sans_light' >This customization improves both functionality and visual appeal, creating a memorable consumer experience and strengthening brand loyalty.</a></li>
                                </ul>
                            </div>
                            <h4 className='sans_Medium'>Conclusion:</h4>
                            <p className="sans_light text-secondary"><span> <Link to="/">Sona Extrusion</Link></span> Provide Collapsible tubes that have revolutionized pharmaceutical packaging by addressing key challenges such as product protection, cost-efficiency, consumer convenience, sustainability, and branding. Their ability to combine functionality with aesthetic appeal makes them the ideal choice for modern pharmaceutical companies.</p>
                            <p className="sans_light text-secondary">By adopting collapsible tubes, businesses can ensure product quality, reduce environmental impact, and enhance customer satisfaction—setting a new benchmark in pharmaceutical packaging.</p>
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
                                            <Link to="/Trust-Sona-Extrusion-for-Packaging-Solutions" className='text-decoration-none text-secondary'>
                                                Next
                                            </Link>
                                        </h5>
                                        <p className='sans_Light text-center'>Why Leading Brands Choose Sona Extrusion</p>
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

export default BenifitColla