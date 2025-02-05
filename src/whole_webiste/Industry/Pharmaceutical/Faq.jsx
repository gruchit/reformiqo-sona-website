import React, { useState } from 'react';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Single_BlackBol_Line from '../../../assets/single_BlackBol_Line.svg'
import './pharm.css'
import '../IndustryHome/indu.css'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


function Faq({ Type }) {
  useEffect(() => {
    AOS.init({
      once:true
    });
}, []);


  const [openIndex, setOpenIndex] = useState(null);

  let faqs;

  // Conditional logic for FAQs
  if (Type === "Cosm") {
    faqs = [
      {
        question: "What is the lead time for delivering aluminum collapsible tubes to Cosmetic and Personal care companies?",
        answer: "Because of our state-of-the-art manufacturing processes, we are able to provide aluminum collapsible tubes in a very short period of time. However, delivery can be influenced by a number of variables, including order volume, customization needs, and production capacity.",
      },
      {
        question: "What type of printing option can be expected for aluminum collapsible tubes by Cosmetic and Personal care companies?",
        answer:
          "Depending on the requirement, we offer several printing options using premium inks and printing methods. Clients can choose from a variety of colours, designs, and finishes to create packaging that suits the needs of their brand and product.",
      },
      {
        question: "What type of customization possibilities exist for Cosmetic and Personal care companies using aluminum collapsible tube?",
        answer:"We, offer a range of customization options for collapsible aluminum tubes for makers of cosmetics and personal care products. These customization options include, but are not limited to, custom colours, custom design print, flexible MOQ (minimum order quantity), select cap designs and a range of fill sizes to suit customer needs.",
      },
    ];
  } else if (Type === "Nut") {
    faqs = [
      {
        question: "How can any Agro-Chemical company benefit from using aluminum collapsible tube?",
        answer: "The biggest advantage of using aluminum collapsible tube from Sona Extrusion is that our highly-efficient manufacturing processes provide superior protection against light, air and moisture for Agro-Chemical products. Additionally, aluminum collapsible tubes are cost effective, making them a popular choice for agrochemical packaging.",
      },
      {
        question: "How versatile is aluminum collapsible tube for Agro-Chemical products?",
        answer:"The aluminum used in these tubes is generally durable and suitable for containing hazardous materials, which makes them a safe option for storing a variety of agrochemical products. However, specific packaging materials might be needed for some extremely corrosive or reactive chemicals. If you want to know whether aluminum collapsible tubes are the best option for your product, it is important to speak with your packaging supplier.",
      },
      {
        question: "How are Agro-Chemical products placed within aluminum collapsible tubes?",
        answer:"Specialised equipment’s are usually deployed to pump the product through a nozzle or filling head into the tube. The ends of the tubes are then folded and sealed with a tight seal by a crimping machine to stop leaks.",
      }
    ];
  } else if (Type === "Indu") {
    faqs = [
      {
        question: "What type of industrial product works well with aluminum collapsible tubes, canisters and bottles?",
        answer: "Adhesive, silicon gasket Maker, super glue will be filled inside bottles and canisters are just a few of the industrial goods that work well in aluminum collapsible tubes, canisters and bottles. If you want to know whether aluminum collapsible tubes, canisters and bottles are the best option for your particular product, it's important you speak with our team.",
      },
      {
        question: "Can Sona Extrusion customise tubes, canisters and bottles with different closure options for industrial and agro-chemical products?",
        answer:"Our high-tech processes provide us with the opportunity to offer our clients with a variety of closure options for aluminum collapsible tubes, canisters and bottles. For tubes caps options are spike, conical, 3 piece, cylinder spike, reverse spike caps. For tablet canisters comes with desiccant and pushed caps and aluminum bottles comes with pump, flip-top caps.",
      },
      {
        question: "How is aluminum collapsible tube, canisters and bottles better than other types of packaging such as plastic or glass for industrial and agro-chemical products?",
        answer:"Aluminum collapsible tubes, canisters and bottles are less likely to break or leak than glass or plastic tubes, making them a more dependable option for industrial and agro-chemical products. In addition, aluminum collapsible tubes, canisters and bottles are more cost-effective than glass and plastic alternatives, as they require less energy to manufacture and transport.",
      }
    ];
  } else {
    faqs = [
      {
        question: "What is the minimum order quantity of aluminum collapsible tubes for pharmaceutical companies?",
        answer: "The minimum order quantity (MOQ) for aluminum collapsible tubes for pharmaceutical companies is dependent on the size, shape, and other specifications of the tubes. However, because of the highly efficient manufacturing processes used by us we can fulfil demands of both small- and large-scale pharma companies. Clients can get in touch with the business to discuss their unique needs and obtain a quote.  "
      },
      {
        question: "Does Sona Extrusion provide any fringe benefits for pharmaceutical companies?",
        answer: "Yes, we provider our pharmaceutical partners fringe benefits such as packaging and labelling. Additionally, the facility is designed to handle both small and large production runs. Also, we can offer labelling services to guarantee that the packaging complies with the legal requirements of various markets."
      },
      {
        question: "What kind of Quality Control measure does Sona Extrusion have in place to ensure the quality of aluminum collapsible tubes?",
        answer: "We have a robust quality control procedures that guarantee they meet the highest requirements. Every step of the process is carefully monitored, from the selection and blending of raw materials to final product testing."
      }
    ];
  }




  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className='Faq'>
        <div className='container'>
          <div className='FaqTxt'>
            <img src={Single_BlackBol_Line} alt=""  className='FaqImage' loading='lazy'/>
            <h2 className='pb-5 sans_light'>(FAQs)</h2>
          </div>
          <div className='faq-section'>
            {faqs.map((faq, index) => (
              <div key={index} className='faq-item border-0 mb-4' data-aos="zoom-in-up" data-aos-duration="600">
                <div
                  className={`faq-question ${openIndex === index ? 'faq-section-open' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h5 className='sans_light'>{faq.question}</h5>
                  <span className='arrow'>
                    {openIndex === index ? (
                      <MdOutlineKeyboardArrowUp className={`arrow_upicon fs-3 ${openIndex === index ? 'text-white' : ''} `} data-aos="flip-up" data-aos-duration="500"/>
                    ) : (
                      <MdOutlineKeyboardArrowDown className='arrow_upicon fs-3' data-aos="flip-up"  data-aos-duration="500"/>
                    )}
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
    </>
  )
}

export default Faq