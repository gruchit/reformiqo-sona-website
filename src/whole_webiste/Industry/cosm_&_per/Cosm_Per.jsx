import React from 'react';
import Top from '../../component/Top/Top';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import TopSliderPhar from '../Pharmaceutical/TopSliderPhar';
import PharmTxt from '../Pharmaceutical/PharmTxt';
import Our_Solutions from '../Pharmaceutical/Our_Solutions';
import TbasOutSolu from '../Pharmaceutical/TbasOutSolu';
import Faq from '../Pharmaceutical/Faq';
import Focus from '../../Home/Focus.jsx'
import Helmet from 'react-helmet';
function Cosm_Per() {
    return (
        <>
            <Helmet>
                <title>Cosmetic & Personal Care Packaging Manufacturer & Supplier</title>
                <meta name="description" content="Expert manufacturer of cosmetic and personal care packaging. We offer eco-friendly, innovative, and durable designs that reflect your brand’s unique identity." />
            </Helmet>
            <Top />
            <Header />
            <Focus type="Cosm_Per" />
            <TopSliderPhar Type="Cosm" />
            <PharmTxt Type="Cosm" />
            <Our_Solutions Type="Cosm" />
            <TbasOutSolu Type="Cosm" />
            <Faq Type="Cosm" />
            <Footer />
        </>
    );
}

export default Cosm_Per;
