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
import Helmet from 'react-helmet';
import Loader from "../../component/Loader/Loader.jsx";
import CMPsecond from './CMPsecond'
function AdvantagesSona() {
  const Category_Name = "Advantages Sona";
    const Category_URL = "https://sonaextrusion.com/About/Advatages-Sona";
    const Category_Description = "Sonaextrusion delivers a perfect mixture of technology, durability, and eco-consciousness. Explore the advantages of choosing us as your extrusion partner!";

const schema = `{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "${Category_Name}",
    "url": "${Category_URL}",
    "description": "${Category_Description}"
}`;
  return (
    <>
      <Helmet>
        <title>Sonaextrusion Advantages: Where Quality Meets Innovation</title>
        <meta name="description" content={Category_Description} />
        <script type="application/ld+json">
          {schema}
        </script>
      </Helmet>
      <Top />
      <Header />
      <Focus type="AdvantagesSona" />
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