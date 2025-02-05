import React, { useState, useRef, useEffect } from 'react';
import './Indu.css';
import Single_BlackBol_Line from '../../../assets/single_BlackBol_Line.svg';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import emailjs from "emailjs";
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Frequently() {
    useEffect(() => {
        AOS.init();
    }, []);

    const faqs = [
        {
            question: "What type of industries does Sona Extrusion serve?",
            answer: "Sona Extrusion serves a variety of industries, like pharmaceuticals, cosmetics and personal care, agrochemicals, and various other businesses. Our aluminum packaging solutions are used for a range of applications in various businesses across a wide range of verticals. We are proud to provide our customers with reliable and quality aluminum packaging products that meet the stringent requirements of each of these industries.  "
        },
        {
            question: "What types of aluminum packaging do Sona Extrusion specialize in?",
            answer: "We, at Sona Extrusion, specialize in manufacturing high-quality aluminum collapsible tubes, bottles, flask, tablet cannisters. With more than 3 decades of experience to back us up, we produce both simple and intricate extrusion designs by collaborating with clients to create unique aluminum packaging solutions for their unique requirements."
        },
        {
            question: "What material does Sona Extrusions use in their manufacturing process?",
            answer: "We, at Sona Extrusion, use aluminum as our main material in the manufacturing process. To reduce the impact of our product and process on the environment, we employ environmentally friendly technologies in the manufacturing process. By doing so, we strive to make our processes more sustainable and reduce our carbon footprint."
        },
        {
            question: "How does Sona Extrusion ensure the quality of its product?",
            answer: "We, Sona Extrusion, follow the standard delineates GMP principles and specifies QMS requirements applicable to primary packaging materials for pharmaceutical products. The ISO 15378 standard enables you to comply with legal requirements for pharmaceutical packaging materials. The manufacturing process at Sona Extrusion is overseen by a group of skilled experts who make sure that quality is upheld at every stage, from initial design to final production."
        },
        {
            question: "What is Sona Extrusion’s approach to sustainability and reducing its carbon footprint?",
            answer: "We have successfully installed Solar Panels covering the entire roof in our Manufacturing Site in order to reduce carbon foot print while minimizing our environmental effect."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    


    const form = useRef(null); // Ref for the form
    const [formData, setFormData] = useState({
        UserName: "",
        UserEmail: "",
        UserPhone: "",
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
                        UserPhone: "",
                        UserMessage: ""
                    }); // Clear the form fields
                    setSnackbar({
                        open: true,
                        message: "Email sent successfully!",
                        severity: "success"
                    });
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                    setSnackbar({
                        open: true,
                        message: "Failed to send email. Please try again later.",
                        severity: "error"
                    });
                }
            );
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar({ ...snackbar, open: false });
    };
    return (
        <div className='Frequently'>
            <div className='row'>
                <div className='col-xl-6 col-lg-12 mt-5'>
                    <div className='Frequently_right flex-column'
                        data-aos="fade-up"
                    >
                        <div className='px-sm-5 px-md-5 px-lg-5 px-xl-5 px-xxl-5 '>
                            <h3 className='text-start py-3 sans_bold'>Talk to an Automation Expert</h3>
                            <h4 className='sans_bold'>Help With:</h4>
                            <ul className='ps-5 pt-3 '>
                                <li className='py-1'><a className='text-decoration-none sans_light text-secondary '>Discuss your requirements</a></li>
                                <li className='py-1'><a className='text-decoration-none sans_light text-secondary'>Evaluate feasibility &ROI</a></li>
                                <li className='py-1'><a className='text-decoration-none sans_light text-secondary'>Get assistance</a></li>
                            </ul>
                        </div>
                        <div className='flex-column '>


                            <form ref={form} onSubmit={sendEmail}>
                                <div className="flex-column py-3">
                                    <label className="sans_Medium" htmlFor="Name">Name <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="UserName"
                                        className="p-3 border-0"
                                        value={formData.UserName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex-column py-3">
                                    <label className="sans_Medium" htmlFor="Email">Email <span className="text-danger">*</span></label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="UserEmail"
                                        className="p-3 border-0"
                                        value={formData.UserEmail}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex-column py-3">
                                    <label className="sans_Medium" htmlFor="Phone">Phone <span className="text-danger">*</span></label>
                                    <input
                                        type="number"
                                        placeholder="Phone"
                                        name="UserPhone"
                                        className="p-3 border-0"
                                        value={formData.UserPhone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex-column py-3">
                                    <label className="sans_Medium" htmlFor="Message">Message <span className="text-danger">*</span></label>
                                    <textarea
                                        placeholder="Message"
                                        name="UserMessage"
                                        className="p-3 border-0"
                                        value={formData.UserMessage}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex-column">
                                    <button type="submit" className="btn SubmitFormAuto">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className='col-xl-6 col-lg-12 mt-5 pt-5'>
                    <div className='Frequently_Left flex-column'>
                        <div data-aos="fade-up" >
                        <div className='d-flex justify-content-end'>
                            <img src={Single_BlackBol_Line} alt="" />
                        </div>
                        <h1 className='sans_bold text-center'>
                            Customer's Frequently <br />
                            Asked Questions (FAQs)
                        </h1>
                        <p className='sans_light text-secondary text-center my-4'>
                            If you have any questions, please ask us and we will
                            answer you at the earliest possible. Make a question now.
                        </p>
                        </div>
                        <div className='faq-section'>
                            {faqs.map((faq, index) => (
                                <div key={index} className='faq-item border-0' data-aos="zoom-in-up">
                                    <div className={`faq-question ${openIndex === index ? 'faq-section-open' : ''}`} onClick={() => toggleFAQ(index)} >
                                        <h5 className='sans_light'>{faq.question}</h5>
                                        <span className='arrow'>
                                            {openIndex === index ? <MdOutlineKeyboardArrowUp className='arrow_upicon fs-3' /> : <MdOutlineKeyboardArrowDown className='arrow_upicon fs-3' />}
                                        </span>
                                    </div>
                                    <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                        <p className='sans_light text-secondary'>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
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
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Frequently;
