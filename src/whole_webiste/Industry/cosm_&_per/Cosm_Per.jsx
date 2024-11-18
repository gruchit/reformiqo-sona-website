import React from 'react';
import Top from '../../component/Top/Top';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import TopSliderPhar from '../Pharmaceutical/TopSliderPhar';
import PharmTxt from '../Pharmaceutical/PharmTxt';
import Our_Solutions from '../Pharmaceutical/Our_Solutions';
import TbasOutSolu from '../Pharmaceutical/TbasOutSolu';
import Faq from '../Pharmaceutical/Faq';

function Cosm_Per() {
    return (
        <>
            <Top />
            <Header />
            <TopSliderPhar Type="Cosm" />
            <PharmTxt Type="Cosm" />
            <Our_Solutions  Type="Cosm"/>
            <TbasOutSolu Type="Cosm" />
            <Faq Type="Cosm" />
            <Footer />
        </>
    );
}

export default Cosm_Per;
