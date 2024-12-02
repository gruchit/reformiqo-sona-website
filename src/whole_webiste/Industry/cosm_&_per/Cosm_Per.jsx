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
                <title>Cosmetic & Personal-Care | Sona Extrusion</title>
                <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
                <meta name="keywords" content="company, products, services, home, business" />
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
