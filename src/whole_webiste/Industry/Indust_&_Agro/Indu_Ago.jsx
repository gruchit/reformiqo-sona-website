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
function Indu_Ago() {
  return (
    <>
      <Helmet>
        <title>Industrial & Agro-Chemical | Sona Extrusion</title>
        <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
        <meta name="keywords" content="company, products, services, home, business" />
      </Helmet>
      <Top />
      <Header />
      <Focus type="Indu_Ago" />
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