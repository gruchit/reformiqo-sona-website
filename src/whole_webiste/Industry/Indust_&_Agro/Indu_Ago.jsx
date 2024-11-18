import React from 'react';
import Top from '../../component/Top/Top';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import TopSliderPhar from '../Pharmaceutical/TopSliderPhar';
import PharmTxt from '../Pharmaceutical/PharmTxt';
import Our_Solutions from '../Pharmaceutical/Our_Solutions';
import TbasOutSolu from '../Pharmaceutical/TbasOutSolu';
import Faq from '../Pharmaceutical/Faq';

function Indu_Ago() {
  return (
    <>
    <Top />
      <Header />
      <TopSliderPhar Type="Indu" />
      <PharmTxt Type="Indu" />
      <Our_Solutions Type="Indu" />
      <TbasOutSolu Type="Indu" />
      <Faq Type="Indu" />
      <Footer />
    </>
  )
}

export default Indu_Ago