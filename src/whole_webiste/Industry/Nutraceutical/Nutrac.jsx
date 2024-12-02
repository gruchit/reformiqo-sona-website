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
function Nutrac() {
  return (
    <>
    <Helmet>
        <title>Nutraceutical | Sona Extrusion</title>
        <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
        <meta name="keywords" content="company, products, services, home, business" />
      </Helmet>
      <Top />
      <Header />
      <Focus type="Nutrac"/>
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