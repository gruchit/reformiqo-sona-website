import React, { useState } from 'react';
import './Indu.css';
import Single_BlackBol_Line from '../../assets/single_BlackBol_Line.svg';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


function Frequently() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "Our return policy allows returns within 30 days of purchase with a receipt.  "
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to select countries."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order has shipped, you will receive a tracking number via email."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='Frequently'>
            <div className='row'>
                <div className='col-6 py-5'>
                    <div className='Frequently_right flex-column'>
                        <div className='px-5 '>
                            <h3 className='text-start py-3'>Talk to an Automation Expert</h3>
                            <h4>Help With:</h4>
                            <ul className='ps-5 pt-3'>
                                <li className='py-1'><a href="" className='text-decoration-none sans_light text-secondary '>Discuss your requirements</a></li>
                                <li className='py-1'><a href="" className='text-decoration-none sans_light text-secondary'>Evaluate feasibility &ROI</a></li>
                                <li className='py-1'><a href="" className='text-decoration-none sans_light text-secondary'>Get assistance</a></li>
                            </ul>
                        </div>
                        <div className='flex-column'>
                            <form action="">
                                <div className='flex-column py-3'>
                                    <label htmlFor="Name">Name <span className='text-danger'>*</span></label>
                                    <input type="text" placeholder='Name' className='p-3 border-0' />
                                </div>
                                <div className='flex-column py-3'>
                                    <label htmlFor="Email">Email <span className='text-danger'>*</span></label>
                                    <input type="Email" placeholder='Email' className='p-3 border-0' />
                                </div>
                                <div className='flex-column py-3'>
                                    <label htmlFor="Phone">Phone <span className='text-danger'>*</span></label>
                                    <input type="text" placeholder='Phone' className='p-3 border-0' />
                                </div>
                                <div className='flex-column py-3'>
                                    <label For="Message*">Message <span className='text-danger'>*</span></label>
                                    <textarea type="text" placeholder='Message' className='p-3 border-0' />
                                </div>
                                <div className='flex-column'>
                                    <button type="button" className='btn SubmitFormAuto'>Submit</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-6 py-5'>
                    <div className='Frequently_Left flex-column'>
                        <div className='d-flex justify-content-end'>
                            <img src={Single_BlackBol_Line} alt="" />
                        </div>
                        <h2 className='sans_light text-center'>
                            Customer's Frequently <br />
                            Asked Questions (FAQs)
                        </h2>
                        <p className='sans_light text-center my-4'>
                            If you have any questions, please ask us and we will
                            answer you at the earliest possible. Make a question now.
                        </p>

                        <div className='faq-section'>
                            {faqs.map((faq, index) => (
                                <div key={index} className='faq-item'>
                                    <div className='faq-question' onClick={() => toggleFAQ(index)}>
                                        <h5 className='sans_light'>{faq.question}</h5>
                                        <span className='arrow'>
                                            {openIndex === index ? <MdOutlineKeyboardArrowUp className='arrow_upicon fs-3' /> : <MdOutlineKeyboardArrowDown className='arrow_upicon fs-3' />}
                                        </span>
                                    </div>
                                    <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                        <p className='sans_light'>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frequently;
