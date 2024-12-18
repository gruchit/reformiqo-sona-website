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
        <title>Sonaextrusion Advantages: Where Quality Meets Innovation</title>
        <meta name="description" content="Sonaextrusion delivers a perfect mixture of technology, durability, and eco-consciousness. Explore the advantages of choosing us as your extrusion partner!
"/>
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