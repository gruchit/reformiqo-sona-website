import React, { useEffect, useState } from "react";
import Top from '../../component/Top/Top'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Map from '../../Home/SonaMap'
import Trusted from '../../Home/Trusted'
import AdvantagesTop from './AdvantagesTop'
import ThreTabs from './ThreTabs'
import CompanyChange from './CompanyChange'
import WhyChoose from './WhyChoose'
import Focus from "../../Home/Focus.jsx";
import Helmet  from 'react-helmet';
import Loader from "../../component/Loader/Loader.jsx";
import CMPsecond from './CMPsecond'
function AdvantagesSona() {
  return (
    <>
      <Helmet>
        <title>Advantages Sona | Sona Extrusion</title>
        <meta name="description" content="Explore our products and services on our official homepage. Learn more about our company and mission." />
        <meta name="keywords" content="company, products, services, home, business" />
      </Helmet>
        <Top />
        <Header />
        <Focus type="AdvantagesSona"/>
        <AdvantagesTop />
        <ThreTabs />
        <Trusted />
        <CompanyChange />
        <WhyChoose />
        {/* <CMPsecond/> */}
        <Map />
        <Footer />
      
    </>
  )
}

export default AdvantagesSona