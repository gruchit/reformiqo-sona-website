import React, { useEffect, useState } from 'react';
import Cert1 from '../../../assets/Certificates1.png';
import Cert2 from '../../../assets/Certificates2.png';
import Cert3 from '../../../assets/Certificates3.png';
import './Manu.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Certificates() {
    const [expandedImage, setExpandedImage] = useState(null);

    useEffect(() => {
        AOS.init({
            once: true,
        });

        // Prevent scroll when modal is open
        if (expandedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [expandedImage]);

    const handleImageClick = (certificate) => {
        setExpandedImage(certificate);
    };

    const closeImage = () => {
        setExpandedImage(null);
    };

    return (
        <>
            <div className="Certificates">
                <div className="CertTxt">
                    <div
                        className="container"
                        data-aos="zoom-in-up"
                        data-aos-duration="500"
                        data-aos-offset="200"
                    >
                        <div className="flex-column">
                            <h1 className="text-center mb-5">Certificates</h1>
                            <p className="text-secondary text-center sans_Light">
                                Sona Extrusion Pvt. Ltd. is one of the leading manufacturers of
                                aluminum collapsible tubes, containers and aluminum bottles/flasks
                                in India, duly ISO 15378:2017 (GMP) Certified – SGS (Primary
                                Packaging Materials for Pharmaceutical Products) & ISO 9001:2015
                                Certified – TUV & US DMF Registered Company.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-xxl">
                    <div className="CertBody">
                        <div className="row d-flex justify-content-center">
                            {[Cert1, Cert2, Cert3].map((cert, index) => (
                                <div
                                    key={index}
                                    className="col-xl-4 col-lg-4 col-md-6 mt-5 d-flex justify-content-center"
                                >
                                    <div
                                        className="CertBodyCard"
                                        data-aos="fade-up"
                                        onClick={() => handleImageClick(cert)}
                                    >
                                        <img
                                            src={cert}
                                            alt={`Certificate ${index + 1}`}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Scaled Image */}
            {expandedImage && (
                <div className="expanded-image-container" onClick={closeImage} >
                    <img src={expandedImage} alt="Expanded Certificate" data-aos="zoom-in" data-aos-duration="400"/>
                </div>
            )}
        </>
    );
}

export default Certificates;
