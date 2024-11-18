import React from 'react';
import Top from '../../component/Top/Top';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import TopSliderPhar from '../Pharmaceutical/TopSliderPhar';
import PharmTxt from '../Pharmaceutical/PharmTxt';
import Our_Solutions from '../Pharmaceutical/Our_Solutions';
import TbasOutSolu from '../Pharmaceutical/TbasOutSolu';
import Faq from '../Pharmaceutical/Faq';

function Nutrac() {
  return (
    <>
      <Top />
      <Header />
      <TopSliderPhar Type="Nut" />
      <PharmTxt Type="Nut" />
      <Our_Solutions Type="Nut" />
      <TbasOutSolu Type="Nut" />
      <Faq Type="Nut" />
      <Footer />
    </>

  )
}

export default Nutrac