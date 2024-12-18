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
        <title>Nutraceutical Packaging Containers Manufacturer & Supplier</title>
        <meta name="description" content="Premium nutraceutical packaging containers that prioritize safety and sustainability. Explore durable, eco-friendly containers crafted for the health industry.
" />
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