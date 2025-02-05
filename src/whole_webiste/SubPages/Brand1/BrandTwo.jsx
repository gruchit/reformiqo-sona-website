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
import BlogImg2 from '../../../assets/newheaderPhoto/Resize/webp/Home2.webp';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';

function BrandTwo() {

    const blog_url = "https://sonaextrusion.com/Trust-Sona-Extrusion-for-Packaging-Solutions";
    const blog_title = "Sona Extrusion: Global Partner for Advance Packaging Solutions";
    const blog_description = "Know why global brands choose Sona Extrusion for innovative and sustainable packaging. With expertise in aluminum and laminated tubes, Read now!";
    const blog_date_published = "2025-01-04";
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
            <Focus type="BrandTwo" />
            <div className='BrandOne'>
                <div className='container'>
                    <div className='BrandOnePadd'>
                        <div className='FutureTop d-flex justify-content-between'>
                            <div className='flex-column'>
                                <div>
                                    <ul className='d-sm-flex d-md-flex d-lg-flex gap-sm-5 gap-md-5 gap-lg-5 list-unstyled'>
                                        <li><span><IoTimeOutline className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>Jan 4, 2025</a></li>
                                        <li><span><MdOutlinePermMedia className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>Blog's</a></li>
                                    </ul>
                                </div>
                                <h1 className='sans_Medium'>Why Partnerships Matter in Manufacturing</h1>
                            </div>
                        </div>
                        <div className='BrndoneIntroduc'>
                            <h4 className='sans_Medium'>Introduction:</h4>
                            <p className='text-secondary sans_light'>A successful partnership with a reliable Packaging manufacturer is the cornerstone of achieving business objectives. From ensuring product consistency to driving innovation, trusted <span> <Link to="/About/Manufacturing-Unit">manufacturing units</Link> </span> empower brands to focus on growth while leaving production complexities in capable hands.                                </p>
                        </div>
                        <div className='ftrBrnone'>
                            <div>
                                <h4 className='sans_Medium'>Collaborating with innovative Packaging manufacturers brings numerous benefits, including:</h4>
                                <ul className=''>
                                    <li className='my-1'><a className='text-decoration-none ms-2 text-secondary sans_light' >Access to advanced technology and expertise.</a></li>
                                    <li className='my-1'><a className='text-decoration-none ms-2 text-secondary sans_light' >Assurance of consistent product quality.</a></li>
                                    <li className='my-1'><a className='text-decoration-none ms-2 text-secondary sans_light' >Flexibility to scale operations for global demand.</a></li>
                                    <li className='my-1'><a className='text-decoration-none ms-2 text-secondary sans_light' >Sustainable and efficient production practices.</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>Why Leading Brands Partner with Sona Extrusion:</h4>
                                <ol start="1" className=''>
                                    <li className='my-4'><span className='h4 sans_Medium'>Expertise and Industry Knowledge:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >With decades of experience, Sona Extrusion has mastered the art of manufacturing aluminium Tubes and laminated tubes. Their deep understanding of diverse industry needs from pharmaceuticals to cosmetics ensures every client receives best solutions that align with their specific goals.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Advanced Manufacturing Capabilities:</span><a className='text-decoration-none ms-2 text-secondary sans_light'>Sona Extrusion’s state-of-the-art facilities and cutting-edge machinery redefine precision Packaging manufacturing. By integrating automation and precision technologies, they guarantee flawless production processes, meeting even the most stringent industry standards.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Commitment to Quality and Standards:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Quality is at the core of Sona Extrusion’s operations. Through rigorous quality control measures, every product undergoes testing to ensure it meets and exceeds global certifications and client expectations.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Sustainable Manufacturing Practices:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >In a world that demands sustainability, Sona Extrusion leads by example. They prioritize eco-friendly production techniques, minimize waste, and promote recyclability, making them a preferred choice for environmentally-conscious brands.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Customization and Innovation:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Sona Extrusion thrives on innovation, offering fully customizable solutions to meet client needs. From specialized designs to functional improvements, their expertise in customization ensures products stand out in competitive markets.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Global Reach and Supply Chain Efficiency:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >With an efficient global supply chain, Sona Extrusion ensures timely deliveries to clients across the world. Their scalable operations seamlessly handle high-volume production demands without compromising quality or reliability.</a></li>
                                </ol>
                            </div>
                            <div>
                                <h4 className='sans_Medium'>Why Brands Trust Sona Extrusion for Success:</h4>
                                <ol start="1" className=''>
                                    <li className='my-4'><span className='h4 sans_Medium'>Proven Track Record:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Sona Extrusion’s clients include some of the world’s leading brands. Sona Extrusion’s success stories and glowing testimonials reflect a commitment to excellence that sets them apart from competitors.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'>Reliability and Accountability:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Transparency, open communication, and a client-first approach define Sona Extrusion’s business ethos. They take full ownership of their deliverables, ensuring every project surpasses expectations.</a></li>
                                    <li className='my-4'><span className='h4 sans_Medium'> Continuous Innovation:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >Innovation drives progress at Sona Extrusion. Their dedicated R&D team stays ahead of industry trends, exploring advancements like IoT and AI to enhance manufacturing processes and deliver smarter, more efficient solutions.</a></li>
                                </ol>
                            </div>


                            <h4 className='sans_Medium'>Conclusion:</h4>
                            <p className="sans_light text-secondary">Leading brands trust Sona Extrusion for their expertise, advanced capabilities, and unwavering commitment to quality and sustainability. By choosing <span><Link to="/">Sona Extrusion</Link></span> as a manufacturing partner, businesses gain a competitive edge, knowing their production needs are in the hands of a reliable, innovative, and globally respected partner.</p>
                        </div>
                    </div>
                    <div className='BrandoneBox'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-md-6 col-12 d-flex justify-content-center'>
                                <div className='DefineCard'>
                                    <div className='DefineCardImg'>
                                        <img src={BlogImg2} alt="" loading='lazy' />
                                    </div>
                                    <div className='DefineCardTxt p-3'>
                                        <h5 className='text-secondary sans_bold text-center'>
                                            <Link to="/Pioneering-in-Manufacturing-of-Tubes" className='text-decoration-none text-secondary'>
                                                Next
                                            </Link>
                                        </h5>
                                        <p className=' sans_Light text-center'>A Glimpse into Sona Extrusion’s State-of-the-Art Manufacturing</p>
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

export default BrandTwo

