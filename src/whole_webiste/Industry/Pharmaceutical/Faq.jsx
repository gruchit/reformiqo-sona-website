import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Single_BlackBol_Line from '../../../assets/single_BlackBol_Line.svg'

import './pharm.css'

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the minimum order quantity of aluminium collapsible tubes for pharmaceutical companies?",
      answer: "The minimum order quantity (MOQ) for aluminium collapsible tubes for pharmaceutical companies is dependent on the size, shape, and other specifications of the tubes. However, because of the highly efficient manufacturing processes used by us we can fulfil demands of both small- and large-scale pharma companies. Clients can get in touch with the business to discuss their unique needs and obtain a quote.  "
    },
    {
      question: "Does Sona Extrusion provide any fringe benefits for pharmaceutical companies?",
      answer: "Yes, we provider our pharmaceutical partners fringe benefits such as packaging and labelling. Additionally, the facility is designed to handle both small and large production runs. Also, we can offer labelling services to guarantee that the packaging complies with the legal requirements of various markets."
    },
    {
      question: "What kind of Quality Control measure does Sona Extrusion have in place to ensure the quality of aluminium collapsible tubes?",
      answer: "We have a robust quality control procedures that guarantee they meet the highest requirements. Every step of the process is carefully monitored, from the selection and blending of raw materials to final product testing."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className='Faq'>
        <div className='container'>
          <div className='FaqTxt'>
            <img src={Single_BlackBol_Line} alt="" srcset="" className='FaqImage'/>
            <h2 className='pb-5 sans_light'>(FAQs)</h2>
          </div>
          <div className='faq-section'>
            {faqs.map((faq, index) => (
              <div key={index} className='faq-item border-0 mb-4'>
                <div
                  className={`faq-question ${openIndex === index ? 'faq-section-open' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h5 className='sans_light'>{faq.question}</h5>
                  <span className='arrow'>
                    {openIndex === index ? (
                      <MdOutlineKeyboardArrowUp className='arrow_upicon fs-3' />
                    ) : (
                      <MdOutlineKeyboardArrowDown className='arrow_upicon fs-3' />
                    )}
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
    </>
  )
}

export default Faq