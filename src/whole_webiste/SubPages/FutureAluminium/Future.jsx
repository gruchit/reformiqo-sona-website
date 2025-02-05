import React, { useState, useRef } from 'react';
import './Future.css';
import Top from '../../component/Top/Top.jsx';
import Header from '../../component/Header/Header.jsx';
import Footer from '../../component/Footer/Footer.jsx';
import faceBookColor from '../../../assets/faceBookColor.png';
import LinkedinColor from '../../../assets/LinkedinColor.png';
import twitterColor from '../../../assets/twitterColor.png';
import YoutubeColor from '../../../assets/YoutubeColor.png';
import Instagram from '../../../assets/InstragamCaolor1.png';

import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePermMedia } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdShare } from "react-icons/md";
import '../DefineAdvantages/Define.css'
import '../../../assets/fonts/fonts.css'
import Focus from '../../Home/Focus';
import BlogImg2 from '../../../assets/newheaderPhoto/Resize/webp/Blog3.webp';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';
import Helmet from 'react-helmet';

function Future() {
    const blog_url = "https://sonaextrusion.com/FuturAluminum";  
    const blog_title = "Future of Aluminum Collapsible Tubes: Sustainability and Innovation";     
    const blog_description = "As packaging evolves, aluminum collapsible tubes stand out for sustainability and customization. Discover how tech and eco-features lead the way. Read now!"; 
    const blog_date_published = "2023-03-29";   
    const blog_date_modified = "---- -- --";    
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
            <Focus type="Future" />
            <div className='Future'>
                <div className='container'>
                    <div className='FuturePadd'>
                        <div className='FutureTop d-flex justify-content-between'>
                            <div className='flex-column'>
                                <h1 className='sans_Medium'>The future of Aluminum Collapsible Tubes</h1>
                                <div>
                                    <ul className='d-sm-flex d-md-flex d-lg-flex gap-sm-5 gap-md-5 gap-lg-5 list-unstyled'>
                                        <li><span><IoTimeOutline className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>March 29, 2023</a></li>
                                        <li><span><MdOutlinePermMedia className='iconProDuct mb-1' /></span> <a className='text-secondary sans_light text-decoration-none'>Blog's</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='FtrIntroduc'>
                            <h4 className='sans_Medium'>Introduction:</h4>
                            <p className='text-secondary sans_light'>As a packaging material for a variety of goods, including pharmaceuticals, cosmetics and personal care, agrochemicals and food items, aluminum collapsible tubes have become extremely popular in recent years. This is primarily since these tubes are lightweight, portable, and offer excellent protection against outside elements like air, moisture, and light. Due to the growing demand for environmentally friendly packaging options, aluminum collapsible tubes are predicted to have a prosperous future. ⁠⁠⁠⁠⁠⁠⁠ In addition, the recyclability of aluminum makes it a sustainable option for packaging. As more consumers become conscious of their environmental impact, the demand for eco-friendly packaging is expected to increase, further boosting the popularity of aluminum collapsible tubes.</p>
                        </div>
                        <div className='ftrFuturAlum'>
                            <h4 className='sans_Medium'>The future of Aluminum Collapsible Tubes:</h4>
                            <ol start="1" className=''>
                                <li className='my-4'><span className='h4 sans_Medium'>Sustainability:</span><a className='text-decoration-none ms-2 text-secondary sans_light' >The future of aluminum collapsible tubes will be heavily influenced by sustainability as educated consumers’ concerns about the environmental impact of packaging grow. Many manufacturers are looking for creative ways to make tubes that are less harmful to the environment, such as by using recycled aluminum and reducing their carbon footprint.</a></li>
                                <li className='my-4'><span className='h4 sans_Medium'>Technological Advancement:</span><a className='text-decoration-none ms-2 text-secondary sans_light' > The manufacturing of aluminum of aluminum collapsible tubes could be significantly improved with the advancement of new technologies. This might result in increased productivity, less waste, and better tube quality. For instance, the implementation of automation and robotics in the manufacturing process can enhance precision and speed. Additionally, the use of 3D printing technology can enable the production of more complex tube designs with greater efficiency.</a></li>
                                <li className='my-4'><span className='h4 sans_Medium'>Digitalization:</span><a className='text-decoration-none ms-2 text-secondary sans_light' > Future collapsible aluminum tubes will be impacted by the digitalization of the packaging sector. Digital technology can help manufacturers manage their supply chain better, streamline their production methods, and work more efficiently overall.</a></li>
                                <li className='my-4'><span className='h4 sans_Medium'>Customization:</span><a className='text-decoration-none ms-2 text-secondary sans_light' > Customization is becoming more and more popular among consumers and packaging sector is no exception. To remain competitive, producers of aluminum collapsible tubes must consider the demand for specialised shapes and sizes. In addition, the use of advanced printing technologies can also enhance the customization options for aluminum collapsible tubes, allowing for unique designs and branding opportunities. This trend towards customization is expected to continue driving innovation in the packaging industry.</a></li>
                            </ol>
                            <h4 className='sans_Medium'>On that note… </h4>
                            <p className="sans_light text-secondary">To conclude, it should be noted that aluminum collapsible tubes have established themselves as a dependable packaging choice for several industries, and this development is likely to continue. However, in order to stay competitive as the packaging industry continues to grow, manufacturers of aluminum collapsible tubes will need to keep up with the most recent technological advancements and adapt to changing consumer demands. ⁠⁠⁠⁠⁠⁠⁠ This may involve exploring new materials or incorporating eco-friendly features into their products. By doing so, manufacturers can ensure that aluminum collapsible tubes remain a popular and sustainable packaging option for years to come.</p>
                        </div>
                    </div>

                    <div className='FutureBox'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-md-6 col-12 d-flex justify-content-center'>
                                <div className='FutureCard'>
                                    <div className='FutureCardImg'>
                                        <img src={BlogImg2} alt="" loading='lazy' />
                                    </div>
                                    <div className='FutureCardTxt p-3'>
                                        <h5 className='text-secondary sans_bold text-center'>
                                            <Link to="/Factors-for-Choosing-the-Pharma-Packaging-Partner" className='text-decoration-none text-secondary'>
                                                Previous
                                            </Link>
                                        </h5>
                                        <p className='sans_Light text-center'>Choosing the Right Pharmaceutical Packaging Partner</p>
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

export default Future